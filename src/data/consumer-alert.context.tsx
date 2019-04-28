import React, { createContext, useState } from 'react'
import { consumerAlert, IConsumerAlert } from 'data/consumer-alert'

const ConsumerAlertContext = createContext({})

const ConsumerAlertProvider = ConsumerAlertContext.Provider
const ConsumerAlertConsumer = ConsumerAlertContext.Consumer

function ConsumerAlert({ children }: any) {
  const [consumerAlerts, setConsumerAlerts] = useState<IConsumerAlert[]>(
    consumerAlert,
  )

  return (
    <ConsumerAlertProvider
      value={{
        consumerAlerts,
        setConsumerAlerts,
      }}
    >
      {children}
    </ConsumerAlertProvider>
  )
}

export {
  ConsumerAlert,
  ConsumerAlertContext,
  ConsumerAlertProvider,
  ConsumerAlertConsumer,
}
