import React from 'react'
import ProductPrice from '../productPrice/ProductPrice';
import propTypes from 'prop-types'
import CartButton from '../cartButton/CartButton';

const ProductPreview = ({ name, img, type, category, price, description }) => {
  const imgUrl = `https://${img}`
  const formatType = type.replace(/_/g, '')
  const formatDescription = description.replace(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return (
    <div>
      <div className="flex flex-col md:flex-row mb-20 pr-10">
        <div className="flex items-center justify-center p-10">
          <img src={imgUrl} alt={name} />
        </div>
        <div>
          <p className="text-yellow text-sm font-krona">{formatType}</p>
          <h1 className="font-krona text-base">{name}</h1>
          <p>{category}</p>
          <div className="flex justify-between my-10 ">
            <ProductPrice price={price} isLarge />
            <CartButton />
          </div>
          <p>{formatDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview

ProductPreview.propTypes = {
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
}

// ProductPreview.defaultProps = {
//   name: "blaaaaa"
// }