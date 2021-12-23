import { PRODUCTS } from "../../data/dunny-data";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  return state;
};
