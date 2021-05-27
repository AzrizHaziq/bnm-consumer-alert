const uuid = require('uuid/v1')
const http = require('https')
const fs = require('fs')
const path = require('path')

const transformerConsumerAlertsData = pipe(
  JSON.parse,
  reMapConsumerAlerts,
  consumerAlerts => JSON.stringify(consumerAlerts, null, 2),
  writeToConsumerJson,
)

function pipe(...fns) {
  return x => fns.reduce((v, f) => f(v), x)
}

function reMapConsumerAlerts({ meta, data: bnmConsumerAlerts }) {
  return {
    meta,
    data: bnmConsumerAlerts.map(
      // eslint-disable-next-line camelcase
      ({ registration_number, added_date, name, ...item }) => ({
        ...item,
        name,
        added_date: new Date(added_date),
        registration_number: /\(.{4,}\)/.exec(name)
          ? /\(.{4,}\)/
              .exec(name)[0]
              .replace(/[()]/g, i => ({ '(': '', ')': '' }[i]))
          : '',
      }),
    ),
  }
}

function getConsumerFromBNM() {
  const options = {
    headers: {
      Accept: 'application/vnd.BNM.API.v1+json',
    },
  }

  const req = http.get(
    'https://api.bnm.gov.my/public/consumer-alert',
    options,
    res => {
      const chunks = []

      res.on('data', chunk => {
        chunks.push(chunk)
      })

      res.on('end', () => {
        const body = Buffer.concat(chunks)
        transformerConsumerAlertsData(body.toString())
      })
    },
  )

  req.end()
  req.on('error', err => {
    console.log('Error fetching BNM data: ', err)
  })
}

function writeToConsumerJson(consumerAlerts) {
  const dir = path.join(__dirname, 'consumer-alert.json')

  fs.writeFile(dir, consumerAlerts, err => {
    if (err) {
      console.error('Error write file', err)
      return
    }

    console.log('Successfully Written to File.')
  })
}

// request to BNM
getConsumerFromBNM()
