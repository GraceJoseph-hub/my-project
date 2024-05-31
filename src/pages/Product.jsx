import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useGetProducts from '../hooks/useGetProducts'

const Product = () => {
  const { Product, getSingleProduct } = useGetProducts();

  useEffect(() => {
    getSingleProduct()
  }, [])
  const {id} = useParams()
  return (
    <div>Product: {Product?.name}</div>
  )
}

export default Product