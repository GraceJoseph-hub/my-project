import { SET_FILTER, SET_PRODUCTS } from "./actionTypes";


export const searchReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_FILTER:
      return { ...state, filters: {...state.filters, [payload.type]: payload.value} };
    default:
      return state
  }
}