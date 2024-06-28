import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import { BRANDS } from '../constants/brands'
import { SORTING } from '../constants/sorting'

const TopBar = ({setFilter}) => {
  const handleOnchange = (e) => {
    const {name, value} = e.target; // here, we're extracting the name and value properties from the target(which is the Select field)
    setFilter(name, value)
    // console.log(e.target.name);
  }
  
  return (
    <div className="flex space-x-4">
      <Dropdown
        type="brand"
        values={["all", ...BRANDS]}
        onChange={handleOnchange}
      />
      <Dropdown type="sort" values={SORTING} onChange={handleOnchange} />
    </div>
  );
}

export default TopBar