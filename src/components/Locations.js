import React, { useState } from 'react'
import "./Locations.css"
import Gallery from './Gallery.js';


import imageOne from "./Cannes, France.jpg";
import imageTwo from "./Railay, Thailand.jpg";
import imageThree from "./Bruges, Belgium.jpg";
import imageFour from "./Luxor, Egypt.jpg"
import imageFive from "./Matinloc Island, Phillipines.jpg"
import imageSix from "./Stanley, Australia.jpg"
import imageSeven from "./Androscogin River, Maine.jpg"
import imageEight from "./Dubai night.jpg";

export const Locations = () => {

    const [locations, setLocations] = useState([
        {
            id: 1,
            image: imageOne,
            info:"Cannes, a resort town on the French Riviera, is famed for its international film festival. Its Boulevard de la Croisette, curving along the coast, is lined with sandy beaches, upmarket boutiques and palatial hotels.",
        },
        {
            id: 2,
            image: imageTwo,
            info:" This beach is a near-flawless white wonder and is the best place in Railay to swim, join an afternoon pick-up football game or watch a fiery sunset. ",
        },
        {
            id: 3,
            image: imageThree,
            info: "Experience the city’s romantic canal-side strolls, traditional local beers, and unhurried shopping among medieval architecture. During your stay in this picturesque city of Old Flanders, you can unwind at medieval rooftops that step up to the sky",
        },
        {
            id: 4,
            image: imageFour,
            info: "As Thebes, it was the capital of the ancient kingdom; today Luxor is known as the world's greatest open-air musuem, home to some of Egypt's most famous temples, ...",
        },
        {
            id: 5,
            image: imageFive,
            info: "The Island itself is stunning and natural beauty at its best. The island is very rich in marine animals and the water is very clean. The trip all the way to the ..."
        },
        {
            id: 6,
            image: imageSix,
            info: "Stanley is a romantic town sitting on a slender sliver of land jutting out into the Bass Strait on Tasmania's northwest coast.",
        },
        {
            id: 7,
            image: imageSeven,
            info: "The Androscogin River is a river in the U.S. states of Maine and New Hampshire, in northern New England.",
        },
        {
            id: 8,
            image: imageEight,
            info: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
        },

    ])

    const [seeMore, setSeeMore] = useState(4)

  return (
      <div className='locations'>
          <div className='flexText'>
            <h2>Top places to visit</h2>
              <p>The Best Place to Stay in Indonesia</p>
              </div>
          <div className='flexImage'>
          {locations.slice(0, seeMore).map((location, index) => (
              
              <Gallery key={index} location = {location}  seeMore={seeMore} setSeeMore={setSeeMore} setLocations={setLocations} />
           ))}  
          </div>

          <button id='seeMoreBtn' className= { seeMore === 4 ? "btn current" : "current"} onClick={() => setSeeMore(8)} >SEE MORE</button>
          <button id="seeMoreBtn" className={seeMore === 8 ? "btn current" : "current"} onClick={() => setSeeMore(4)}> SEE LESS</button>
          
          
    </div>
  )
}
