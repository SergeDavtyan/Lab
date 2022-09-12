import React from 'react';
import Group from '../group/Group';
import Person from '../person/Person';

import IMG2 from "../../assets/images/img2.png";
import IMG3 from "../../assets/images/img3.png";

const Home = () => {
  return (
    <div className='home'>

      <Group img={IMG2} />
      <Person img={IMG3} name="Lorem ipsum" data="2018-2022" />

    </div>
  )
}

export default Home;
