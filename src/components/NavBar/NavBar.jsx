import React from 'react';
import './NavBar.css';
// import Contact from '../contact/Contact';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
//import Product from '../product/Product';
// import Home from '../home/Home';
// import {Routes, Route, useNavigate} from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-light p-3 bg-light row">
      <a class="navbar-brand px-3 col-md-3" href="#">
        Anbalayaa A Fabrics
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse col-md-6 justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item px-2">
            <NavLink to="/" className="nav-link text-black" href="#">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink to="/aboutus" className="nav-link" href="#">
              About Us
            </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink to="/contactus" className="nav-link" href="#">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="col-md-3 px-5">
        <Button className="" onClick={() => navigate("/Product")}>
          PRODUCTS
        </Button>
      </div>
    </nav>
    // <div className='NavBar row px-5'>
    //     <div className='Logo col-md-3'>
    //         <NavLink to="/"><h4>Anbalayaa A Fabrics</h4></NavLink>
    //     </div>
    //     <div className='NavBar1 col-md-7  '>
    //         <NavLink to="/">Home</NavLink>
    //         <NavLink to="/">About Us</NavLink>
    //         <NavLink to="/Contact">Contact</NavLink>
    //     </div>
    //     <div className='col-md-2'>
    //        <Button onClick={()=>navigate("/Product")}>PRODUCTS</Button>
    //     </div>
    // </div>
  );
};

export default NavBar;