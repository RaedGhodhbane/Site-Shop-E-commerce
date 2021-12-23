import { combineReducers } from "redux";
import productsReducer from "./products";
import cartReducer from "./cart";
import orderReducers from "./order";
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducers,
});

export default rootReducer;
