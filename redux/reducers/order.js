import { orderTypes } from "../types";
import Order from "../../models/order";
const initialState = {
  orders: [],
};

const orderReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case orderTypes.CREATE_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        payload.items,
        payload.amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };

    default:
      return state;
  }
};
export default orderReducers;
