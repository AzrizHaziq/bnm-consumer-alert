import Spinner from 'components/Spinner/Spinner'
import React, { useEffect, useState } from 'react'
import { consumerAlert } from 'data/consumer-alert'
import ErrorMessage from 'components/ErrorMessage/ErrorMesssage'

import './App.scss'
import { random } from '../../helpers'
import EmptyState from '../EmptyState/EmptyState'
import Consumers from '../Consumer/Consumers'

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
        <Consumers item={consumerAlert} />
      )}
    </div>
  )
}

export default App
