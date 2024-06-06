import React from 'react'
import useGetRecommendedProducts from '../../hooks/useGetRecommendedProducts'

const RecommendedProducts = () => {
  const { product } = useGetRecommendedProducts(product)
  
  if(product.length === 0) return null
  return (
    <div>{product.map((item) => (
      <p>{item.name}</p>
    ))}</div>
  )
}

export default RecommendedProducts