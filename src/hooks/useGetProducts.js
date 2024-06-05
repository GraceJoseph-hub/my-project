import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

// https://makeup-api.herokuapp.com/api/v1/products/114.json

const useGetProducts = () => {
  // we created an empty array to return the data we'll fetch using axios.
  // once javascript gets to this line of code, it will be empty (its initialized value).
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  const getTopProducts = () => {
    // we fetched the data and we now use setProducts(data) to change or update or manipulate
    // the data we fetched.
    // we can actually get data based on product tags, brands, or based on any parameter(param).
    // So here, we are using params because we do not want all the products. The only products
// we want to grab from the api is products with tags (We are grabbing to display only
    // products based on the product tags).
    // in order to do this, axios helps us add the param after the base url.
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          product_tags: "ecocert",
        },
      })
      .then((response) => setProducts(response.data));
  };

  // At this point, we do not have anything to call our getData(), so we'll use the
  // useEffect so that onPageLoad, the function will be called.

  // So in the below, we got the base url and added the id (114) to fetch the particular
  // product that we want.
  // We are also not using the params because it's a single product that we need, so
  // (`${BASE_URL}/114.json` is the url of that product.
  const getSingleProduct = (id) => {
    axios
      .get(`${BASE_URL}/${id}.json`)
      .then(response => {
        setSingleProduct(response.data);
        getRecommendedProducts(response.data);
      })
  };

  const getRecommendedProducts = (product) => {
    let key;
    let value;

    if (product.product_type) {
      key = 'product_tpe';
      value= product.product_type
    } else {
      key = 'brand';
      value= product.brand
    }

    axios
      .get(`${BASE_URL}.json`, {
        params: {
          [key]: value,
        },
      })
      .then((response) => setProducts(response.data));
  }

  return {
    products,
    getTopProducts,

    singleProduct,
    getSingleProduct,
  };
};

export default useGetProducts;
