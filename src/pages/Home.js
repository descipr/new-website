import React, { useEffect } from "react";
import RandomScroller from "../components/RandomScroller";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { joinOurCommunity } from "../utils/buttonActions";
import { openWhatsApp } from "../utils/buttonActions";
import PartnerWithUs from "../components/PartnerWithUs";
import 'swiper/css';
import 'swiper/css/autoplay';

const ClientLogos = () => {
  return (
    <div className="ourclients">
      <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1 slightPadding">
        <h4>Organizations we have worked with</h4>
        <section className="customer-logos slider">
          <Swiper
            modules={[Autoplay]}
            className="client-logos-swiper"
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            centerInsufficientSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            breakpoints={{
              1201: { slidesPerView: 3, centeredSlides: true }, // Desktop
              993: { slidesPerView: 2, centeredSlides: false },  // Tablet
              0: { slidesPerView: 1, centeredSlides: true }     // Mobile
            }}
          >
            <SwiperSlide><img src="/images/companylogo/bangalore_college.webp" alt="Bangalore College" /></SwiperSlide>
            <SwiperSlide><img src="/images/companylogo/refocus.webp" alt="Refocus" /></SwiperSlide>
            <SwiperSlide><img src="/images/companylogo/ega.webp" alt="EGA" /></SwiperSlide>
            <SwiperSlide><img src="/images/companylogo/home_credit.webp" alt="Home Credit" /></SwiperSlide>
            <SwiperSlide><img src="/images/companylogo/amity_university.webp" alt="Amity University" /></SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
  }, []);

  return (
    <div className="container-fluid">
      <div className="row content-space homemainsection">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1 mt-3">
          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-lg-12 col-xl-6 banner-content mt-5 mb-5">
              <h3>Learn. Build.<p>Innovate with AI.</p></h3>
              <h5>Join our industry-led fellowships and transform your career in AI.</h5>
              <article>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-sm-12">
                    <button onClick={joinOurCommunity} className="whiteAiJourneyBtn">
                      Join Our Community
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-sm-12 col-lg-12 col-xl-6 fittingImage">
              <img src="images/sectionimages/Hero_banner_new.webp" alt="Banner" />
            </div>
          </div>
        </div>
      </div>

      <ClientLogos />

      <div className="row specialPrograms">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <h4>Our Programs</h4>

            <div className="wrapper">
              <section className="panel school">
                <div className="content">
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-6 text-right">
                    <img
                      src="/images/sectionimages/School_image.webp"
                      alt="School"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                    <div className="wide-70">
                      <h3>Innovative Learning for Schools</h3>
                      <p>
                        Hands-on learning, gamified experiences and real-world
                        projects to spark innovation and design thinking in
                        students and educators.
                      </p>
                      <button >
                        <a href="https://www.descipr.com/school" style={{textDecoration: "none"}}>Explore Program</a> 
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="panel college">
                <div className="content">
                  <div
                    id="collegeContent"
                    className="col-12 col-sm-12 col-lg-12 col-xl-6"
                  >
                    <div className="wide-70 extramargininput">
                      <h3>AI Mastery for Colleges</h3>
                      <p>
                        Live cohorts, industry-grade projects, and expert
                        mentorship to help students and professors master the
                        latest AI advancements.
                      </p>
                      <button >
                        <a href="https://www.descipr.com/college">Explore Program</a> 
                      </button>
                    </div>
                  </div>
                  <div
                    id="collegeMansion"
                    className="col-12 col-sm-12 col-lg-12 col-xl-6"
                  >
                    <img
                      src="/images/sectionimages/College_image.webp"
                      alt="College"
                    />
                  </div>
                </div>
              </section>

              <section className="panel corporate">
                <div className="content">
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                    <img
                      src="/images/sectionimages/Corporate_new.webp"
                      alt="Corporate"
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                    <div className="wide-70">
                      <h3>AI-Powered Transformation for Corporates</h3>
                      <p>
                        Practical frameworks, industry-specific use-cases, and
                        strategic guidance to help professionals integrate AI
                        for innovation and efficiency.
                      </p>
                      <button >
                        <a href=" https://www.descipr.com/corporate">Explore Program</a> 
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="row empowerFuture">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <h4>Empowering the <span>Future with AI</span></h4>
            <div className="row future-content">
              <div className="col-sm-12 col-lg-12 col-xl-12">
                <div className="row">
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img src="/images/why/handsonlearning.webp" />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>Hands-On Learning</h5>
                        <summary>
                          Engaging case study-based approach for students,
                          educators and professionals.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img src="/images/why/industryandresearch.webp" />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>Industry & Research Integration</h5>
                        <summary>
                          Access to cutting-edge AI projects, expert mentorship
                          and research funding.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img src="/images/why/aiforeveryone.webp" />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>AI for Everyone</h5>
                        <summary>
                          From schools to colleges to enterprises, tailored AI
                          programs for all levels.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img src="/images/why/innovation.webp" />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>Innovation & Entrepreneurship</h5>
                        <summary>
                          Hackathons, startup mentorship, and funding
                          opportunities.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img src="/images/why/careerandindustries.webp" />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>Career & Industry Readiness</h5>
                        <summary>
                          Exposure to startups, corporates, and real-world
                          problem-solving.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img src="/images/why/industrysolution.webp" />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>Industry Solution Co-Creation</h5>
                        <summary>
                          We partner with industry leaders to co-create
                          AI-powered solutions for real-world challenges.
                        </summary>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row oneStopHub">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="stopHub-content">
              <div className="row">
                <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="breathing-space-left">
                        <span><img src="/images/people/011.jpg" /></span>
                        <span><img src="/images/people/014.jpg" /></span>
                        <span><img src="/images/people/012.jpg" /></span>
                        <h2>One-Stop Hub for</h2>
                        <h1>All Things AI</h1>
                        <button onClick={joinOurCommunity} className="whiteAiJourneyBtn">
                          Join Our Community
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 col-sm-12 col-lg-6 col-xl-6 text-right oneStopBanner"
                >
                  <img src="/images/badgeillustrations/community_web.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row hearListners">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <h4>Hear it from our learners</h4>
            <RandomScroller />
          </div>
        </div>
      </div>
      <PartnerWithUs />
    </div>
  );
};

export default Home;