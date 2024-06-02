import React, { useEffect } from "react";
import ButtonLink from "../buttonLink/ButtonLink";
import SectionTitle from "../sectionTitle/SectionTitle";
import SecondaryBanner from "../secondaryBanner/SecondaryBanner";
import useGetProducts from "../../hooks/useGetProducts";
import Products from "../products/Products";
const TopProducts = () => {
  const { products, getTopProducts } = useGetProducts();

  useEffect(() => getTopProducts(), []);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <SectionTitle text="Top Products" />
          <ButtonLink path="/about" text="See more" isMain />
        </div>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <Products
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imgUrl={product.api_featured_image}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <SecondaryBanner />
    </div>
  );
};

export default TopProducts;
