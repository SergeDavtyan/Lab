import React from 'react';

import { Link } from 'react-router-dom';

import Group from '../group/Group';
import Person from '../person/Person';

import IMG2 from "../../assets/images/img2.png";
import IMG3 from "../../assets/images/img3.png";
import IMG4 from "../../assets/images/img4.png";
// import Partners from '../partners/Partners';

import "./Home.css";

const Home = () => {


  const group = [
    {
      title: "Research & Teaching",
      image: IMG2 
    },
    {
      title: "Partners",
      image: IMG2 
    },
    {
      title: "News & Learning",
      image: IMG2 
    },
    {
      title: "Arial Robotics Laboratory",
      image: IMG2 
    }
  ]

  const person = [
    {
      title: "Our Stakeholder/Audience",
      subtitle: "Students"
    },
    {
      subtitle: "Public"
    },
    {
      subtitle: "Experts"
    },
    {
      subtitle: "Donors"
    },
    {
      title: "Prospective Students"
    },
    {
      title: "Our Team",
      subtitle: "Safe robot learning"
    }
  ]


  return (
    <div className='home'>

      {/* <Group img={IMG2} /> */}
      {/* <Person img={IMG3} name="Lorem ipsum" data="2018-2022" /> */}

      {/* <Partners /> */}

      {
        group.map( (item,intex) => {
          
          return <div className='home__block' key={intex}>

            <div className='home__title'>
              <div className='container'>
                <h3>{item.title}</h3>
              </div>
            </div>

            <div className='container'>
          
              <Group img={item.image} title={item.title} />

            </div>

          </div>
          
        })

      }


      {
        person.map((item,index) => {

          return <div className='home__block' key={index}>

              <div className='home__title'>
                {item.title ? <div className='container'>
                    <h3>{item.title}</h3>
                  </div> : null}
              </div>
      
              <div className='container home-flex'>
      
                <p>{item.subtitle ? item.subtitle : null}</p>
                
                <div>
                  <Person img={IMG3} name="Name" />
                  <Person img={IMG4} name="Name" />
                  <Person img={IMG3} name="Name" />
                </div>
      
                {
                  item.title === "Prospective Students" ? <Link to="/prosStudents" className='btn' >Learn more</Link> : <button className='btn'>Learn more</button>
                }
      
              </div>
      
            </div>
        })
      }

    </div>
  )
}

export default Home;
