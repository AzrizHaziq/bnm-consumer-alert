import React, { createContext, ReactNode, useState } from 'react'
import { IConsumerAlert } from 'data/consumer-alerts'

const ConsumerAlertContext = createContext<IConsumerContext>({
  consumerList: [],
  setConsumerList: () => {},
  resetConsumerList: () => {},
})

const ConsumerAlertProvider = ConsumerAlertContext.Provider

const ConsumerAlert = ({
  consumerList: consumers,
  children,
}: IConsumerAlertProp) => {
  const [consumerList, setConsumerList] = useState<IConsumerAlert[]>(consumers)

  function resetConsumerList() {
    setConsumerList(consumers)
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

interface IConsumerAlertProp {
  consumerList: IConsumerAlert[]
  children: ReactNode
}
