import React, { useContext, useState } from 'react'
import { searchConsumerAlerts } from 'data/consumer-alerts'
import {
  ConsumerAlertContext,
  IConsumerContext,
} from 'data/consumer-alert.context'

import './SearchBox.scss'

const SearchBox: React.FC = () => {
  const [value, setValue] = useState('')

  const { setConsumerList, resetConsumerList } = useContext<IConsumerContext>(
    ConsumerAlertContext,
  )

  const onChange = (e: any) => {
    const { value: val } = e.target
    setValue(val)

    if (val === '') {
      resetConsumerList()
      return
    }

    const filterConsumerAlerts = searchConsumerAlerts(val)

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
