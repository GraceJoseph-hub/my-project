import React from 'react'
import Loader from '../loader/Loader';
import SideBar from '../sidebar/SideBar';
import Products from '../products/Products';
import useSearch from '../../hooks/useSearch';

const Search = () => {
  const {isLoading} = useSearch()
  return (
    <div className="search mt-28">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="results">
        {isLoading ? <Loader /> : <Products />}
      </div>
    </div>
  );
}

export default Search