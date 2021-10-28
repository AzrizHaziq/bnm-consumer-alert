import React from 'react'
import { v1 as uuid } from 'uuid'
import { pipe, leadingZero } from 'helpers'
import { IConsumerAlert } from 'data/consumer-alerts'

import './Consumer.scss'

// eslint-disable-next-line
const isValidWebsite = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

const Link: React.FC<{ url: string }> = ({ url }: { url: string }) => {
  if (!url || !isValidWebsite.test(url)) {
    return null
  }

  // prefix with https:// if string start with www.
  const makeAValidUrl = pipe(
    (str: string) => str.replace(/^www./, 'https://www.'),
    (str: string) => (str.length > 45 ? `${str.slice(0, 45)}...` : str)
  )(url)

  return (
    <li>
      <a className="consumer__link" href={makeAValidUrl} target="_blank" rel="noopener noreferrer">
        {makeAValidUrl}
      </a>
    </li>
  )
}

const Consumer: React.FC<{ item: IConsumerAlert }> = ({ item }: { item: IConsumerAlert }) => {
  const { name, registration_number, websites, added_date, bg_color } = item
  const avatar = name.slice(0, 2).toUpperCase()
  const month = added_date.getMonth() + +1
  const date = `${leadingZero(added_date.getDate())}/${leadingZero(month)}/${added_date.getFullYear()}`

  return (
    <li className="consumer__list consumer__list-style">
      <div className={`consumer__avatar ${bg_color}`}>{avatar}</div>
      <div className="consumer__content">
        <div className="consumer__content__heading">
          <p className="mb-0">
            {name}
            {registration_number && (
              <span className="consumer__registration-number ml-1 mb-0">({registration_number})</span>
            )}
          </p>
          <div className="consumer__date-added">
            <svg viewBox="0 0 24 24">
              <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
            </svg>
            <small className="consumer--muted">{date}</small>
          </div>
        </div>
        <ul className="consumer__list__websites consumer__list-style">
          {websites.map(website => {
            const url: any = website.trim()

            if (url.split(' ').length > 1) {
              return url.split(' ').map((data: string) => <Link key={uuid()} url={data} />)
            }

            return <Link key={uuid()} url={url} />
          })}
        </ul>
      </div>
    </li>
  )
}

export default Consumer
