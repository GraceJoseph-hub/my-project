import React from 'react'
import Loader from '../loader/Loader';
import ProductCard from '../productCard/ProductCard';
import { useSearchState } from '../../states/search-context';

const Products = () => {
  const [{ products }] = useSearchState()
  // console.log(products)
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products.length === 0 ? (
          <Loader classes="my-4" />
        ) : (
          <>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                imgUrl={product.api_featured_image}
                price={product.price}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Products