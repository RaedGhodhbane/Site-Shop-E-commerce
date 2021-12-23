import { cartTypes } from "../types";
// evry action needs {type*, payload}
export const addToCart = (product) => {
  // console.log(product);
  return {
    type: cartTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeProduct = (productId) => {
  // console.log(product);
  return {
    type: cartTypes.REMOVE_TO_CART,
    payload: productId,
  };
};
