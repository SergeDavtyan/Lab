import React from 'react';
import "./Header.css";

import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className='header'>

      <div className='header__phone'>
        <div className='container'>+374-93-50-44-30</div>
      </div>

      <div className='container'>

        <div className='logo'>
          <img src={Logo} alt='Logo' />
        </div>

        <div className='header__middle'>
          <ul className='menu'>
            <li className='menu__item'>Home</li>
            <li className='menu__item'>About Us</li>
            <li className='menu__item'>News</li>
            <li className='menu__item'>Research</li>
          </ul>
        </div>

      </div>


    </div>
  )
}

export default Header;
