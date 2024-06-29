import React from 'react'
import SecondaryBanner from '../component/secondaryBanner/SecondaryBanner'
import useSearch from '../hooks/useSearch'
import SearchProvider from '../states/search-context'
import Search from '../component/search/Search'

const SearchPage = () => {
  return (
    <div className="container mx-auto w-full">
      <SecondaryBanner />
      <SearchProvider>
        <Search />
      </SearchProvider>
    </div>
  );
}

export default SearchPage