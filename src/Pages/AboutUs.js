import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Services from '../components/Services'
import Slider from '../components/Slider'
import Testimonial from '../components/Testimonial'
import TopHotel from '../components/Tophotel'
import RectangularImg from './HeroImage.svg'
import BigLogo from './GroupLogo.svg'

const Aboutus = () => {
  return (
    <div className='AboutUs'>
      <NavBar />
      <div className='AboutCard'>
      <div className='AboutHeroImg'><img src={RectangularImg} alt='img' /></div>
      <div className='About'>
        <h1>About Us</h1>
        <p><small>TravelBuddy The best service travel</small></p>
        </div>
        </div>
      
      <div className='aboutFlex'>
        <div className='buddyLogo'><img src={BigLogo} alt='img' /></div>
        <div className='AboutText'>
          <span>Who We Are</span>
          <h2>We Love to discover Indonesia </h2>
          <p>Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.</p>
          <p className='spaceLorem' >Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.</p>
        </div>
        </div>
      <Slider />
       <TopHotel />
      <Testimonial/>
      <Services/>
      <Footer/>
      <div className='copyright'> &copy; Copyright 2022 Travel Buddy</div>

    </div>
  )
}

export default Aboutus