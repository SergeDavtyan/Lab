import React from 'react';

import "./Partners.css";
import IMG5 from "../../assets/images/img5.png"

const Partners = () => {
  return (
    <div className='partners'>
        <div className='container'>

        <h3 className='partners__title'>PARTNERS</h3>

        <div className='partners-group'>

            <div className='partners-group__left'>

                <h3 className='partners-group__title'>National Polytechnic University of Armenia</h3>

                <div className='partners-group__img'>
                    <img src={IMG5} alt='Partners' />
                </div>

            </div>

            <div className='partners-group__right'>
                <p className='partners-group__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                </p>
            </div>

        </div>

        <div className='partners-input'>

            <h3 className='partners-input__title'>How to become a partner</h3>

            <form>
                <div className='input'>

                    <input type="text" placeholder='Text' />
                    <textarea />

                </div>
                <div className='button'>
                    <button className='btn' onClick={e => e.preventDefault()}>Button state</button>
                </div>
            </form>

        </div>

        </div>
    </div>
  )
}

export default Partners;
