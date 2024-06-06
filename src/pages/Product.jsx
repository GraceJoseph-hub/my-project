import React from "react";
import useGetProduct from "../hooks/useGetProduct";
import ProductPrice from "../component/productPrice/ProductPrice";
import ProductTitle from "../component/productTitle/ProductTitle";
import RecommendedProducts from "../component/recommendedProducts/RecommendedProducts";

const Product = () => {
  const { singleProduct } = useGetProduct();
  if (!singleProduct) return <p>loading...</p>;

  // console.log(singleProduct)

  return (
    <div className="mt-20 container mx-auto">
      <ProductTitle name={singleProduct.name} type={singleProduct.type}/>
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

          {/* price */}
          <div className="flex justify-between my-10 ">
            <ProductPrice price={singleProduct.price} isLarge />
            {/* <div>counter</div> */}
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
      <RecommendedProducts product={singleProduct} />
      {/* <div className="flex flex-wrap justify-center">
        {singleProduct.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            imgUrl={product.api_featured_image}
            price={product.price}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Product;
