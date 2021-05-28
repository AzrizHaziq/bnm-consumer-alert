import { v1 as uuid } from 'uuid'
import { escapeRegExp } from 'helpers'
import React, { useContext } from 'react'
import { EmptyState } from 'components'
import { IConsumerAlert } from 'data/consumer-alerts'
import Consumer from 'components/Consumer/Consumer'
import { ISearchContext, SearchContext } from 'data/Search.context/search.context'
import { ConsumerAlertContext, IConsumerContext } from 'data/Consumer.context/consumer-alert.context'

import './Consumers.scss'

const Consumers: React.FC = () => {
  const { currentSearch } = useContext<ISearchContext>(SearchContext)
  const { consumerList } = useContext<IConsumerContext>(ConsumerAlertContext)

  // if there is currentSearch then filter it, otherwise show all
  const filterConsumerAlerts: IConsumerAlert[] = consumerList.filter((consumer: IConsumerAlert) => {
    if (currentSearch === '') {
      return true
    }

    const reg = new RegExp(escapeRegExp(currentSearch), 'ig')
    const { name } = consumer

    return reg.test(name)
  })

  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-lg-10">
        {filterConsumerAlerts.length <= 0 ? (
          <div className="p-5">
            <EmptyState str={"Oopss can't find that one, look forward"} />
          </div>
        ) : (
          <div className="consumers__list" id="custom-scrollbar">
            <ul className="pl-0 w-100 mb-0">
              {filterConsumerAlerts.map((data: IConsumerAlert) => (
                <Consumer key={uuid()} item={data} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Consumers
