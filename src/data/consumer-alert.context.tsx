import React, { createContext, useState } from 'react'
import { consumerAlert, IConsumerAlert } from 'data/consumer-alert'

const ConsumerAlertContext = createContext<IConsumerContext>({
  consumerList: [],
  setConsumerList: () => {},
  resetConsumerList: () => {},
})

const ConsumerAlertProvider = ConsumerAlertContext.Provider

function ConsumerAlert({ children }: any) {
  const [consumerList, setConsumerList] = useState<IConsumerAlert[]>(
    consumerAlert,
  )

  function resetConsumerList() {
    setConsumerList(consumerAlert)
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
