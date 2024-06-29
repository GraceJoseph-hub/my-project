import React from 'react'
import SideBar from '../sidebar/SideBar';
import Products from '../products/Products';
import useSearch from '../../hooks/useSearch';

const Search = () => {
  const { setFilter } = useSearch();
  return (
    <div className="search mt-28">
      <div className="sidebar">
        <SideBar setFilter={setFilter} />
      </div>
      <div className="results">
        <Products  />
      </div>
    </div>
  );
}

export default Search