import { randomBgCssColor } from 'helpers'
import Consumers from '../Consumer/Consumers'
import React, { useEffect, useState } from 'react'
import { IConsumerAlert } from 'data/consumer-alerts'
import { Search } from 'data/Search.context/search.context'
import { ConsumerAlert } from 'data/Consumer.context/consumer-alert.context'
import { EmptyState, ErrorMessage, SearchBox, Sort, Spinner, Tags } from 'components'

import './App.scss'

const App: React.FC = () => {
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [consumerList, setConsumerList] = useState<IConsumerAlert[] | null>(null)

  async function getConsumerAlerts() {
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/AzrizHaziq/bnm-consumer-alert/master/consumer-alert.json'
      )

      const consumerAlertsResponse = await res.json()

      const reMapConsumerAlertResponse = consumerAlertsResponse.data.map((consumer: IConsumerAlert) => ({
        ...consumer,
        bg_color: randomBgCssColor(),
        added_date: new Date(consumer.added_date),
      }))

      setConsumerList(reMapConsumerAlertResponse)
    } catch (e) {
      setError({ e, msg: 'Error getting list of consumer alert' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)

    getConsumerAlerts()
  }, [])

  return (
    <div className="main">
      {loading ? (
        <div className="flex-all-center">
          <Spinner />
        </div>
      ) : error ? (
        <div className="flex-all-center">
          <ErrorMessage str={error.msg} />
        </div>
      ) : consumerList === null ? null : consumerList.length <= 0 ? (
        <div className="flex-all-center">
          <EmptyState str="Oops might need to add list here" />
        </div>
      ) : (
        <div className="consumer-alert__main">
          <ConsumerAlert consumerList={consumerList}>
            <Search initialSearch="">
              <div className="container mt-5">
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-lg-10">
                    <h2 className="text-white-50 mb-4 mr-4">BNM Consumer Alert</h2>
                  </div>
                </div>
                <SearchBox />
                <div className="mb-2" />
                <Sort />
                <div className="mb-2" />
                <Consumers />
                <div className="mb-5" />
                <Tags consumerList={consumerList} />
                <div className="mb-5" />
              </div>
            </Search>
          </ConsumerAlert>
        </div>
      )}
    </div>
  )
}

export default App
