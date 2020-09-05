import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = ({}) => (
  <div className='header'>
    <img src={logo} alt=""/>
    <nav>
      <a href="/shop">Shop</a>
      <a href="/review">Order review</a>
      <a href="/inventory">Manage inventory</a>
    </nav>
  </div>
);

export default Header;
