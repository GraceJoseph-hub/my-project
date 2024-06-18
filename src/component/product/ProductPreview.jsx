import React from 'react'
import Price from '../price/Price';
import propTypes from 'prop-types'
import CartButton from '../cartButton/CartButton';
import Image from './Image';
import Info from './Info';
import Description from './Description';
import Title from './Title';

const ProductPreview = ({ name, img, type, category, price, description }) => {
  
  return (
    <>
      <Title name={name} type={type}/>
      <div className="flex flex-col lg:flex-row items-center justify-center mb-20 pr-10">
        <Image name={name} img={img}/>
        <div>
          <Info name={name} type={type} category={category}/>
          <div className="flex justify-between my-10 ">
            <Price price={price} isLarge />
            <CartButton />
          </div>
         <Description text={description}/>
        </div>
      </div>
    </>
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
