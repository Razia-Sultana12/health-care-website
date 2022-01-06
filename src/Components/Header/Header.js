import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/heal.jpg';
import useAuth from '../hooks/useAuth';


const Header = () => {
    const {user,logOut,signInUsingGoogle}=useAuth();
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand fs-2 fw-bold text-light" href="#"><img src={logo} width="75" height="75" className="rounded-circle"/>Heal&Cure</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <NavLink to="/home" className="navHover nav-link text-light">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/about" className="navHover nav-link text-light" >About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/doctors" className="navHover nav-link text-light" >Doctor</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/services" className="navHover nav-link text-light" >Service</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/contact" className="navHover nav-link text-light" >Contact</NavLink>
        </li>
      </ul>
      <span class="navbar-text">
      {user.email ? (
                 <div className="d-flex align-items-center mx-auto">
                  <img className="m-2" width='42' height='42' src={profile} alt="" srcset="" />
                     {user?.displayName}
                   <button
                     onClick={logOut}
                     className="btn-secondary rounded me-2 mx-3 py-1"
                   >
                       {logOut} Logout
                     </button>
                   </div>
                 ) : (
                   <NavLink to="/login" className="navHover nav-link text-light">
                     Login
                   </NavLink>)}
      </span>
    </div>
  </div>
</nav>
           
           
            
        </div>
    );
};

export default Header; 
