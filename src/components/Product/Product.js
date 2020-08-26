import React from 'react';
import './Product.css'

const Product = (props) => {
  const {img, name, seller, price,  stock} = props.product
  return (
    <div className='product'>
      <div>
        <img src={img} alt=""/>
      </div>
      <div className='product-title'>
        <h4>{name}</h4>
        <br/>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>Price: {price}</p>
        <p>
          <small>Only {stock} left in stock</small>
        </p>
      </div>

    </div>
  );
}

export default Product;
