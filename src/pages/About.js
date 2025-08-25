import React, { useEffect } from "react";
import { joinOurCommunity, openWhatsApp, scrollToAiBootcamp } from "../utils/buttonActions";
import OurTeamMembers from "../components/OurTeamMembers";
import PartnerWithUs from "../components/PartnerWithUs";
import RTLSlider from "../components/RTLSlider";
import "../assets/css/AboutUsProp.css";
import Slider from "react-slick";

const About = () => {
  useEffect(() => { }, []);

  return (
    <div className="container-fluid">
      <div className="row content-space aboutBannerSection">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1 mt-3">
          <div className="row mt-5 align-items-center">
            <div className="col-12 col-sm-12 col-lg-12 col-xl-6 banner-content">
              <h5>About Us</h5>
              <h3>Igniting AI Innovation Across India</h3>
            </div>
            <div
              className="col-12 col-sm-12 col-lg-12 col-xl-6 d-flex align-items-end fittingImage"
            >
              <img src="/images/aboutus/heroabout.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="row aboutDescipr">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-5">
                <h4>
                  Descipr was born to bridge the gap between AI theory and real
                  world application
                </h4>
              </div>
              <div className="col-0 col-sm-0 col-lg-0 col-xl-2">&nbsp;</div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-5">
                <h5>
                  We empower students, educators, and professionals with
                  hands-on learning, real projects, and expert mentorship— right
                  from classrooms to corporate boardrooms.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RTLSlider />
      <div className="row aboutusMission">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-5 d-flex align-items-center"
              >
                <div>
                  <h5>
                    <img src="/images/aboutus/mission.svg" /> Our Mission
                  </h5>
                  <h3>
                    Make India future-ready in AI by fostering creativity,
                    problem-solving, and innovation through immersive,
                    accessible programs. From gamified school lessons to AI
                    clubs in colleges and industry-grade upskilling for
                    professionals—Descipr is building a nationwide ecosystem
                    where ideas turn into impact.
                  </h3>
                </div>
              </div>
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-7 d-flex align-items-center justify-content-center"
              >
                <img src="/images/aboutus/aboutelement.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row learnBuildText">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                <h1>Learn. <span>Build.</span></h1>
                <h1>Innovate with AI</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurTeamMembers />
      <PartnerWithUs />
    </div>
  );
};

export default About;
