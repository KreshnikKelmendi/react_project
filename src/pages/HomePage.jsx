import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import PropTypes from "prop-types"
import Header from '../components/Header';
import img1 from "../img/omegaswiss.jpg";
import img2 from "../img/rlx.jpg";
import img3 from "../img/rolex3.jpg";
import RolexLogo from "../img/rolex-png-logo-0.png";
import OmegaLogo from "../img/omegaLogo.png";
import TissotLogo from "../img/tissot-logo.png";
import HublotLogo from "../img/Hublot-Emblem.png";
import Promo from '../components/Promo';
import Footer from '../components/Footer';

const fadeImages = [
  {url: img1,},
  {url: img2,},
  {url: img3,},
];

const HomePage = (props) => {
    return (
    <>
      <Header />
      <div className="col-12">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img className='img-fluid' src={fadeImage.url} alt="slide" />
              </div>
              <div className="text-slide position-absolute">
                <h1>"{props.text}"</h1>
              </div>
              <div className="button-link">
                <h5 className='container-fluid text-highlight'>Want to know how to be happy</h5>
                <Link to="/mens-watches"><button className='btn btn-outline-dark btn-lg btn-one'>Click Here</button></Link>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <div className="container-fluid">
        <div className='row'>
            <div className="col-12 col-md-12 col-lg-4 py-2 container-img">
                <h4 className='heading-h4'>Our partnership with</h4>
                <img className='img-fluid' src={RolexLogo} alt='rolexLogo' />
                <img className='img-fluid' src={OmegaLogo} alt='omegaLogo' />
                <img className='img-fluid' src={TissotLogo} alt='tissotLogo' />
                <img className='img-fluid' src={HublotLogo} alt='hublotLogo' />
            </div>
            <div className='col-12 col-md-12 col-lg-8 d-flex p-3'>
                <p className='p-sponsorship'>The history of <b>ROLEX</b> sponsorship is the story of the perpetual pursuit of 
                   excellence, which underpins every aspect of the brand’s interests, from its watchmaking 
                   to the greatest names in sport, exploration and the arts.
                   The early 20th century was an era of exploration and sporting challenges.
                   In the world of watchmaking, Rolex founder Hans Wilsdorf, driven to push back 
                   the limits of what is possible, sought to replace traditional pocket watches with 
                   one of the supreme innovations of his time 
                   a watch worn on the wrist, resistant to dust and water...  <b>OMEGA</b> record-breaking
                   precision, reliability, versatility, and stylish aesthetics are reasons why this 
                   iconic brand is so popular, and we are proud to have been in partnership with the 
                   brand since the 1950s, having seen it go from strength to strength. Our showroom 
                   colleagues are highly trained to be experts in the world of OMEGA, able to take 
                   every client on an adventure through time and space. Not only do we sell OMEGA 
                   across many of our showrooms, but we also extended our partnership further by 
                   having opened OMEGA mono-brand boutiques in high profile locations in the UK and 
                   New York, Florida and Las Vegas in the US.
                   <b>TISSOT</b> has joined forces with A.S.O. in running cycling events all over the world. 
                   The Swiss watchmaker lends its expertise to all the major races on the calendar. 
                   In a sport where every second counts, relying on an extremely high-quality timekeeper 
                   is essential. Tissot shares the same values as A.S.O. in this regard and the same v
                   alues in terms of standards, precision and performance. This partnership means Tissot 
                   can draw in a large number of cycling enthusiasts committed to endurance and 
                   performance.</p>
            </div>
        </div>
      </div>
      <Promo />
      <Footer />
    </>
    );
  }

  HomePage.defaultProps ={
    text: "Everyone looks at your watch and it represents who you are, your values and your personal style",
  }
  
  HomePage.propTypes = {
    text:PropTypes.string,
  }

export default HomePage ;