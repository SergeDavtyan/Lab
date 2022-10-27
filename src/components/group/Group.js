import React from 'react';
import { Link } from 'react-router-dom';
import "./Group.css";


const Group = ({img,link,text,date}) => {
  
  return (
    <div className='group'>

        <div className='group__img'>
          <img src={img} alt='Group' />
        </div>

        <div className='group__right'>

          <p> {text} </p>
          
          {
            link ? <Link to={"/" + link} className='btn' >Learn more</Link> : <button className='btn'>Learn more</button>
          }

        </div>

        <div className='date'>{date}</div>

    </div>
  )
}

export default Group;
