import { useState } from 'react';
import logo from '../assets/logo.svg';
import { RiCloseLine, RiMenu3Line } from '@remixicon/react';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="wrapper">
        <div className="container nav-div">
            <div className="">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <div className="menu-items">
                <Link to="home" smooth={true} duration={900} className="menu-item">Home</Link>
                <Link to="about" smooth={true} duration={900} className="menu-item">About</Link>
                <Link to="projects" smooth={true} duration={1002} className="menu-item">Our Services</Link>
                <Link to="blog" smooth={true} duration={900} className="menu-item">Blog</Link>
                <Link to="testimonial" smooth={true} duration={1050} className="menu-item">Testimonies</Link>
                <Link to="contact" smooth={true} duration={900} className="menu-item">Contact</Link>
            </div>

            <div className="block sm:hidden cursor-pointer">
              {
                openMenu
                ? <RiCloseLine style={{marginRight: '10px'}} 
                onClick={()=> setOpenMenu(false)} />
                : <RiMenu3Line style={{marginRight: '10px'}} 
                onClick={()=> setOpenMenu(true)} />
              }
            </div>
        </div>

        {
          openMenu &&
          (
            <div className="mobile-menu">
                <a href="#" className="menu-item">Home</a>
                <a href="#" className="menu-item">About</a>
                <a href="#" className="menu-item">Our Services</a>
                <a href="#" className="menu-item">Blog</a>
                <a href="#" className="menu-item">Testimonies</a>
                <a href="#" className="menu-item">Contact</a>
            </div>
          )
        }
    </div>
  )
}

export default Navbar