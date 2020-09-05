import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import {useState} from 'react'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import {addToDatabaseCart} from '../../utilities/databaseManager'


const Shop = () => {
  const fakeFirst10Data = fakeData.slice(0, 10);
  const[products, setProducts] = useState(fakeFirst10Data);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);

    const sameProduct = newCart.filter( pd => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  };
  return(
    <div className='shop-container'>
      <div className='product-container'>
        <ul>
          {
            products.map(product =>
              <Product
                key={product.key}
                showAddToCart={true}
                product={product}
                addProduct = {handleAddProduct}></Product>)
          }
        </ul>
      </div>
      <div className= 'cart-container'>
        <h3>This is cart: {cart.length}</h3>
        <Cart cart={cart}></Cart>
      </div>
    </div>

  )
};

export default Shop;
