import React from 'react';
import "./Group.css";


const Group = ({img}) => {
  return (
    <div className='group'>

        <img src={img} alt='Group' />

        <div className='group__right'>

            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra </p>
            
            <button className='btn'>Learn more</button>

        </div>

        <div className='date'>00/00/2000</div>

    </div>
  )
}

export default Group;
