import React from 'react'

const BenefitItem = ({item}) => {
  return (
    <div className="container mx-auto flex">
      <div className='mr-4'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <div>
        <h5 className="font-krona text-sm">{item.title}</h5>
        <p className='text-xs'>{item.text}</p>
      </div>
    </div>
  );
}

export default BenefitItem