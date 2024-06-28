import React, { createContext, useContext } from "react";
import { initialSearchState } from "./search-state";

const SearchStateContext = createContext('searchState');

const SearchProvider = ({children}) => {
  return <SearchStateContext.Provider value={initialSearchState}>
    {children}
  </SearchStateContext.Provider>
}

const useSearchState = () => {
  const context = useContext(SearchStateContext)
  console.log(context);

  return context;
}

export {useSearchState}
export default SearchProvider