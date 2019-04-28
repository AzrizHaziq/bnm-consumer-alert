import React from 'react'
import { randomBgCssColor } from 'helpers'
import { ConsumerAlert } from 'data/consumer-alert'

import './Consumer.scss'

interface Prop {
  item: ConsumerAlert
}

const Consumer: React.FC<Prop> = ({ item }) => {
  const { name, registration_number } = item
  const avatar = name.slice(0, 2).toUpperCase()

  return (
    <li className="consumer__list consumer__list-style">
      <div className={`consumer__avatar ${randomBgCssColor()}`}>{avatar}</div>
      <div className="consumer-content">
        <p className="mb-0">{name}</p>
        <p className="text-black-50 mb-0">{registration_number}</p>
      </div>
    </li>
  )
}

export default Consumer
