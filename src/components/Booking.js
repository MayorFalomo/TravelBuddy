import React, { useState } from 'react'
import "./Booking.css"
import Hotel from './Hotel'
import Place from './Place'
import Ticket from './Ticket'


const Booking = () => {


    const [current, setCurrent] = useState(0)

    const [active, setActive] = useState(0)


    const handleClick = (param) => {
        setCurrent(param)
        setActive(!active)
    }
// 
  return (
      <div className='bookingContainer'>
      
          <ul>
              <li><button id='currentBtn' className={current === 0 ? "link active" : "link"} onClick={() => handleClick(0) } >Hotel</button></li>
              <li><button id='currentBtn' className={current === 1 ? "link active" : "link"} onClick ={() => handleClick(1)} >Ticket</button></li>
              <li><button id='currentBtn' className={current === 2 ? "link active" : "link"} onClick={() => handleClick(2)} >Place</button></li>
          </ul>

          {current === 0 && <Hotel />}
          {current === 1 && <Ticket />}
          {current === 2 && <Place />}

    </div>
  )
}

export default Booking