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
        <div className='NavBar row px-5'>
            <div className='Logo col-md-3'>
                <NavLink to="/"><h4>Anbalayaa A Fabrics</h4></NavLink>
            </div>
            <div className='NavBar1 col-md-7  '> 
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About Us</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </div>
            <div className='col-md-2'>
               <Button onClick={()=>navigate("/Product")}>PRODUCTS</Button>
            </div>
        </div>
    );
};

export default NavBar;