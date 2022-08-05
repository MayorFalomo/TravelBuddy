import React, { Component } from 'react'
import ReactDOM from "react-dom"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-elastic-carousel';
import Slides from './Slides';




import slidesOne from "./Bouches-du-Rhone, France.jpg"
import slidesTwo from "./Sechura Desert, Peru.jpg"
import slidesThree from "./Dunluce Castle, Northern Ireland.jpg"
import slidesFour from "./Luxor, Egypt.jpg"
import slidesFive from "./Kanchanaburi Province, Thailand.jpg"
import stars from "./Star-rating.svg"
  
  
const Slider = () => {

  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];



  const slides = [
    {
      id: 1,
      image: slidesOne,
      event: "Upcoming Event",
      location: "Bouches-du-Rhone, France",
      comment: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
      date: "12 Aug, 2022",
      cost: "Starting from $10,000",
      organizer: "TravelBuddy",
      Rating: stars,
    },
    {
      id: 2,
      image: slidesTwo,
      event: "Upcoming Event",
      location: "Sechura Desert, Peru",
      comment: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
      date: "20 September, 2022",
      cost: "Starting from $20,000",
      organizer: "TravelBuddy",
      Rating: stars,
    },
    {
      id: 3,
      image: slidesThree,
      event: "Upcoming Event",
      location: "Dunluce Castle, North ireland",
      comment: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
      date: "12 January 2022",
      cost: "Starting from $30,000",
      organizer: "TravelBuddy",
      Rating: stars,
    },
    {
      id: 4,
      image: slidesFour,
      event: "Upcoming Event",
      location: "Luxor, Egypt",
      comment: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
      date: "26 October 2022",
      cost: "Starting from $40,000",
      organizer: "TravelBuddy",
      Rating: stars,
    },
    {
      id: 5,
      image: slidesFive,
      event: "Upcoming Event",
      location: "Kanachanaburi Province, Thailand",
      comment: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
      date: "1 January 2022",
      cost: "Starting from $40,000",
      organizer: "TravelBuddy",
      Rating: stars,
    },
  ]

  // const [current, setCurrent] = useState(0)

  // newslidesr = slidesr[current]

  return (
    <Carousel breakPoints={breakPoints}>
      {slides.map((slide) => (
         <Slides key={slide.id} slide={slide} />
      ))}
     </Carousel>
)
}
export default Slider