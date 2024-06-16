import React from 'react'
import SideBar from '../component/sidebar/SideBar'

const Search = () => {
  return (
    <div>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="searchbar">topbar</div>
      <div className="results">result</div>
    </div>
  )
}

export default Search