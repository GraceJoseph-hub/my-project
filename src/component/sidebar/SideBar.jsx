import React from 'react'
import PriceRange from '../priceRange/PriceRange'
import CategoriesBar from '../categoriesBar/CategoriesBar'
import Dropdown from '../dropdown/Dropdown'
import { BRANDS } from '../constants/brands'
import { setFilter } from '../../states/actionCreators'


const SideBar = ({ setFilter }) => {
  const handleOnchange = (e) => {
    const { name, value } = e.target; // here, we're extracting the name and value properties from the target(which is the Select field)
    setFilter(name, value);
    // console.log(e.target.name);
  };
  return (
    <div className="pl-6">
      <PriceRange />
      <Dropdown
        type="brand"
        values={["all", ...BRANDS]}
        onChange={handleOnchange}
      />
      <div className="bg-grey-200 px-6 py-2 mb-4 text-sm">
        <CategoriesBar setFilter={setFilter} />
      </div>
    </div>
  );
}

export default SideBar