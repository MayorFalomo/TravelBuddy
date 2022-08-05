import React from 'react'
import { GoTriangleDown } from "react-icons/go"
import { IoMdCalendar } from "react-icons/io"
import "./Hotels.css"


const Hotel = () => {

     
  return (
      <div>
                    <div className='hotelSection'>
              <div className='dropDown'>
                  <div className='contentBtn' >Choose Place<GoTriangleDown/> </div>

              <div className='dropDown-Menu'>
                  <a href="#">Hotel de saintzBurg</a>
                  <a href="#">Imperial Hotel & Suites</a>
                  <a href="#">Condor Luxurious Suites</a>
                  <a href="#">La Vida Luxurious rooms</a>
                  <a href="#">The Emporium</a>
                  </div>
              </div>
              <button  className='checkInBtn'>Check In Date<IoMdCalendar /> </button>
              <button className='checkInBtn'>Check Out Date <IoMdCalendar /> </button>
              <div className='person'>
                  <button className='personBtn' >Person <GoTriangleDown /> </button>
              <div className='secondDropDown'>
                   <a href="#">Single </a>
                  <a href="#"> Couple Lounge </a>
                  <a href="#">Family</a>
                  <a href="#">Group</a>
                  <a href="#">Executive</a>
                  </div>
                  </div>
              <button className='searchBtn' >Search</button>
          </div>

    </div>
  )
}

export default Hotel