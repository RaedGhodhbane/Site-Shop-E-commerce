import CartItem from "../../models/cart-item";
import { cartTypes, orderTypes } from "../types";

const initialState = {
  // items: [],
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartTypes.ADD_TO_CART:
      const addedProduct = payload;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const prodImage = addedProduct.imageUrl;
      // CartItem
      let updateOrNewcartItem;
      if (state.items[addedProduct.id]) {
        // already exist this product
        updateOrNewcartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          prodImage,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        // console.log(addedProduct);

        updateOrNewcartItem = new CartItem(
          1,
          prodPrice,
          prodTitle,
          prodImage,
          prodPrice
        );
      }
      // updateOrNewcartItem:{quantity,price,title,image,sum}
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updateOrNewcartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
    case cartTypes.REMOVE_TO_CART:
      const currenrQty = state.items[payload].quantity;
      const selectedCratItems = state.items[payload];
      let updateCartItems;
      if (currenrQty > 1) {
        const updateCartItem = new CartItem(
          selectedCratItems.quantity - 1,
          selectedCratItems.productPrice,
          selectedCratItems.productTitle,
          selectedCratItems.productImage,
          selectedCratItems.sum - selectedCratItems.productPrice
        );
        updateCartItems = { ...state.items, [payload]: updateCartItem };
      } else {
        updateCartItems = {
          ...state.items,
        };
        delete updateCartItems[payload];
      }
      return {
        ...state,
        items: updateCartItems,
        totalAmount: state.totalAmount - selectedCratItems.productPrice,
      };
    case orderTypes.CREATE_ORDER:
      return initialState;
    default:
      return state;
  }
};
