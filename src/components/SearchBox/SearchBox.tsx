import React, { useContext } from 'react'
import {
  ISearchContext,
  SearchContext,
} from 'data/Search.context/search.context'

import './SearchBox.scss'

const SearchBox: React.FC = () => {
  const { currentSearch, setSearch } = useContext<ISearchContext>(SearchContext)

  function onChange(e: any) {
    const input = e.target.value
    setSearch(input)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-lg-10">
        <input
          type="text"
          name="search-box"
          className="form__search"
          placeholder="Abu & Ali Sdn Bhd"
          value={currentSearch}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default SearchBox
