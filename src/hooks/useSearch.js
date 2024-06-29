import axios from "axios";
import { useEffect } from "react";
import { useSearchState } from "../states/search-context";
import { setFilterState, setProducts } from "../states/actionCreators";

const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

// const PRODUCTS_COUNT = 8;

const useSearch = () => {
  const [state, dispatch] = useSearchState()
  
  const getProducts = (params) => {
    // This will clear the products and set it back to default once a new call is made.
   dispatch(setProducts([]));

    const params = {
      product_type: state.filters.productType,
      brand: state.filters.brand,
    };

    axios
      .get(`${BASE_URL}.json`, {
        params,
      })
      .then(({ data }) => {
        dispatch(setProducts(data));
      });
  };

  const setFilter = (type, value) => {
    setFilterState({type, value})
    getProducts(params)
  }
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts(state.filters);
  }, [state.filters]);

  return {
    setFilter,
  };
};

export default useSearch;
