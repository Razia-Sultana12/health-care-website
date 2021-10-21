import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/heal.jpg';
import useAuth from '../hooks/useAuth';


const Header = () => {
    const {user,logOut,signInUsingGoogle}=useAuth();
    return (
        <div className="header">
            <nav className="navbar sticky-top navbar-expand-lg  bg-dark">
      <div className="container-fluid fs-5">
      <a className="navbar-brand text-light fs-4 fw-bold" href="#">
      <img src={logo} width="75" height="75" className="rounded-circle"/>
     Heal & Care</a>
      
                <NavLink className="navHover" to="/home">Home</NavLink>
                <NavLink className="navHover" to="/about">About Us</NavLink>
                <NavLink className="navHover" to="/services">Services</NavLink>
                <NavLink className="navHover" to="/doctors">Doctors</NavLink>
                <NavLink className="navHover" to="/contact">Contact</NavLink>
               
                {user?.email?
                <button onClick={logOut} type="button" className="btn btn-light btn-lg fs-5">Logout</button>:
                <NavLink to="/login">Login</NavLink>}
                <small className="text-light fs-5">Sign in As:<a href="#login">{user?.displayName}</a></small>
                </div>
            </nav> 
           
           
            
        </div>
    );
};

export default Header; 