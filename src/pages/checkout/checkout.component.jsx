//basic import
import React from "react";
import "./checkout.styles.scss";
//other components
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className={"test-warning"}>
      *please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - exp: 01/22 - cvv: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProp = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProp)(CheckoutPage);
