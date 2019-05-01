import React from 'react'
import './Sort.scss'

const ArrowIcon: React.FC<{ sort: 'asc' | 'desc' }> = ({ sort }) =>
  sort === 'asc' ? (
    // arrow-up
    <svg className="sort__icon-arrow" viewBox="0 0 24 24">
      <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
    </svg>
  ) : (
    // arrow-down
    <svg className="sort__icon-arrow" viewBox="0 0 24 24">
      <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
    </svg>
  )

const Sort: React.FC = () => (
  <div className="sort">
    <div className="sort-alphabet mr-1">
      <ArrowIcon sort="asc" />
      <svg className="sort__icon" viewBox="0 0 24 24">
        <path d="M6,11A2,2 0 0,1 8,13V17H4A2,2 0 0,1 2,15V13A2,2 0 0,1 4,11H6M4,13V15H6V13H4M20,13V15H22V17H20A2,2 0 0,1 18,15V13A2,2 0 0,1 20,11H22V13H20M12,7V11H14A2,2 0 0,1 16,13V15A2,2 0 0,1 14,17H12A2,2 0 0,1 10,15V7H12M12,15H14V13H12V15Z" />
      </svg>
    </div>

    <div className="sort-date">
      <ArrowIcon sort="desc" />
      <svg className="sort__icon" viewBox="0 0 24 24">
        <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
      </svg>
    </div>
  </div>
)

export default Sort
