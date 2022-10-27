import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import "./Header.css";

import Logo from "../../assets/images/logo.png";

const Header = () => {

  const [burgerMenu, setBurgerMenu] = useState(false);

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
            <li className='menu__item'><Link to="/news" >News</Link></li>
          </ul>
        </div>

        <div className='header__burger' onClick={ () => setBurgerMenu(!burgerMenu) }>
          { burgerMenu ? <AiOutlineClose /> : <AiOutlineMenu /> }
        </div>

        {
          burgerMenu ? <ul className='burger_menu'>
            <li>Our Stakeholder/Audience</li>
            <li>Arial Robotics Laboratory</li>
            <li>Research & Teaching</li>
            <li>Our Team</li>
            <li>Prospective Students</li>
          </ul> : null
        }

      </div>


    </div>
  )
}

export default Header;
