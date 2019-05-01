import React, { useContext } from 'react'
import { IConsumerAlert } from 'data/consumer-alert'
import {
  ConsumerAlertContext,
  IConsumerContext,
} from 'data/consumer-alert.context'

import './Consumers.scss'
import Consumer from './Consumer'

const Consumers: React.FC = () => {
  const { consumerList } = useContext<IConsumerContext>(ConsumerAlertContext)

  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-lg-10">
        <div className="consumers__list" id="custom-scrollbar">
          <ul className="pl-0 w-100 mb-0">
            {consumerList.map((data: IConsumerAlert) => (
              <Consumer key={data.id} item={data} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Consumers
