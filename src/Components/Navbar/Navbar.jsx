import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = React.memo(() => {
    return (
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> MotionShift </a>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item"><Link className='nav-link' to={"/"}>Home</Link></li>
        <li className="nav-item"><Link className='nav-link' to={"/gallery"}>Gallery</Link></li>
      </ul> 

        <button className="boton" type="submit">
          Photos
        </button>
      <button className="btn btn-secondary my-2 my-sm-0 login" type="submit">
          Login
        </button>        
        <button className="btn btn-secondary my-2 my-sm-0 login" type="submit">
          Sign In
        </button>
    </div>
  </div>
</nav>

        </>            
    );
})

export default Navbar;