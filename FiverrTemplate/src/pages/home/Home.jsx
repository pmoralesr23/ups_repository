import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/trustedBy'
import Slide from '../../components/Slide/Slide'

function Home() {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide></Slide>
      
    </div>
  )
}

export default Home