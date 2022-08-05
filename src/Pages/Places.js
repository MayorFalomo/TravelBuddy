import React from 'react'
import "./Places.css"
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import RectangularImg from './HeroImage.svg'

import PictureOne from "./image1.svg"
import PictureTwo from "./image2.svg"
import PictureThree from "./image3.svg"
import pictureFour from "./image4.svg"
import pictureFive from "./image5.svg"
import pictureSix from "./image6.svg"
import pictureSeven from "./image7.svg"

const Places = () => {
  return (
    <div className='PlacesContainer' >
            <NavBar/>
            <div className='packages'>
            <div className='AboutHeroImg'><img src={RectangularImg} alt='img' /></div>
      <div className='About'>
        <h1>Places</h1>
        <p>The best places for you</p>
        </div>
      </div>
      
      <div className='placesCard'>
      <span className='span' >Places</span>
        <p><small>The best place to stay in Indonesia</small></p>
        </div>

        <div className='IndonesiaImages'>
          <div className='image1'><img src={PictureOne} alt='img' />  </div>
          <div className='image1'><img src={PictureTwo} alt='img' />  </div>
          <div className='image1'><img src={PictureThree} alt='img' />  </div>
          <div className='image1'><img src={pictureFour} alt='img' />  </div>
          <div className='image1'><img src={pictureFive} alt='img' />  </div>
          <div className='image1'><img src={pictureSix} alt='img' />  </div>
          <div className='image1'><img src={pictureSeven} alt='img' />  </div>
        </div>
        

      <Footer/>
      <div className='copyright'> &copy; Copyright 2022 Travel Buddy</div>

    </div>
  )
}

export default Places