import React from 'react'
import ButtonLink from '../buttonLink/ButtonLink'
import SectionTitle from '../sectionTitle/SectionTitle'
import SecondaryBanner from '../secondaryBanner/SecondaryBanner'
const TopProducts = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <SectionTitle text="Top Products" />
          <ButtonLink path="/about" text="See more" isMain />
        </div>
        <div className="h-80"></div>
      </div>
      <SecondaryBanner />
    </div>
  );
}

export default TopProducts