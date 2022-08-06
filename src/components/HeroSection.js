import React from 'react'
import "./Herosection.css"
import Booking from './Booking'
import Ripples from "react-ripples"

const Herosection = () => {

  return (
    <div className='HeroContainer'>
      <div className='video'>
           <video id='video' autoPlay muted loop>
                 <source src='./LongBeach.mp4' type='video/mp4'/>
        </video>
        <div className='Layer'></div>
        </div>
          <div className='HeroText'>
              <h1>Travel <span>Buddy</span></h1>
              <div className='start'><small>Let's start your journey with us, Your dreams will come true</small></div>
              <Ripples className='discoverBtn'><button className='discover' >Discover Now</button></Ripples>
          </div>
          <Booking />
          <div className='galleria'>
          </div>
          
    </div>
  )
}

export default Herosection