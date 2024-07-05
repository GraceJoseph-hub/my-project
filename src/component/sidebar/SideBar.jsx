import React from 'react'
import PriceRange from '../priceRange/PriceRange'
import CategoriesBar from '../categoriesBar/CategoriesBar'
import Dropdown from '../dropdown/Dropdown'
import { BRANDS } from '../constants/brands'
import { setFilter } from '../../states/actionCreators'
import { useSearchState } from '../../states/search-context'


const SideBar = () => {
  const [, dispatch] = useSearchState();

  const handleOnchange = (e) => {
    const { name, value } = e.target; // here, we're extracting the name and value properties from the target(which is the Select field)
    dispatch(setFilter(name, value))
  };

  const handleOnSelect = value => {
    dispatch(setFilter('productType', value))
  }
  return (
    <div className="pl-6">
      <PriceRange onChange={handleOnchange} />
      <Dropdown
        type="brand"
        values={["all", ...BRANDS]}
        onChange={handleOnchange}
      />
      <div className="bg-gray-200 px-6 py-2 mb-4 text-sm">
        <CategoriesBar onSelect={handleOnSelect} />
      </div>
    </div>
  );
}

export default SideBar