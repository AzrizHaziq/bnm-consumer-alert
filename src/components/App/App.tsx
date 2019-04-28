import { random } from 'helpers'
import React, { useEffect, useState } from 'react'
import { consumerAlert } from 'data/consumer-alert'

import Tags from 'components/Tags/Tags'
import Spinner from 'components/Spinner/Spinner'
import Consumers from 'components/Consumer/Consumers'
import SearchBox from 'components/SearchBox/SearchBox'
import EmptyState from 'components/EmptyState/EmptyState'
import ErrorMessage from 'components/ErrorMessage/ErrorMesssage'

import './App.scss'

const App: React.FC = () => {
  const [alertList, setAlertList] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      try {
        setAlertList(consumerAlert)
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
        <Spinner />
      ) : error ? (
        <ErrorMessage str={error.msg} />
      ) : alertList === null ? null : alertList.length <= 0 ? (
        <EmptyState str="Oops might need to add list here" />
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-10">
              <h2 className="text-white-50 mb-4">BNM Consumer Alert</h2>
            </div>
          </div>
          <SearchBox />
          <div className="mb-2" />
          <Consumers item={consumerAlert} />
          <div className="mb-5" />
          <Tags />
          <div className="mb-5" />
        </div>
      )}
    </div>
  )
}

export default App
