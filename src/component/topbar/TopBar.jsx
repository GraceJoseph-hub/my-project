import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import { BRANDS } from '../constants/brands'
import { SORTING } from '../constants/sorting'

const TopBar = () => {
  const handleOnchange = (e) => {
    
    console.log(e.target.value)
  }
  
  return (
    <div className="flex space-x-4">
      <Dropdown
        type="brand"
        values={["ALL", ...BRANDS]}
        onChange={handleOnchange}
      />
      <Dropdown type="sort" values={SORTING} onChange={handleOnchange} />
    </div>
  );
}

export default TopBar