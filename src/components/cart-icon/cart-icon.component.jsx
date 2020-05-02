import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-icon.svg";

import "./cart-icon.styles.scss";

const cartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

//crating props that can set the state
const mapDispatchToProp = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProp)(cartIcon);
