import React from "react";
import "./CartContainer.css";

const CartContainer = (props) => {
  console.log(props.shoppingCart);
  const { shoppingCart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const product of shoppingCart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 10 : 0;

  const totalBeforeTax = total + shipping;
  const tax = (total + shipping) * 0.5;
  const grandTotal = total + tax + shipping;
  return (
    <div>
      <h4> Order Summary </h4>
      <h5>Item order : {totalQuantity}</h5>
      <br />
      <p> Total : {total.toFixed(2)} </p>
      <p> Total before tax: {totalBeforeTax} </p>
      <p> Estimated Tax: {tax} </p>
      <p>gt:{grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default CartContainer;
