import React from 'react'
import { ConsumerAlert } from 'data/consumer-alert'

import './Consumers.scss'
import Consumer from './Consumer'

const Consumers: React.FC<{ item: ConsumerAlert[] }> = ({ item }) => (
  <div className="row justify-content-center">
    <div className="col-sm-12 col-lg-10">
      <div className="consumers__list" id="custom-scrollbar">
        <ul className="pl-0 w-100 mb-0">
          {item.map((data: ConsumerAlert) => (
            <Consumer key={data.id} item={data} />
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Consumers
