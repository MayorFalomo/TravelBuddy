import React from 'react'
import "./Slides.css"

const Slides = ({slide}) => {
    
    return (
        <div className='sliderCard'> 
            <div className='myImages'> <img src={slide.image} alt="img" /></div>
            <div className='eventCard'>
            <div className='event'> {slide.event} </div>
            <div className='location'> <h4>{slide.location}</h4> </div>
            <div className='comment'> {slide.comment} </div>
            <div className='date'> Date: {slide.date} </div>
            <div className='cost'>Cost: {slide.cost} </div>
                <div className='organizer'>Organizer: {slide.organizer} </div>
                <div className='rating'>
                    <p>Rating: </p>
                    <img className='stars' src={slide.Rating} alt="img" /></div>
                            <div className='plansBtn'><button className='plan'>Plan Details</button></div>
            </div>
</div>
        )
}

export default Slides