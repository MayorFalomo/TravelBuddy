import React from 'react'
import "./Packages.css"
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Services from '../components/Services'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import TopHotel from '../components/Tophotel'
import RectangularImg from './HeroImage.svg'

const Packages = () => {
  return (
    <div className='packagesCard'>
      <NavBar />
            <div className='packages'>
            <div className='AboutHeroImg'><img src={RectangularImg} alt='img' /></div>
      <div className='About'>
        <h1>Packages</h1>
        <p><small>TravelBuddy The best service travel</small></p>
        </div>
        </div>

            <Slider />
       <TopHotel/>
      <Testimonial/>
      <Services/>
      <Footer/>
      <div className='copyright'> &copy; Copyright 2022 Travel Buddy</div>

    </div>
  )
}

export default Packages