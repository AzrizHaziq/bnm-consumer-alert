import React from 'react'
import { randomBgCssColor } from 'helpers'
import { ConsumerAlert } from 'data/consumer-alert'

import './Consumer.scss'

const Link: React.FC<{ url: string }> = ({ url }) => {
  if (!url) {
    return null
  }

  // prefix with https:// if string start with www.
  const makeAValidUrl = url.replace(/^www./, 'https://www.')

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

const Consumer: React.FC<{ item: ConsumerAlert }> = ({ item }) => {
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

            console.log(url.split(' '))
            if (url.split(' ').length > 0) {
              return (
                <Link url={url} />
                // url.map((data: string) => <Link url={data}/>)
              )
            }

            return <Link url={url} />
          })}
        </ul>
      </div>
    </li>
  )
}

export default Consumer
