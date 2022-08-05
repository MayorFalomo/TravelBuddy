import React from 'react'
import "./AboutUs.css"

import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { Locations } from '../components/Locations'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import TopHotel from '../components/TopHotel'



const Homepage = () => {
  return (
      <div>
      <NavBar />
         <HeroSection />
          <Locations />
      <Slider/>
      <TopHotel />
      <Testimonial/>
      <Services />
      <Footer />
      <div className='copyright'> &copy; Copyright 2022 Travel Buddy</div>

    </div>
  )
}

export default Homepage