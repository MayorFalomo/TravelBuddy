import React from 'react'
import stars from "./Star-rating.svg"
import "./Testimonial.css"
import Carousel from 'react-elastic-carousel';



const Testimonial = () => {

      const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
  { width: 1400, itemsToShow: 3 }
];


    const testimonials = [
        {
            starImage: stars,
            comments: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
            author: "- Lindon Lyria "
    },
        {
            starImage: stars,
            comments: " Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.",
            author: "- Yerin",
    },
        {
            starImage: stars,
            comments: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
            author: "- Rand Al'Thor "
        },
        {
            starImage: stars,
            comments: "Marty, you seem so nervous, is something wrong? Huh? yes, Joey just loves being in his playpen. he cries whenever we take him out so we just leave him in there all the time. Well Marty, I hope you like meatloaf. He’s an absolute dream. Now that’s a risk you’ll have to take you’re life depends on it.",
            author: "- Mat Cauthorn "
        },
        {
            starImage: stars,
            comments: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
            author: "- Kaladin"
        },
        {
            starImage: stars,
            comments: " Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas?",
            author: "- Vin "
        },
        {
            starImage: stars,
            comments: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
            author: "- Kip Guile"
        },
        {
            starImage: stars,
            comments: "We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept,",
            author: "- Logen Ninefingers"
        },
        {
            starImage: stars,
            comments: "Waters make fish every without firmament saw had. Morning air subdue. Our, air very one. Whales grass is fish whales winged.",
            author: "- Otto Malpense"
        },
    ]
  return (
      <div className='mainCard'>
          <h3 className='said' >What They Said</h3>
          <div className="mainCard-Container">
           <Carousel breakPoints={breakPoints}>
      {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-Container" >
              <img className='starPicture' src={testimonial.starImage} alt="img" />
              <div className='comment'> {testimonial.comments} </div>
              <div className='comment'> {testimonial.author} </div>
          </div>
      ))}
     </Carousel>
          </div>
          </div>
  )
}

export default Testimonial