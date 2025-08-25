import React from "react";
import { Link } from "react-router-dom";
import { openWhatsApp, joinOurCommunity, openYouTube } from "../utils/buttonActions";
import "../assets/css/Footer.css"

const Footer = () => {
  return (
    <div className="row footer">
      <div className="container">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
          <div className="row">
            {/* Left Side */}
            <div className="col-12 col-sm-12 col-lg-4 col-xl-6">
              <Link to="/">
                <img src="/images/companylogo/headerLogo.webp" alt="Logo" />
              </Link>
              <h5>&copy; {new Date().getFullYear()} Copyright. All rights reserved.</h5>
            </div>

            {/* Right Side */}
            <div className="col-12 col-sm-12 col-lg-8 col-xl-6">
              <div className="row">
                {/* Programs */}
                <div className="col-6 col-sm-4 col-lg-4 col-xl-4">
                  <h6>Programs</h6>
                  <div className="fellowship-content">
                    <ul>
                      <li><Link to="/school">School</Link></li>
                      <li><Link to="/college">College</Link></li>
                      <li><Link to="/corporate">Corporate</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Company */}
                <div className="col-6 col-sm-4 col-lg-4 col-xl-4">
                  <h6>Company</h6>
                  <div className="fellowship-content">
                    <ul>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                      <li><Link to="/terms-of-use">Terms of Use</Link></li>
                      <li><a onClick={openWhatsApp}>Contact us</a></li>
                    </ul>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="col-6 col-sm-4 col-lg-4 col-xl-4">
                  <h6>Follow Us</h6>
                  <div className="fellowship-content">
                    <ul>
                      <li>
                        <a onClick={joinOurCommunity}>
                          <img src="/images/socialmedia/Linkedin.svg" alt="LinkedIn" /> LinkedIn
                        </a>
                      </li>
                      <li>
                        <a onClick={openYouTube}>
                          <img src="/images/socialmedia/Youtube.svg" alt="YouTube" /> YouTube
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
