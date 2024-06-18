
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

// This function is formatting some parameters from the data fetched.
const formatProduct = (data) => ({
  ...data,
  category: data.category?.replace(/_/g, " "),
  product_type: data.product_type?.replace(/_/g, " "),
  description: data.description?.replace(/<\/?[^>]+(>|$)/g, ""),
  api_featured_image: `https://${data.api_featured_image}`,
});

// useGetProduct is the name of the hook
const useGetProduct = () => {
  // useParams() is a hook from react-router-dom that gives us all the parameters that our url has.
  const { id } = useParams();

  // This is the initial value of the data fetched, so we can change the data using the setSingleProduct()
  const [singleProduct, setSingleProduct] = useState(null);

  // This is to account for delay (if the data being fetched is delayed).
  const [isLoading, setIsLoading] = useState(false);

  // This is the function that's called when the data is fetched.
  const getSingleProduct = useCallback(() => {
    setIsLoading(true);
    axios.get(`${BASE_URL}/${id}.json`).then((response) => {
      // Here, we passed the response gotten from our endpoint into the formatProduct and assigned it to a variable called data.
      const data = formatProduct(response.data);
      // The data (formatProduct was passed directly into out updating state (setSingleProduct))
      setSingleProduct(data);
    });
  }, [id]);

  useEffect(() => {
    // We now called our function inside a useEffect
    getSingleProduct();
  }, [id, getSingleProduct]);

  useEffect(() => {
    setIsLoading(false);
  }, [singleProduct]);

  return {
    isLoading,
    singleProduct,
  };
};

export default useGetProduct;
// EVERYTHING BELOW IS ONE APPROACH TO FETCHING THE DATA BUT BECAUSE OUR DATA HAS SOME CHARACTERS THAT WE DO NOT NEED,
// WE'LL HAVE TO FORMAT THE DATA BEING FETCHED, HENCE THE APPROACH ABOVE
// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

// https://makeup-api.herokuapp.com/api/v1/products/114.json
 

// const useGetProduct = () => {
//   const { id } = useParams();

//   const [singleProduct, setSingleProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(false)

//   const getSingleProduct = useCallback(() => {
//     setIsLoading(true)
//     axios
//       .get(`${BASE_URL}/${id}.json`)
//       .then((response) => setSingleProduct(response.data));
//   }, [id]);

//   useEffect(() => {
//     getSingleProduct();
//   }, [id, getSingleProduct]);

//   useEffect(() => {
//     setIsLoading(false)
//   }, [singleProduct])
//   return {
//      isLoading,
//      singleProduct,
//    };
// };

// export default useGetProduct;
