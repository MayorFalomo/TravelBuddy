import React from 'react'
import "./Services.css"

import serviceImageOne from "./Aeroplane.svg"
import serviceImageTwo from "./womanInHat.svg"
import serviceImageThree from "./hotelRoom.svg"
    
    
const Services = () => {
    const services = [{
        id: 1,
        image: serviceImageOne,
        service: "Transportation",
        comment: "All transportation cost we bear",
    }, {
        id: 2,
        image: serviceImageTwo,
        service: "Guidance",
        comment: "We offer the best guidance for you",
        },
        {
            id: 3,
            image: serviceImageThree,
            service: "Accommodation",
            comment: "Luxurious and Comfortable"
    },]

  return (
      <div className='serviceCard' >
          <h2 className='offer' >We Offer The Best Services</h2>
          <p className='best' >The Best Service</p>
          <div className='flexCards'>
          {services.map((service) => (
              <div key={service.id} className="flexService" >
                  <div className='serviceImagery'><img src={service.image} alt="img" /></div>
                  <h3>{service.service}</h3>
                  <p>{ service.comment}</p>
              </div>
          ))}
              </div>
    </div>
  )
}

export default Services