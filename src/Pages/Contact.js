import React from 'react'
import "./Contact.css"
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import RectangularImg from './HeroImage.svg'
import Office from "./office.svg"
import Phone from './phone.svg'
import Envelope from "./envelope.svg"
import GoogleMap from './GoogleMap.svg'


const Contact = () => {
  return (
    <div>
      <NavBar />
        <div className='packages'>
            <div className='AboutHeroImg'><img src={RectangularImg} alt='img' /></div>
      <div className='About'>
        <h1>Contact</h1>
        <p><small>Critics And Recommendations for Us</small></p>
        </div>
      </div>
      <div className='map'><img src={GoogleMap} alt='img' /></div>
      
      <div className='messages'>
        <form action='#' className='FormSection' >
          <p>Get in Touch</p>
          <div className='textArea'><textarea rows="9" cols="70" name="comment" placeholder='Enter Message'></textarea></div>
          
          <div className='messageFlex'>
        <div className='enterName'> <input typeof='text' className='enterName' placeholder='Enter your name' /></div>
            <div className='enterEmail'><input typeof='text' className='enterEmail' placeholder='Enter your email' /></div>
            </div>
          <div className='EnterText'><input typeof='text' className='enterEmail' placeholder='Enter your subject' /></div>
          <button className='messageBtn' >SEND MESSAGE</button>
      </form>

      <div className='contact'>
        <div className='house'><img src={Office} alt='img'/> </div>
        <div className='house'><img src={Phone} alt='img'/> </div>
        <div className='house'><img src={Envelope} alt='img'/> </div>
        </div>
        </div>

      <Footer />
            <div className='copyright'> &copy; Copyright 2022 Travel Buddy</div>
    </div>
  )
}

export default Contact