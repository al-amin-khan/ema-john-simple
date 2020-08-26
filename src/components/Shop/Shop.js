import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import {useState} from 'react'


const Shop = ({}) => {
  const fakeFirst10Data = fakeData.slice(0, 10);
  const[products, setProducts] = useState(fakeFirst10Data);
  console.log(useState(fakeFirst10Data));
  return(
    <div className='shop-container'>
      <div className='product-container'>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
      </div>
      <div className= 'cart-container'>
        <h3>This is cart</h3>
      </div>
    </div>

  )
};

export default Shop;
