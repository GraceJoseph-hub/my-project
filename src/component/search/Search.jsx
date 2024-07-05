import React from 'react'
import SideBar from '../sidebar/SideBar';
import Products from '../products/Products';
import useSearch from '../../hooks/useSearch';

const Search = () => {
  useSearch()
  return (
    <div className="search mt-28">
      <div className="sidebar">
        <SideBar  />
      </div>
      <div className="results">
        <Products  />
      </div>
    </div>
  );
}

export default Search