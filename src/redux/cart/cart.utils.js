export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  //if the item is allready n cart
  if (existingCartItem) {
    //for each item, if the added item has the same id, increement quantity,
    //else return the item with no changes to the quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //if the item is not in the cart yet, add it and give it a quantity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
