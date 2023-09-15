import React from 'react';
import "./Home.scss";
import Featured from '../../components/home-componets/featured/Featured';
import Slide from '../../components/home-componets/Slide/Slide';
import TrustedBy from '../../components/home-componets/trustedBy/TrustedBy';

function Home() {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide/>
      
    </div>
  )
}

export default Home