import React from "react";
import ButtonLink from "../buttonLink/ButtonLink";
import SectionTitle from "../sectionTitle/SectionTitle";
import SecondaryBanner from "../secondaryBanner/SecondaryBanner";
import useGetTopProducts from "../../hooks/useGetTopProducts";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";

const TopProducts = () => {
  const { products } = useGetTopProducts();

  return (
    <div className="md:mt-20">
      <div className="container mx-auto -mb-10">
        <div className="flex items-center justify-between mb-6">
          <SectionTitle text="Top Products" />
          <ButtonLink
            path="/about"
            text="See more"
            isMain
            className="hidden md:block"
          />
        </div>
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
      <SecondaryBanner isRelative/>
    </div>
  );
};

export default TopProducts;
