import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
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
          <Link to="/" ><img src={Logo} alt='Logo' /></Link>
        </div>

        <div className='header__middle'>
          <ul className='menu'>
            <li className='menu__item'><Link to="/" >Home</Link></li>
            <li className='menu__item'><Link to="/aboutus" >About Us</Link></li>
            <li className='menu__item'>News</li>
          </ul>
        </div>

        <div className='header__burger'>
          <AiOutlineMenu />
        </div>

      </div>


    </div>
  )
}

export default Header;
