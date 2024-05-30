import React from 'react'
import BenefitItem from '../benefitItem/BenefitItem';

const Benefits = () => {
  const benefits = [
    {
      title: "Delivery",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi",
    },
    {
      title: "Products",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      title: "Payments",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi, consequatur sed inventore ut",
    },
  ];
  return (
    <div className='flex mb-10'>
      {benefits.map((item) => (
        <BenefitItem key={item.title} item={item} />
      ))}
    </div>
  )
}

export default Benefits