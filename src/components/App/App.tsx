import Spinner from 'components/Spinner/Spinner'
import React, { useEffect, useState } from 'react'
import { data as consumerAlert } from 'data/consumer-alert.json'
import ErrorMessage from 'components/ErrorMessage/ErrorMesssage'

import './App.css'
import { random } from '../../helpers'

const App: React.FC = () => {
  const [alertList, setAlertList] = useState<any>([])
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
    <div className="App">
      <header className="App-header">
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage str={error.msg} />
        ) : alertList.length <= 0 ? (
          'Sorry there is no alert list available'
        ) : (
          <ul>
            {alertList.map((item: any, i: number) => (
              <li key={i}>{item.name}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  )
}

export default App
