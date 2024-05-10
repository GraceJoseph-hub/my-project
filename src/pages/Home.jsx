import React from 'react'
import MainBanner from '../component/banner/MainBanner'
import TopProducts from '../component/topProducts/TopProducts'
import SecondaryBanner from '../component/secondaryBanner/SecondaryBanner'

const Home = () => {
  return (
    <div>
      <MainBanner />
      <TopProducts />
      <SecondaryBanner />
    </div>
  )
}

export default Home