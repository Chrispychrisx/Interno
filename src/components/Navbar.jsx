import { useState } from 'react';
import logo from '../assets/logo.svg';
import { RiCloseLine, RiMenu3Line } from '@remixicon/react';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="wrapper">
        <div className="container nav-div">
            <div className="">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>

            <div className="menu-items">
                <a href="#" className="menu-item">Home</a>
                <a href="#" className="menu-item">About</a>
                <a href="#" className="menu-item">Our Services</a>
                <a href="#" className="menu-item">Blog</a>
                <a href="#" className="menu-item">Testimonies</a>
                <a href="#" className="menu-item">Contact</a>
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