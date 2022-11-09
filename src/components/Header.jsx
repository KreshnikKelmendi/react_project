import React from "react";
import Logo from '../img/logo_full.png';
import { Link } from "react-router-dom";
    const Header = () => {
    return(
            <>
              <div className="header">
                <img className="img-fluid rounded mx-auto d-block nav-logo" src={Logo} alt="logo" />
              </div>  
                <ul className="nav justify-content-center ul-nav">
                  <li className="nav-item li-nav">
                    <Link to="/" className="nav-link active">Home</Link>
                  </li>
                  <li className="nav-item li-nav">
                    <Link to="/mens-watches" className="nav-link active">Men's Watches</Link>
                  </li>
                  <li className="nav-item li-nav">
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                  </li>
                </ul>
            </>
    );
    }

export default Header;