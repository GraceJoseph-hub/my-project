import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import ProductPrice from "../component/productPrice/ProductPrice";
import ProductTitle from "../component/productTitle/ProductTitle";
import Benefits from "../component/benefits/Benefits";
import RecommendedProducts from "../component/recommendedProducts/RecommendedProducts";
import ProductPreview from "../component/productPreview/ProductPreview";



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
      <ProductPreview
        name={singleProduct.name}
        img={singleProduct.api_featured_image}
        type={singleProduct.product_type}
        category={singleProduct.category}
        price={singleProduct.price}
        description={singleProduct.description}
      />

      {/* for you products */}
      {/* These are products suggested or recommended to the user  */}

      <Benefits />
      <RecommendedProducts product={singleProduct} />
    </div>
  );
};

export default Product;
