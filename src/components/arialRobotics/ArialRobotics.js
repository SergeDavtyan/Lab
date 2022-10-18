import React from 'react';

import ARobotics from "../../assets/images/ArialRobotics.png";
import Group from '../group/Group';
import "./ArialRobotics.css";

const ArialRobotics = () => {
  return (
    <div className='arialRobotics'>
        
        <h3>Arial Robotics</h3>

        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} />
            </div>
        </div>
        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} />
            </div>
        </div>
        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} />
            </div>
        </div>
        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} />
            </div>
        </div>
        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} />
            </div>
        </div>

    </div>
  )
}

export default ArialRobotics
