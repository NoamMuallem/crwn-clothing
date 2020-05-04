//basic component
import React from "react";
import "./checkout-item.styles.scss";
//redux
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

//take the intaire item so we can change the quantity
const CheckoutItem = ({ cartItem, clearItem, removeOne, addOne }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeOne(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addOne(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeOne: (item) => dispatch(removeItem(item)),
  addOne: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
