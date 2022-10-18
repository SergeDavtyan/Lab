import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineYoutube, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiFacebook, FiTwitter } from "react-icons/fi";

import Logo from "../../assets/images/logo.png";

import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>

        <div className='footer__box'>

            <ul>
                <li>Our Stakeholder/Audience </li>
                <li>Arial Robotics Laboratory</li>
                <li>Research & Teaching</li>
                <li>News & Learning</li>
                <li>Our Team</li>
                <li>Prospective Students</li>
            </ul>

            <ul>
                <li>Donate</li>
                <li><Link to="/partners">Partners</Link> </li>
            </ul>

            <ul>
                <li>Contacts</li>
                <li><BsTelephone /> +374-00-00-00-00</li>
                <li><AiOutlineLinkedin /> Lorn epsum</li>
                <li>
                    <ul>
                        <li><FiFacebook /></li>
                        <li><FiTwitter /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineYoutube /></li>
                    </ul>
                </li>
            </ul>

        </div>

        <div className='footer__logo'>
          <Link to="/" ><img src={Logo} alt='Logo' /></Link>
        </div>

        <p><AiOutlineCopyrightCircle/> 2022 CSIE.COM ALL RIGHTS RESERVED</p>

      </div>
    </div>
  )
}

export default Footer;
