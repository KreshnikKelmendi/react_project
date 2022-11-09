import React from "react";
import Logo from '../img/Watch-Background-PNG-Image.png';

const Footer = () => {
    return(
       <div className="container-fluid d-flex footer">
            <div className="row">
                <img className="img-fluid col-12 col-md-4 col-lg-6" src={Logo} alt="logo" />
                <div className="col-12 col-md-12 col-lg-6 txt-footer">
                <h4 className="text-center">Copyright &copy; All rights reserved</h4>
                <h6 className="text-center">Powered by React JS</h6>
                </div>
            </div>
         </div>
    )
}

export default Footer;