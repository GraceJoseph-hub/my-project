import React from 'react'
import SideBar from '../component/sidebar/SideBar'
import SecondaryBanner from '../component/secondaryBanner/SecondaryBanner'
import TopBar from '../component/topbar/TopBar'
import useSearch from '../hooks/useSearch'
import Products from '../component/products/Products'
import SearchProvider from '../states/search-context'

const Search = () => {
  const { products, setFilter } = useSearch();
  
  // console.log(products)
  return (
    <div className="container mx-auto w-full">
      <SecondaryBanner />
      <SearchProvider>
        <div className="search mt-28">
          <div className="sidebar">
            <SideBar setFilter={setFilter} />
          </div>
          <div className="topbar">
            <TopBar setFilter={setFilter} />
          </div>
          <div className="results">
            <Products products={products} />
          </div>
        </div>
      </SearchProvider>
    </div>
  );
}

export default Search