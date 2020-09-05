import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


const Product = (props) => {
  const {img, name, seller, price,  stock, key} = props.product;
  return (
    <div className='product'>
      <div>
        <img src={img} alt=""/>
      </div>
      <div className='product-title'>
        <h4><Link to={'product/'+key}>{name}</Link></h4>
        <br/>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>Price: ${price}</p>
        <p>
          <small>Only {stock} left in stock</small>
        </p>
        {props.showAddToCart && <button className='cart-btn' onClick={() => props.addProduct(props.product)}>
          <FontAwesomeIcon icon={faCartPlus}/> Add to cart
        </button>}
      </div>

    </div>
  );
}

export default Product;
