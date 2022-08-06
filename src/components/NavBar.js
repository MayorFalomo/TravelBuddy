import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

    const [navbar, setNavBar] = useState(false)
    
    const changeBackgroundColor = () => {
        if (window.scrollY >= 700) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    };

    const [click, setClick] = useState(false)

    const updateMenu = () => {
        setClick(!click)
    }

    window.addEventListener("scroll", changeBackgroundColor)


    return (
        <div className='NavContainer'>
          <nav className={navbar ? "navbar active" : "navbar"}>
              <div className='navFlex'>
                    <div className='logo'><img src='./logo.svg' alt='img' /></div>
                    
                    <ul className={click ? "links active" : "links"}>
                        
                       <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About</li> </Link>
                     <Link to='/packages'><li>Packages</li></Link>
                     <Link to='/places' ><li>Places</li> </Link>
                      <Link to='/contact' ><li>Contact</li> </Link>
              </ul>
              <div id='hamburger' onClick={updateMenu} className={click ? 'hamBurgerMenu active' : 'hamBurgerMenu'}>
                    <span id='bars1' className="bars"></span>
                    <span id = 'bars2' className="bars"></span>
                    <span id='bars3' className="bars"></span>
                  </div>
                      <div className='bookings'><button className='booking-btn' >Book Now</button></div>
              </div>
                    <div className='booking'><button className='booking-btn' >Book Now</button></div>

                </nav>
       

              </div>
  )
}

export default Navbar