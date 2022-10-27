import React from 'react';
import Group from '../group/Group';

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import IMG from "../../assets/images/img1.png";
import "./News.css";



const News = () => {


    const newsBase = [
        {
            image: IMG,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
            date: "00/00/2020"
        },
        {
            image: IMG,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
            date: "00/00/2020"
        },
        {
            image: IMG,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
            date: "00/00/2020"
        },
        {
            image: IMG,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
            date: "00/00/2020"
        },
        {
            image: IMG,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra",
            date: "00/00/2020"
        }
    ]

  return (
    <div className='news'>

        <h3>News & Learning</h3>

        {
            newsBase.map((item,index) => {
                return <div className='news__block' key={index}>

                    <div className='container'>
                        <Group img={item.image} text={item.text} date={item.date} />
                    </div>
    
                </div>
            })
        }

        <div className='news__pnav'> <AiOutlineLeft /> <p>1</p><p>2</p><p>3</p> <AiOutlineRight /> </div>

    </div>
  )
}

export default News
