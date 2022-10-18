import React from 'react';

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./ProsStudents.css";
import IMG3 from "../../assets/images/img3.png";
import IMG4 from "../../assets/images/img4.png";
import Person from '../person/Person';

const ProsStudents = () => {

    const partners = [
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG3
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG4
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG3
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG4
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG3
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG4
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG3
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG4
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG3
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG4
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG3
        },
        {
            name: "Lorem Ipsum",
            date: "2018-2022",
            image: IMG4
        }
    ];

  return (
    <div className='prosStudents container'>
      
        <h3>PARTNERS</h3>

        <div className='prosStudents__box'>

            {partners.map((item,index) => {
                return <Person name={item.name} img={item.image} data={item.date} key={index} />
            })}

        </div>

        <div className='prosStudents__pnav'> <AiOutlineLeft /> <p>1</p><p>2</p><p>3</p> <AiOutlineRight /> </div>

    </div>
  )
}

export default ProsStudents;
