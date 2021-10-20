import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/heal.jpg';
import useAuth from '../hooks/useAuth';




const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div className="header">
            <nav className="navbar sticky-top navbar-expand-lg  bg-dark">
      <div className="container-fluid fs-5">
      <a className="navbar-brand text-light fs-4 fw-bold" href="#">
      <img src={logo} width="75" height="75" className="rounded-circle"/>
      Heal & Care</a>
      
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/contact">Contact</NavLink>
               
                {user?.email?
                <button onClick={logOut} type="button" class="btn btn-light">LogOut</button>:
                <NavLink to="/login">Login</NavLink>}
                <small className="text-light fs-5">Sign in As:<a href="#login">{user?.displayName}</a></small>
                </div>
            </nav> 
           
           
            
        </div>
    );
};

export default Header; 