import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total+prd.price, 0)
  return (
    <div>
      <h4>Order summery: {cart.length} </h4>
      <h4>Total Price: {total}</h4>
    </div>
  );
}

export default Cart;
