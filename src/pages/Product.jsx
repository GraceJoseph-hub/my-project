import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import ProductPrice from "../component/productPrice/ProductPrice";
import ProductTitle from "../component/productTitle/ProductTitle";
import Benefits from "../component/benefits/Benefits";
import RecommendedProducts from "../component/recommendedProducts/RecommendedProducts";



const Product = () => {
  const { singleProduct } = useGetProduct();
  
  // This will enable the screen to scroll back to the top on url change (whenever a user)
  // clicks on any recommended product, it will scroll to the top.
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  if (!singleProduct) return <p>loading...</p>;

  return (
    <div className="mt-20 container mx-auto">
      <ProductTitle name={singleProduct.name} type={singleProduct.type} />
      <div className="flex mb-10 pr-10">
        <div className="flex items-center justify-center w-screen p-10">
          <img
            src={`https://${singleProduct.api_featured_image}`}
            alt={singleProduct.name}
          />
        </div>
        <div>
          <p className="text-yellow text-sm font-krona">
            {singleProduct.product_type}
          </p>
          <h1 className="font-krona text-base">{singleProduct.name}</h1>
          <p>{singleProduct.category}</p>
          <div className="flex justify-between my-10 ">
            <ProductPrice price={singleProduct.price} isLarge />
            <button className="inline-block rounded-full font-bold font-krona text-xs bg-yellow px-4 py-2">
              add to basket
            </button>
          </div>
          <p>
            {singleProduct.description.replace(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
          </p>
        </div>
      </div>

      {/* for you products */}
      {/* These are products suggested or recommended to the user  */}

      <Benefits />
      <RecommendedProducts product={singleProduct} />
    </div>
  );
};

export default Product;
