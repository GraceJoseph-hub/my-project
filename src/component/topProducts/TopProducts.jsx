import React from 'react'
import ButtonLink from '../buttonLink/ButtonLink'
import SectionTitle from '../sectionTitle/SectionTitle'
const TopProducts = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        <SectionTitle text='Top Products'/>
        <ButtonLink path='/about' text='See more' isMain/>
      </div>
      <div className='h-80'></div>
    </div>
  )
}

export default TopProducts