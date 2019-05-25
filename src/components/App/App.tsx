import { random } from 'helpers'
import React, { useEffect, useState } from 'react'
import { consumerAlerts, IConsumerAlert } from 'data/consumer-alerts'

import Sort from 'components/Sort/Sort'
import Tags from 'components/Tags/Tags'
import Spinner from 'components/Spinner/Spinner'
import Consumers from 'components/Consumer/Consumers'
import SearchBox from 'components/SearchBox/SearchBox'
import EmptyState from 'components/EmptyState/EmptyState'
import { ConsumerAlert } from 'data/consumer-alert.context'
import ErrorMessage from 'components/ErrorMessage/ErrorMesssage'

import './App.scss'

const App: React.FC = () => {
  const [consumerList, setConsumerList] = useState<IConsumerAlert[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      try {
        setConsumerList(consumerAlerts)
      } catch (e) {
        setError({ e, msg: 'Error getting list of consumer alert' })
      } finally {
        setLoading(false)
      }
    }, random(1500, 3000))
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
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-10">
                  <h2 className="text-white-50 mb-4 mr-4">
                    BNM Consumer Alert
                  </h2>
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
          </ConsumerAlert>
        </div>
      )}
    </div>
  )
}

export default App
