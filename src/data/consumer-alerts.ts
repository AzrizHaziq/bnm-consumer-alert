import uuid from 'uuid/v1'
import { escapeRegExp, pipe } from 'helpers'
import { data } from 'data/consumer-alert.json'
import { mapToArray, sortBy } from 'helpers/map-to-array'

export const PLUCK_MOST_USED_KEYWORDS_BY = 30

export const consumerAlerts: IConsumerAlert[] = data.map(
  ({ regisration_number, added_date, ...item }) => ({
    ...item,
    id: uuid(),
    added_date: new Date(added_date),
    registration_number: regisration_number,
  }),
)

export interface IConsumerAlert {
  id: string
  name: string
  registration_number: string
  added_date: Date
  websites: string[]
}

export const keywords = (arr: IConsumerAlert[]): Map<string, number> =>
  arr.reduce((acc, item) => {
    const { name } = item

    const spliced = name.split(' ')

    spliced.forEach(str => {
      // if valid number then drop it
      if (!isNaN(+str)) {
        return
      }

      const smallCase = str.toLowerCase()

      if (!acc.get(smallCase)) {
        acc.set(smallCase, 0)
      }

      acc.set(smallCase, (acc.get(smallCase) || 0) + 1)
    })

    return acc
  }, new Map())

export const mostUsedWords = pipe(
  keywords,
  mapToArray,
  sortBy('v', 'desc'),
  (list: IConsumerAlert[]) => list.slice(0, PLUCK_MOST_USED_KEYWORDS_BY),
)(consumerAlerts)

export const searchConsumerAlerts = (str: string): IConsumerAlert[] =>
  consumerAlerts.filter((consumer: IConsumerAlert) => {
    const reg = new RegExp(escapeRegExp(str), 'ig')
    const { name } = consumer

    return reg.test(name)
  })

export const orderBy = (key: string, by: 'asc' | 'desc') =>
  pipe(
    sortBy(key, by),
    (list: IConsumerAlert[]) => [...list],
  )
