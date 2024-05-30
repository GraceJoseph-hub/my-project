import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

const useGetProducts = () => {
  // we created an empty array to return the data we'll fetch using axios.
  // once javascript gets to this line of code, it will be empty (its initialized value).
  const [products, setProducts] = useState([]);

  const getTopProducts = () => {
    // we fetched the data and we now use setProducts(data) to change or update or manipulate
    // the data we fetched.
    // we can actuall get data based on product tags, brands, or based on any parameter(param)
    // in order to do this, axios helps us add the param after the base url.
    axios.get(BASE_URL, {
      params: {
        product_tags: "ecocert"
      }
    }).then(response => setProducts(response.data));
  };

  // At this point, we do not have anything to call our getData(), so we'll use the
  // useEffect so that onPageLoad, the function will be called.
  
  // useEffect(() => {
  //   getTopProducts();
  // }, [])

  return {
    products,
    getTopProducts,
  }
};

export default useGetProducts;
