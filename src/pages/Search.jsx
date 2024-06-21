import React from 'react'
import SideBar from '../component/sidebar/SideBar'
import SecondaryBanner from '../component/secondaryBanner/SecondaryBanner'
import TopBar from '../component/topbar/TopBar'
import useSearch from '../hooks/useSearch'

const Search = () => {
  const { products, setFilter } = useSearch();
  return (
    <div className='container mx-auto w-full'>
      <SecondaryBanner />
      <div className="search mt-28">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="topbar">
          <TopBar setFilter={setFilter} />
        </div>
        <div className="results">results</div>
      </div>
    </div>
  );
}

export default Search