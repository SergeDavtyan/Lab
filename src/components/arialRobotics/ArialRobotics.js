import React from 'react';

import ARobotics from "../../assets/images/ArialRobotics.png";
import Group from '../group/Group';
import "./ArialRobotics.css";



const ArialRobotics = () => {


    const arialBase = {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
        date: "00/00/2020"
    }

  return (
    <div className='arialRobotics'>
        
        <h3>Arial Robotics</h3>

        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} text={arialBase.text} date={arialBase.date} />
            </div>
        </div>
        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} text={arialBase.text} date={arialBase.date} />
            </div>
        </div>
        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} text={arialBase.text} date={arialBase.date} />
            </div>
        </div>
        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} text={arialBase.text} date={arialBase.date} />
            </div>
        </div>
        <div className='arialRobotics__box'>
            <div className='container'>
                <Group img={ARobotics} text={arialBase.text} date={arialBase.date} />
            </div>
        </div>

    </div>
  )
}

export default ArialRobotics
