import React from "react";
import { connect } from "react-redux";
import { selecCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect"; //no need to enter the state in every selector call

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-icon.svg";

import "./cart-icon.styles.scss";

const cartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

//crating props that can set the state
const mapDispatchToProp = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});

//creating props that can get the state
const mapStateToProps = createStructuredSelector({
  itemCount: selecCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProp)(cartIcon);
