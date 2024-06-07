import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

// https://makeup-api.herokuapp.com/api/v1/products/114.json

const useGetProduct = () => {
  // useParams() is a hook from react-router-dom that gives us all the parameters that our url has.
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = useCallback(() => {
    axios
      .get(`${BASE_URL}/${id}.json`)
      .then((response) => setSingleProduct(response.data));
  }, [id]);

  useEffect(() => {
    // Here, we're saying that if there's no singleProduct, it should return getSingleProduct()
    getSingleProduct();
  }, [id, getSingleProduct]);

   return {
     singleProduct,
   };

  // So in the below, we got the base url and added the id (114) to fetch the particular
  // product that we want.

  // (`${BASE_URL}/114.json` is the url of that product.

  // const getSingleProduct = (id) => {
  //   axios
  //     .get(`${BASE_URL}/${id}.json`)
  //     .then(response => {
  //       setSingleProduct(response.data);
  //       getRecommendedProducts(response.data);
  //     })
  // };
};

export default useGetProduct;
