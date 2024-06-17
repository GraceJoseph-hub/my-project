import React from 'react'
import ProductPrice from '../productPrice/ProductPrice';
import propTypes from 'prop-types'
import CartButton from '../cartButton/CartButton';
import Image from '../image/Image';
import Info from '../info/Info';
import Description from '../description/Description';

const ProductPreview = ({ name, img, type, category, price, description }) => {
  
  return (
    <div>
      <div className="flex flex-col md:flex-row mb-20 pr-10">
        <Image name={name} img={img}/>
        <div>
          <Info name={name} type={type} category={category}/>
          <div className="flex justify-between my-10 ">
            <ProductPrice price={price} isLarge />
            <CartButton />
          </div>
         <Description text={description}/>
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
