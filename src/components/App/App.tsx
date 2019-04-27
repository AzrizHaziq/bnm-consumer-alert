import React, { useEffect, useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const [alertList, setAlertList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  async function getConsumerAlert() {
    setLoading(true)

    try {
      const url = 'https://api.bnm.gov.my/public/consumer-alert'

      const response = await fetch(url, {
        headers: {
          Accept: 'application/vnd.BNM.API.v1+json',
        },
      })

      const json = await response.json()

      setAlertList(json)
    } catch (e) {
      setError({ e, msg: 'Error getting consumer alert' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const res = getConsumerAlert().then(console.log)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
