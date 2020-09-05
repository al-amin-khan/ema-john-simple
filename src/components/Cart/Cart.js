import React from 'react';
import {Link} from 'react-router-dom'
import './Cart.css'

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total+prd.price, 0)
  return (
    <div>
      <h4>Order summery: {cart.length} </h4>
      <h4>Total Price: {total}</h4>

      <Link to='/review'>
        <button className='cart-btn'>Review Cart</button>
      </Link>
    </div>
  );
}

export default Cart;
