import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

const useGetRecommendedProducts = (product) => {
  const [products, setProducts] = useState([]);
  
  const key = product.product_type ? "product_tpe" : "brand";
  const value = product.product_type ? product_type : product.brand;

  const getRecommendedProducts = () => {
    axios
      .get(BASE_URL, {
        params: {
          [key]: value,
        },
      })
      .then((response) => {
        const fetchedProducts = response.data;
        fetchedProducts.length = fetchedProducts.length > 4 ? 4 : fetchedProducts.length
        setProducts(response.data)
      });
  };

  useEffect(() => {
    if (!product) return;
    getRecommendedProducts();
  }, []);

  // If I want to check the data got from the api, I could log it in the console.
  // .then((response) => console.log(response.data)
  // );

  return products;
};

export default useGetRecommendedProducts;
