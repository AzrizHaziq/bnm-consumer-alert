import { escapeRegExp } from 'helpers'
import React, { useContext, useState } from 'react'
import {
  ConsumerAlertContext,
  IConsumerContext,
} from 'data/consumer-alert.context'

import './SearchBox.scss'

const SearchBox: React.FC = () => {
  const [value, setValue] = useState('')

  const { consumerAlerts, setConsumerAlerts, resetConsumerAlerts } = useContext<
    IConsumerContext
  >(ConsumerAlertContext)

  const onChange = (e: any) => {
    const { value: val } = e.target
    setValue(val)

    if (val === '') {
      resetConsumerAlerts()
      return
    }

    const filterConsumerAlerts = consumerAlerts.filter(consumer => {
      const reg = new RegExp(escapeRegExp(val), 'ig')
      const { name } = consumer

      return reg.test(name)
    })

    setConsumerAlerts(filterConsumerAlerts)
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
