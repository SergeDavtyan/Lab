import React from 'react'
import Group from '../group/Group';

import IMG1 from "../../assets/images/img1.png";
import IMG2 from "../../assets/images/img2.png";

const Home = () => {
  return (
    <div className='home'>

      <Group img={IMG2} />
      <Group img={IMG1} />

    </div>
  )
}

export default Home;
