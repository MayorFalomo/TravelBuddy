import React from 'react'
import "./TopHotel.css"

import imageryOne from "./imageOne.svg"
import imageryTwo from "./imageTwo.svg"
import imageryThree from "./imageThree.svg"
import twinkle from "./Star-rating.svg"


const TopHotel = () => {

    const TopHotel = [
        {
            id: 0,
        imagery: imageryOne,
        HotelName: "Hotel Grand Indonesia",
        rates: twinkle,
        about: "Jakarta, Indonesia",
        charge: "From $20,000"
        },
        {
            id: 1,
        imagery: imageryTwo,
        HotelName: "Hotel Grand Indonesia",
        rates: twinkle,
        about: "Jakarta, Indonesia",
        charge: "From $10,000"
        },
        {
            id: 2,
        imagery: imageryThree,
        HotelName: "Hotel Grand Indonesia",
        rates: twinkle,
        about: "Jakarta, Indonesia",
        charge: "From $30,000"
        },
    ]
  return (
      <div className='TopCard'>
          <h2>Top Hotel & Restaurants</h2>
          <p className='Topic'>The Best Hotel & Restaurants in Indonesia</p>
          <div className='flexHotel'>
          {TopHotel.map((Restaurant) => (
              <div key={Restaurant.id} className="Hotel-Card">
                  <img className='sectionImg' src={ Restaurant.imagery} alt='img' />
                  <h4 className='Hotels'>{ Restaurant.HotelName}</h4>
                  <div className='setDisplay'>
                  <img className='rate' src={Restaurant.rates} alt="img" />
                  <p> (200 Review)</p>
                  </div>
                  <div className='about'>{ Restaurant.about}</div>
                  <div className='charges'>{ Restaurant.charge}</div>
              </div>
          ))}
              </div>
    </div>
  )
}

export default TopHotel