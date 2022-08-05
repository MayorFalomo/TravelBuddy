import React from 'react'
import "./Footer.css"

import bigLogo from './Big logo.svg'
import insta from './Instagram.svg'
import Facebook from './Facebook.svg'
import twitter from './Twitter Squared.svg'
const Footer = () => {
  return (
      <div className='FooterCard'>
          <div className='buddyLogo'><img src={bigLogo} alt='img' /></div>
          <div className='destination'>
              <h4>DISCOVER DESTINATION</h4>
              <ul>
                  <li>Bali </li>
                  <li>Tuvalu </li>
                  <li>Turkmenistan</li>
                  <li>Tonga </li>
                  <li>Phillipines </li>
                  <li>Somali</li>
              </ul>
          </div>
          <div className='TravelBuddy'>
              <h4>CONTACT US </h4>
              <div className='address'>
              <p>24 Shipley St.Arvada, CO 80003 </p>
              <p>090378493810</p>
                  <small>TravelBuddy@gamil.com</small>
                  </div>
              <div className='socials'>
                  <span>Social Media</span>
                  <ul>
                  <li><img src={insta} alt='img' /></li>
                  <li><img src={Facebook} alt='img' /></li>
                      <li><img src={twitter} alt='img' /></li>
                      </ul>
              </div>
              </div>
    </div>
  )
}

export default Footer