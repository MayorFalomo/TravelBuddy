import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/Herosection'
import { Locations } from '../components/Locations'
import NavBar from '../components/Navbar'
import Services from '../components/Services'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import TopHotel from '../components/Tophotel'



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