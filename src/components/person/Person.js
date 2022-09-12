import React from 'react';
import "./Person.css";

const Person = ({img, name, data}) => {
  return (
    <div className='person'>
      
        <div className='person__block'>
            <img src={img} alt="Person" />
            {data ? <div>{data}</div>: null}
        </div>
        <p>{name}</p>

    </div>
  )
}

export default Person;
