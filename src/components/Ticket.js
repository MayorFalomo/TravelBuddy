import React from 'react'
import "./Ticket.css"

const Ticket = () => {
  return (
      <div className='Ticket'>
          <h2>Book your ticket now!</h2>

          <p>Book for One <input type="checkbox"/> </p>
          <p>Book as a Couple <input type='checkbox'/></p>
          <p>Book as a Family <input type='checkbox'/> </p>
          <p>Book as an Executive <input type="checkbox"/></p>
          <button className='' >Submit</button> 
    </div>
  )
}

export default Ticket