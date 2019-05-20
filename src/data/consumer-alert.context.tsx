import React, { createContext, useState } from 'react'
import { consumerAlerts, IConsumerAlert } from 'data/consumer-alerts'

const ConsumerAlertContext = createContext<IConsumerContext>({
  consumerList: [],
  setConsumerList: () => {},
  resetConsumerList: () => {},
})

const ConsumerAlertProvider = ConsumerAlertContext.Provider

function ConsumerAlert({ children }: any) {
  const [consumerList, setConsumerList] = useState<IConsumerAlert[]>(
    consumerAlerts,
  )

  function resetConsumerList() {
    setConsumerList(consumerAlerts)
  }

  return (
    <ConsumerAlertProvider
      value={{
        consumerList,
        setConsumerList,
        resetConsumerList,
      }}
    >
      {children}
    </ConsumerAlertProvider>
  )
}

export { ConsumerAlert, ConsumerAlertContext, ConsumerAlertProvider }

export interface IConsumerContext {
  consumerList: IConsumerAlert[]
  setConsumerList: Function
  resetConsumerList: Function
}
