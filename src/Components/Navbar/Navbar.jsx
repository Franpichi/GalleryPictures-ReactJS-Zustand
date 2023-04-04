import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

export const Navbar = React.memo(() => {
    return (
        <>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="brand" href="/"><img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Brand" className='brand' /></a>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className='nav-link' to={"/"}>Home</Link></li>
          <li className="nav-item"><Link className='nav-link' to={"/gallery"}>Gallery</Link></li>
        </ul> 
        <button className="button-user" type="submit">Login</button>        
        <button className="button-user" type="submit">Sign In</button>
      </div>
  </div>
</nav>
        </>            
    );
})

export default Navbar;