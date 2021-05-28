import React, { createContext, ReactNode, SetStateAction, useState } from 'react'

const SearchContext = createContext<ISearchContext>({
  currentSearch: '',
  setSearch: () => {
    /**/
  },
  resetSearch: () => {
    /**/
  },
})

const SearchContextProvider = SearchContext.Provider

const Search: React.FC<ISearchProp> = ({ initialSearch, children }: ISearchProp) => {
  const [search, setSearch] = useState<string>(initialSearch)

  function resetSearch() {
    setSearch('')
  }

  return (
    <SearchContextProvider
      value={{
        currentSearch: search,
        setSearch,
        resetSearch,
      }}>
      {children}
    </SearchContextProvider>
  )
}

export { Search, SearchContext, SearchContextProvider }

export interface ISearchContext {
  currentSearch: string
  setSearch: (value: SetStateAction<string>) => void
  resetSearch: () => void
}

interface ISearchProp {
  initialSearch: string
  children: ReactNode
}
