import axios from "axios";
import { useEffect, useState } from "react";
import { PRODUCT_TAGS } from "../component/constants/tags";


const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

const PRODUCTS_COUNT = 8
const getRandomProductTag = () => {
  const randomNumber = Math.floor(Math.random() * PRODUCT_TAGS.length);

  return PRODUCT_TAGS[randomNumber]
}

const useGetTopProducts = () => {
  // we created an empty array to return the data we'll fetch using axios.
  // once javascript gets to this line of code, it will be empty (its initialized value).
  const [products, setProducts] = useState([]);

  const getTopProducts = () => {
    // we fetched the data and we now used setProducts(data) to change or update or manipulate
    // the data we fetched.
    // we can actually get/fetch data based on product tags, brands, or based on any parameter(param).
    // So here, we are using params because we do not want all the products. The only products
    // we want to grab from the api is products with tags (We are grabbing to display only
    // products based on the product tags).
    // in order to do this, axios helps us add the param after the base url.
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          product_tags: getRandomProductTag(),
        },
      })
      .then((response) => {
        const {data} = response
        data.length = data.length > PRODUCTS_COUNT ? PRODUCTS_COUNT : data.length;
        setProducts(data)
      })
  };

  // At this point, we do not have anything to call our getData(), so we'll use the
  // useEffect so that onPageLoad, the function will be called.
  useEffect(() => {
    getTopProducts();
  }, []);

  return {
    products,
  };
};

export default useGetTopProducts;
