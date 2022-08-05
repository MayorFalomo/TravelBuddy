import React from 'react'
import "./Gallery.css"

const Gallery = ({location}) => {
  return (
      <div className='galleryCard'>
      <img className='imageries' src={location.image} alt="img" />
      <div className='overlay'>
        <div className='text'>{ location.info}</div>
      </div>

      </div>
  )
}

export default Gallery