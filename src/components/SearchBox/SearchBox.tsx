import React, { useContext, useState } from 'react'
import { IConsumerAlert } from 'data/consumer-alerts'
import { escapeRegExp } from 'helpers'
import {
  ConsumerAlertContext,
  IConsumerContext,
} from 'data/consumer-alert.context'
import './SearchBox.scss'

const SearchBox: React.FC = () => {
  const [value, setValue] = useState('')

  const { consumerList, setConsumerList, resetConsumerList } = useContext<
    IConsumerContext
  >(ConsumerAlertContext)

  function onChange(e: any) {
    const { value: input } = e.target
    setValue(input)

    if (input === '') {
      resetConsumerList()
      return
    }

    const filterConsumerAlerts: IConsumerAlert[] = consumerList.filter(
      (consumer: IConsumerAlert) => {
        const reg = new RegExp(escapeRegExp(input), 'ig')
        const { name } = consumer

        return reg.test(name)
      },
    )

    setConsumerList(filterConsumerAlerts)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-lg-10">
        <input
          type="text"
          name="search-box"
          className="form__search"
          placeholder="Abu & Ali Sdn Bhd"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default SearchBox
