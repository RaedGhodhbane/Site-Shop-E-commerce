import { orderTypes } from "../types";

export const creatOrder = (cartItems, totalAmount) => {
  return {
    type: orderTypes.CREATE_ORDER,
    payload: {
      items: cartItems,
      amount: totalAmount,
    },
  };
};
