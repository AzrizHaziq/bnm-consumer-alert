import React from 'react'
import { ConsumerAlert } from 'data/consumer-alert'

import './Consumers.scss'
import Consumer from './Consumer'

const Consumers: React.FC<{ item: ConsumerAlert[] }> = ({ item }) => {
  return (
    <div className="consumers__list" id="custom-scrollbar">
      <ul className="pl-0 w-100">
        {item.map((data: ConsumerAlert) => (
          <Consumer key={data.id} item={data} />
        ))}
      </ul>
    </div>
  )
}

export default Consumers
