import React from 'react'
import PriceRange from '../priceRange/PriceRange'
import CategoriesBar from '../categoriesBar/CategoriesBar'
import { useSearchState } from '../../states/search-context'

const SideBar = ({ setFilter }) => {
  const value = useSearchState();
  console.log({ value });
  return (
    <div className='pl-6'>
      <PriceRange />
      <div className='bg-grey-200 px-6 py-2 mb-4 text-sm'>
        <CategoriesBar setFilter={setFilter} />
      </div>
      
    </div>
  )
}

export default SideBar