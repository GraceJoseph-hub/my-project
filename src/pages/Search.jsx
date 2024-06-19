import React from 'react'
import SideBar from '../component/sidebar/SideBar'
import SecondaryBanner from '../component/secondaryBanner/SecondaryBanner'

const Search = () => {
  return (
    <div className='search'>
      {/* <SecondaryBanner /> */}
      <div className="sidebar mt-28">
        {/* <SideBar /> */} sidebar
      </div>
      <div className="topbar">topbar</div>
      <div className="results">results</div>
    </div>
  )
}

export default Search