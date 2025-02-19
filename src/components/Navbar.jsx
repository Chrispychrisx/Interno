import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="container wrapper">
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
        </div>
      </div>
  )
}

export default Navbar
