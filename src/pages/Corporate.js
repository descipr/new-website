import React, { useEffect } from "react";
import { openWhatsApp, scrollToProducts } from "../utils/buttonActions";
import CustomizedTraining from "../components/CustomizedTraining";
import RecentTrainings from "../components/RecentTrainings";
import PartnerWithUs from "../components/PartnerWithUs";
import "../assets/css/CorporateProp.css";

const CorporateProg = () => {
  useEffect(() => { }, []);

  return (
    <div className="container-fluid">
      <div className="row content-space bannerwhite">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1 mt-3">
            <div className="row mt-5 align-items-center">
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-6 banner-content mt-5 mb-5"
              >
                <h3>Get Your Team AI Ready in One Month</h3>
                <h5>
                  Expert-led upskilling for actionable results in your field
                </h5>
                <article>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-sm-12">
                      <button className="expcurriculum" onClick={scrollToProducts}>
                        Explore our products
                      </button>
                      <button className="partnerwithus" onClick={openWhatsApp}>
                        Partner with us
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 fittingImage">
                <img src="/images/sectionimages/hearobanner.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row infographicdata">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                <h4>Elevate from Skill-Building to Capability Creation</h4>
              </div>
              <div className="col-0 col-sm-0 col-lg-0 col-xl-8">&nbsp;</div>
              <div className="col-0 col-sm-0 col-lg-0 col-xl-3">&nbsp;</div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-9">
                <img src="/images/corporate/infograph.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row tailoredProducts" id="mainproducts">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <h4>Tailored products to meet your needs</h4>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
                <div className="row">
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                    <div className="workshop">
                      <img
                        src="/images/corporate/intermediateImages/Workshop.png"
                      />
                      <h5>Workshop</h5>
                      <div className="para-content">
                        <p>8 hours of Interactive Learning</p>
                        <p>Master one core skill at a time</p>
                        <p>Customizable & Use case driven</p>
                        <p>Suitable for reskilling initiatives</p>
                      </div>
                      <button onClick={openWhatsApp}>Explore more</button>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                    <div className="fellowship">
                      <img
                        src="/images/corporate/intermediateImages/fellowship.png"
                      />
                      <h5>Fellowship</h5>
                      <div className="para-content">
                        <p>24 hours of Enterprise AI/DS Training</p>
                        <p>Live and Hands-On Sessions</p>
                        <p>Mentor-Led Office Hours</p>
                        <p>Suitable for fresh recruits upskilling</p>
                      </div>
                      <button onClick={openWhatsApp}>Explore more</button>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                    <div className="customcurriculum">
                      <img
                        src="/images/corporate/intermediateImages/Custom curriculum.png"
                      />
                      <h5>Custom Curriculum</h5>
                      <div className="para-content">
                        <span
                        >Have a specific upskilling vision for your team?
                          Let's bring it to life. Share your goals, and we'll
                          tailor a program that fits your exact needs</span
                        >
                      </div>
                      <button onClick={openWhatsApp}>Contact us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomizedTraining />

      <div className="row trainingaction">
        <div className="container">
          <div
            className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1 text-start"
          >
            <h4>Let's make training actionable</h4>

            <div className="row comparison-row">
              <div className="col-4 col-sm-3 col-lg-3 col-xl-3 centerContent">
                &nbsp;
              </div>
              <div className="col-2 col-sm-3 col-lg-3 col-xl-3 centerContent">
                MOOC
              </div>
              <div className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent">
                Bootcamp
              </div>
              <div className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent">
                Descipr
              </div>
              <div className="col-4 col-sm-3 col-lg-3 col-xl-3" id="leftyAlign">
                Live Stream
              </div>
              <div className="col-2 col-sm-3 col-lg-3 col-xl-3 centerContent">
                <img src="/images/corporate/x_icon.svg" />
              </div>
              <div className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent">
                <img src="/images/corporate/x_icon.svg" />
              </div>
              <div className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent">
                <img src="/images/corporate/green_tick_doodle.svg" />
              </div>
              <div
                className="col-4 col-sm-3 col-lg-3 col-xl-3 alt_whitebg"
                id="leftyAlign"
              >
                Customizable Options
              </div>
              <div
                className="col-2 col-sm-3 col-lg-3 col-xl-3 centerContent alt_whitebg"
              >
                <img src="/images/corporate/x_icon.svg" />
              </div>
              <div
                className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent alt_whitebg"
              >
                <img src="/images/corporate/x_icon.svg" />
              </div>
              <div
                className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent alt_whitebg"
              >
                <img src="/images/corporate/green_tick_doodle.svg" />
              </div>
              <div className="col-4 col-sm-3 col-lg-3 col-xl-3" id="leftyAlign">
                Reusable Codebases
              </div>
              <div className="col-2 col-sm-3 col-lg-3 col-xl-3 centerContent">
                <img src="/images/corporate/x_icon.svg" />
              </div>
              <div className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent">
                <img src="/images/corporate/x_icon.svg" />
              </div>
              <div className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent">
                <img src="/images/corporate/green_tick_doodle.svg" />
              </div>
              <div
                className="col-4 col-sm-3 col-lg-3 col-xl-3 alt_whitebg"
                id="leftyAlign"
              >
                Solution Templates
              </div>
              <div
                className="col-2 col-sm-3 col-lg-3 col-xl-3 centerContent alt_whitebg"
              >
                <img src="/images/corporate/x_icon.svg" />
              </div>
              <div
                className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent alt_whitebg"
              >
                <img src="/images/corporate/x_icon.svg" />
              </div>
              <div
                className="col-3 col-sm-3 col-lg-3 col-xl-3 centerContent alt_whitebg"
              >
                <img src="/images/corporate/green_tick_doodle.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentTrainings />
      <div className="row desciprEdge">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3 edgeRightpadding">
                <h4>Experience the Descipr EDGE</h4>
                <button onClick={openWhatsApp}>Partner with us</button>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-9">
                <div className="row" id="descipredgecontent">
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                    <img src="/images/corporate/icon_edges/earlycareers.svg" />
                    <h5>Experienced Instructors</h5>
                    <h6 className="bottomspaceedge">
                      Gain insights from seasoned experts who bring real world
                      knowledge and deep subject matter expertise to every
                      session, ensuring your team learns from the best.
                    </h6>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                    <img src="/images/corporate/icon_edges/earlycareers.svg" />
                    <h5>Dynamic Curriculum</h5>
                    <h6 className="bottomspaceedge">
                      A curriculum tailored to your unique business needs,
                      created using our proprietary engine, designed to meet
                      your goals with precision and relevance
                    </h6>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                    <img src="/images/corporate/icon_edges/earlycareers.svg" />
                    <h5>Guaranteed Speed</h5>
                    <h6 className="bottomspaceedge">
                      Experience rapid turnaround with curriculum design and
                      delivery in just two weeks, enabling faster upskilling and
                      time-to-impact for your workforce
                    </h6>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                    <img src="/images/corporate/icon_edges/earlycareers.svg" />
                    <h5>Effortless Scalability</h5>
                    <h6>
                      Train your teams easily using small, focused batches led
                      by 50+ vetted instructors. This ensures personalized
                      attention while deploying training at scale
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartnerWithUs />
    </div>
  );
};

export default CorporateProg;
