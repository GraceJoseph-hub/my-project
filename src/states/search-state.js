// the essence of using states (contestApi) is to preseve our data. For instance, when a user selects an item, it will take the user
// to that particular item or product page. Now if the user decides to return to the page he/she is coming from (the search page),
// the user will still be able to see the previous list of products he/she selected from.
export const initialSearchState = {
  // So products here will be our initial products from the api
  products: [],
  // this will be the products left after the user has filtered
  filteredProducts: [],
  // this will be the filters selected by the user
  filters: {
    brand: null,
    sort: null,
    productType: null,
    minPrice: null,
    maxPrice: null
  }
}