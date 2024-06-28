export const searchReducer = (state, action) => {
  switch (action.type) {
    case "setProducts":
      return { ...state, product: action.payload };
    default:
      return state
  }
}