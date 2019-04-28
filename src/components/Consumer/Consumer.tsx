import React from 'react'
import uuid from 'uuid/v1'
import { pipe, randomBgCssColor } from 'helpers'
import { IConsumerAlert } from 'data/consumer-alert'

import './Consumer.scss'

// eslint-disable-next-line no-useless-escape
const isValidWebsite = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

const Link: React.FC<{ url: string }> = ({ url }) => {
  if (!url || !isValidWebsite.test(url)) {
    return null
  }

  // prefix with https:// if string start with www.
  const makeAValidUrl = pipe(
    (str: string) => str.replace(/^www./, 'https://www.'),
    (str: string) => (str.length > 45 ? `${str.slice(0, 45)}...` : str),
  )(url)

  return (
    <li>
      <a
        className="consumer__link"
        href={makeAValidUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {makeAValidUrl}
      </a>
    </li>
  )
}

const Consumer: React.FC<{ item: IConsumerAlert }> = ({ item }) => {
  const { name, registration_number, websites } = item
  const avatar = name.slice(0, 2).toUpperCase()

  return (
    <li className="consumer__list consumer__list-style">
      <div className={`consumer__avatar ${randomBgCssColor()}`}>{avatar}</div>
      <div className="consumer-content">
        <p className="mb-0">
          {name}
          {registration_number && (
            <span className="consumer__registration-number ml-1 mb-0">
              ({registration_number})
            </span>
          )}
        </p>
        <ul className="consumer__list__websites consumer__list-style">
          {websites.map(website => {
            const url: any = website.trim()

            if (url.split(' ').length > 1) {
              return url
                .split(' ')
                .map((data: string) => <Link key={uuid()} url={data} />)
            }

            return <Link key={uuid()} url={url} />
          })}
        </ul>
      </div>
    </li>
  )
}

export default Consumer
