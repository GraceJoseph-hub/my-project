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
    <div className="container mx-auto flex flex-col md:flex-row mb-20 space-y-8 md:space-y-0 md:space-x-8 sm:w-3/4 md:w-full">
      {benefits.map((item) => (
        <BenefitItem key={item.title} item={item} />
      ))}
    </div>
  );
}

export default Benefits