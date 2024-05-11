import React from 'react'
import MainBanner from '../component/banner/MainBanner'
import TopProducts from '../component/topProducts/TopProducts'
import UniqueSellingPoint from '../component/uniqueSellingPoint/UniqueSellingPoint'
import Benefits from '../component/benefits/Benefits'

const Home = () => {
  return (
    <div>
      <MainBanner />
      <TopProducts />
      <UniqueSellingPoint />
      <Benefits />
    </div>
  )
}

export default Home