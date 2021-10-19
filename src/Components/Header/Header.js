import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/heal.jpg';


//import useAuth from '../../hooks/useAuth';

const Header = () => {
    //const { user, logOut } = useAuth;
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid fs-5">
      <a className="navbar-brand text-light fs-4 fw-bold" href="#">
      <img src={logo} width="75" height="75" className="rounded-circle"/>
      Heal & Care</a>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>

                {/* {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>} */}
                {/* {
                    user.email ?
                        <button onClick={logOut}>log out</button> */}
                        {/* :
                        <NavLink to="/login">Login</NavLink>} */}
                        </div>
            </nav> 
            <body>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://schcdnprod.azureedge.net/public/images/default-source/rotators/home-page-rotator/protecting-our-patients.png?sfvrsn=abb9a8c8_0" class="d-block w-100 h-100" alt="..."/>
     </div>
    <div class="carousel-item">
      <img src="http://kpjhealth.com.my/seremban/media/Slide_21.12_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.bahrainspecialisthospital.com/images/slid-2.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </body>
        </div>
    );
};

export default Header;