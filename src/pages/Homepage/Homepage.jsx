import React from 'react';

import './Homepage.style.scss';
import homeImage1 from '../../images/cyberinvestigate.jpg';

const Homepage = () => 
{
    return(
        <div>
        <section className = "w3l-header-4 header-sticky">
            <header className="absolute-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <h1><a className="navbar-brand" href="index.html"><span className="fa fa-line-chart" aria-hidden="true"></span>
                        Denvato Crime Analytics
                        </a></h1>
                        <button className="navbar-toggler bg-gradient" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="services.html">Services</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav search-righ">
                                <li className="nav-item" title="Search"><a href="#search" className="btn search-search"><i className="fa fa-search mr-2" aria-hidden="true"></i>Search</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>

                            <div id="search" className="pop-overlay">
                                <div className="popup">
                                    <form action="#" method="GET" className="d-flex">
                                        <input type="search" placeholder="Search.." name="search" required="required" autoFocus />
                                        <button type="submit">Search</button>
                                        <a className="close" href="#">&times;</a>
                                    </form>
                                </div>
                            </div>

                            <ul className="navbar-nav search-right">
                                <li className="nav-item">
                                    <a className="nav-link" href="auth">Login/Signup</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
          </header>
        </section>
        
        <div className="w3l-hero-headers-9">
    <section className="slide slide-one">
      <div className="container">
          <div className="row">
                <div className="banner-text col-lg-5">
                <h5>Analytical platform <br/>for fight against Crime</h5>
                <p>Simplicity, effiency and reliability in serving criminal information is our goal .</p>
                <a href="services.html" className="btn logo-button top-margin">Our Service</a>
                </div>
                <div className="image-postion col-lg-7">
                <img src={homeImage1} alt="product" className="img-responsive banner-images" style = {{height: "65vh"}} />
                </div>
        
      </div>

    </div>
    </section>
  </div>

        </div>
    );
};

export default Homepage;