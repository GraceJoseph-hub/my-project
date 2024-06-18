import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import useGetProduct from "../hooks/useGetProduct";
import Loader from "../component/loader/Loader";
import Benefits from "../component/benefits/Benefits";
import RecommendedProducts from "../component/recommendedProducts/RecommendedProducts";
import ProductPreview from "../component/product/ProductPreview";

const Product = () => {
  const { singleProduct, isLoading } = useGetProduct();

  // This will enable the screen to scroll back to the top on url change (whenever a user)
  // clicks on any recommended product, it will scroll to the top.
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!singleProduct) return <Loader classes="h-screen"/>

  return (
    <div className="mt-20 container mx-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
          <ProductPreview
            name={singleProduct.name}
            img={singleProduct.api_featured_image}
            type={singleProduct.product_type}
            category={singleProduct.category}
            price={singleProduct.price}
            description={singleProduct.description}
          />
      )}
      <Benefits />
      <RecommendedProducts product={singleProduct} />
    </div>
  );
};

export default Product;
