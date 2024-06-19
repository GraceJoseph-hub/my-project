import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

const PRODUCT_COUNT = 4

const useGetRecommendedProducts = (product) => {
  const [products, setProducts] = useState([]);

  const getRecommendedProducts = useCallback(() => {
    const key = product.product_type ? "product_tpe" : "brand";
    const value = product.product_type ? product.product_type : product.brand;
    axios
      .get(BASE_URL, {
        params: {
          [key]: value,
        },
      })
      .then((response) => {
        const {data} = response;
        data.length =
          data.length > PRODUCT_COUNT ? PRODUCT_COUNT : data.length;
        setProducts(data);
      });
  }, [product]);

  useEffect(() => {
    if (!product) return;
    getRecommendedProducts();
  }, [product, getRecommendedProducts]);

  // If I want to check the data got from the api, I could log it in the console.
  // .then((response) => console.log(response.data)
  // );

  return products;
};

export default useGetRecommendedProducts;
