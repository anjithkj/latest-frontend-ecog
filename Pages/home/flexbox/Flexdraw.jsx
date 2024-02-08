import React, { useEffect, useState } from 'react'

// import "../flexbox/flexdraw.scss";

import logo from '../flexbox/logo.svg'
import  '../flexbox/flexdraw.scss'
import ecog from '../flexbox/ecog.png'
import { Link } from 'react-router-dom'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';



const Flexdraw = () => {

    


    useEffect(() => {
        const navBar = document.querySelector(".navbar");
        let prevScrollPos = window.scrollY;
    
        window.addEventListener("scroll", function () {
          let currScrollPos = window.scrollY;
    
          if (currScrollPos > prevScrollPos) {
            navBar.style.transform = `translateY(-105%)`;
          } else {
            navBar.style.transform = `translateY(0%)`;
          }
    
          prevScrollPos = currScrollPos;
        });
      }, []); // Empty dependency array ensures that the effect runs only once on mount
    

  return (
    <div>
    <nav className="navbar">
  <div className="logo">
    <i className="fa-solid fa-font-awesome"></i>
    <a href="#"><img src={ecog} className='pi' alt="Your SVG"  /></a>
    
  </div>
  <div className="menu">
    <div className="menu-links" >
    <Link to="/userside" style={{textDecoration:"none"}}>Home</Link>
      <a href="#">
  
      <div className="dropdowns">
        <div className="dropdown">
          <button className="dropdown-button">
            <span>Categorys</span>
            
          </button>
          <div className="dropdown-menu">
            <button>Dairy</button>
            <button>Fruits</button>
            <button>Vegitables</button>
          
          </div>
        </div>
      </div>

      
      </a>
  

     
     
      
      <a href="#">Contact</a>
      <a href="#"><ShoppingCartOutlinedIcon/> Cart</a>
      <Link to="/sellerlogin"><StorefrontIcon/>Become a Seller </Link>
    </div>
    
    {/* <Link to="/signup" style={{textDecoration:"none"}}>
    <button className="reg-in">Sign up</button></Link> */}

    <Link to="/login" style={{textDecoration:"none"}}>
      <button className="reg-in">Log out</button></Link>
    
  </div>
  <div className="menu-btn">
    <i className="fa-solid fa-bars"></i>
  </div>
</nav>

{/* <section>
  <h1>Scroll Down to<br/>hide Navigation</h1>
</section>

<section>
  <h1>Scroll Up to<br/>show Navigation</h1>
</section> */}
{/* navbar */}
  
</div>
  )
}

export default Flexdraw
