import React from 'react'
import './SearchBox.scss'

const SearchBox: React.FC = () => (
  <div className="row justify-content-center">
    <div className="col-sm-12 col-lg-10">
      <form>
        <input
          name="search-box"
          className="form__search"
          placeholder="Abu & Ali Sdn Bhd"
        />
      </form>
    </div>
  </div>
)

export default SearchBox
