import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

// const PRODUCTS_COUNT = 8;

const useSearch = () => {
  const [products, setProducts] = useState([]);

  const getProducts = (params) => {
    // This will clear the products and set it back to default once a new call is made.
   setProducts([])
    axios
      .get(`${BASE_URL}.json`, {
        params,
      }).then(({ data }) => {
        setProducts(data)
      });
  };

  const setFilter = (type, value) => {
     const params = {
       [type]: value,
    };
    console.log(params)
    getProducts(params)
  }
  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    setFilter,
  };
};

export default useSearch;
