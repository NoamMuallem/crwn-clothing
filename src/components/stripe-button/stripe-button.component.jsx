import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //price needs to be in cents for stripe
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GzyIrDD45bcD8VxoEsd1v7yOVKdGO7h4SY5XmnS1eE0fqcEMf8Jd5fgPFeFUiT8HMpuHNJLqDlMs3jJH5bvfHJt00Y6f3svmJ";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      lable="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel={"Pay Now"}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
