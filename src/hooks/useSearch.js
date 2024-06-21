import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const PRODUCTS_COUNT = 8;

const useSearch = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get(`${BASE_URL}.json`).then(({ data }) => {
        setProducts(data)
      });
  };

  const setFilter = (type, value) => {
    console.log(type, value)
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
