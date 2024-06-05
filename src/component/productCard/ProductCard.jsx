import React from "react";
import { Link } from "react-router-dom";
import ProductPrice from "../productPrice/ProductPrice";
import "./ProductCard.css";

const ProductCard = ({ id, name, brand, imgUrl, price }) => {
  return (
    <Link
      key={id}
      to={`/product/${id}`}
      className="flex flex-col rounded-md mr-6 mb-6 px-4 py-6  transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out"
    >
      <img
        width="120"
        src={`https://${imgUrl}`}
        alt={name}
        className="mx-auto mb-6"
      />
      <p>ID: {id}</p>
      <p className="text-yellow font-krona text-sm lowercase"> {name}</p>
      <p className="mb-4">{brand}</p>
      <ProductPrice price={price} />
    </Link>
  );
};

export default ProductCard;
