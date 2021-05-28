import { IConsumerAlert } from 'data/consumer-alerts'
import React, { createContext, ReactNode, SetStateAction, useState } from 'react'

const ConsumerAlertContext = createContext<IConsumerContext>({
  consumerList: [],
  setConsumerList: () => {
    /**/
  },
  resetConsumerList: () => {
    /**/
  },
})

const ConsumerAlertProvider = ConsumerAlertContext.Provider

const ConsumerAlert = ({ consumerList: consumers, children }: IConsumerAlertProp): JSX.Element => {
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
      }}>
      {children}
    </ConsumerAlertProvider>
  )
}

export { ConsumerAlert, ConsumerAlertContext, ConsumerAlertProvider }

export interface IConsumerContext {
  consumerList: IConsumerAlert[]
  setConsumerList: (value: SetStateAction<IConsumerAlert[]>) => void
  resetConsumerList: (item: IConsumerAlert) => void
}

interface IConsumerAlertProp {
  consumerList: IConsumerAlert[]
  children: ReactNode
}
