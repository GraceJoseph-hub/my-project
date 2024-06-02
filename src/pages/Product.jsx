import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

const Product = () => {
  const { id } = useParams();
  const { singleProduct, getSingleProduct } = useGetProducts();

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  if (!singleProduct) return <p>loading...</p>;
  return (
    <div className="mt-20">
      {/* {singleProduct ? <p>Product: {singleProduct?.name}</p> : <p>Loading</p>} */}

      {/* title */}
      <div className="mb-10 container mx-auto">
        <h5 className="font-krona text-sm">{singleProduct.name}</h5>
        <p className="text-dark-grey text-sm">{singleProduct.product_type}</p>
      </div>
      {/* image */}
      <div className="flex">
        <div className="flex items-center justify-center">
          <img
            src={`https://${singleProduct.api_featured_image}`}
            alt={singleProduct.name}
          />
        </div>
        <div className="flex-1">
          <p className="text-yellow text-sm font-krona">
            {singleProduct.product_type}
          </p>
          <h1 className="font-krona text-base">{singleProduct.name}</h1>
          {/* category */}
          <p>{singleProduct.category}</p>

          {/* price */}
          <div className="flex justify-between my-10 ">
            <div className="relative">
              <div className="absolute bg-light-grey h-10 rounded-full top-0 w-10 -z-1"></div>
              <p className="font-krona text-xl pt-2 ml-4">
                {singleProduct.price} &#8364;
              </p>
            </div>
            {/* <div>counter</div> */}
            <button
              className="inline-block rounded-full font-bold font-krona text-xs bg-yellow px-4 py-2"
            >
              add to basket
            </button>
          </div>
          {/* description */}
          <p>
            {singleProduct.description.replace(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
