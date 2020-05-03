import { createSelector } from "reselect";

//input selector
//to large to use in our actual components, gonne rerender all connected components
const selectCart = (state) => state.cart;

//gets a seelector and iterates over the selectors and return the wonted property
//by doing it like this we memorize the values and not rerender when its not needed
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selecCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    )
);
