import React, { createContext, useState } from 'react'
import { consumerAlert, IConsumerAlert } from 'data/consumer-alert'

const ConsumerAlertContext = createContext<IConsumerContext>({
  consumerAlerts: [],
  setConsumerAlerts: () => {},
  resetConsumerAlerts: () => {},
})

const ConsumerAlertProvider = ConsumerAlertContext.Provider

function ConsumerAlert({ children }: any) {
  const [consumerAlerts, setConsumerAlerts] = useState<IConsumerAlert[]>(
    consumerAlert,
  )

  function resetConsumerAlerts() {
    setConsumerAlerts(consumerAlert)
  }

  return (
    <ConsumerAlertProvider
      value={{
        consumerAlerts,
        setConsumerAlerts,
        resetConsumerAlerts,
      }}
    >
      {children}
    </ConsumerAlertProvider>
  )
}

export { ConsumerAlert, ConsumerAlertContext, ConsumerAlertProvider }

export interface IConsumerContext {
  consumerAlerts: IConsumerAlert[]
  setConsumerAlerts: any
  resetConsumerAlerts: any
}
