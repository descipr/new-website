import React, { useEffect, useState, useRef } from "react";
import { joinOurCommunity, openWhatsApp, scrollToAiBootcamp } from "../utils/buttonActions";
import WhoThisFor from "../components/WhoIsThisFor";
import ProgramHighlights from "../components/ProgramHighlights";
import BigImageSlider from "../components/BigImageSlider";
import PartnerWithUs from "../components/PartnerWithUs";
import OurMission from "../components/OurMission";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../assets/css/CollegeProp.css";

const College = () => {
  useEffect(() => {
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logos = [
    "/images/companylogo/bangalore_college.webp",
    "/images/companylogo/home_credit.webp",
    "/images/companylogo/amity_university.webp",
    "/images/companylogo/manipal.png",
    "/images/companylogo/1.png",
    "/images/companylogo/2.png",
    "/images/companylogo/3.png",
    "/images/companylogo/4.png",
    "/images/companylogo/5.png",
    "/images/companylogo/6.png",
  ];


  return (
    <div className="container-fluid">
      <div className="row content-space bannerbgwhite">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1 mt-3">
            <div className="row mt-5 align-items-center">
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-6 banner-content mt-5 mb-5"
              >
                <h3>Pratham Labs</h3>
                <h5>AI Campus program by Descipr</h5>
                <article>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-sm-12">
                      <button
                        className="expcurriculum" onClick={scrollToAiBootcamp}>
                        Explore curriculum
                      </button>
                      <button className="partnerwithus" onClick={openWhatsApp}>
                        Partner with us
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 fittingImage">
                <img src="/images/sectionimages/collegebanner.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurMission missionText="To empower college students with AI skills, practical experience, and innovation mindset—transforming them into future-ready AI leaders." />
      <div className="row specialPrograms" id="campuseco">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-8">
                <h4>AI Campus Ecosystem</h4>
              </div>
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-4 d-flex align-items-center"
              >
                <h6>
                  We aim to build a collaborative environment that fosters
                  learning, innovation, and continuous growth in AI.
                </h6>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-2 content-pin">
                <h5>Practical AI Days</h5>
                <h6>
                  Live Classes every month focused on practical AI applications
                </h6>
              </div>
              <div className="col-0 col-sm-0 col-lg-0 col-xl-2"></div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3 content-pin">
                <h5>Research Groups</h5>
                <h6>
                  Infrastructure support for collaboration among students,
                  faculty and industry experts
                </h6>
              </div>
              <div className="col-0 col-sm-0 col-lg-0 col-xl-1"></div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-2 content-pin">
                <h5>Hackathons</h5>
                <h6>
                  Annual AI competition to boost cross campus collaboration
                </h6>
              </div>
              <div className="col-0 col-sm-0 col-lg-0 col-xl-2"></div>
            </div>

            <div className="row mt-5 mb-5 bigarrowcontent">
              <div className="col-12 col-sm-12 col-lg-2 col-xl-2">
                <img src="/images/aicampussection/practicalai.svg" />
              </div>
              <div className="col-12 col-sm-12 col-lg-2 col-xl-2">
                <img src="/images/aicampussection/enterprise.svg" />
              </div>
              <div className="col-12 col-sm-12 col-lg-2 col-xl-2">
                <img src="/images/aicampussection/research.svg" />
              </div>
              <div className="col-12 col-sm-12 col-lg-2 col-xl-2">
                <img src="/images/aicampussection/industry.svg" />
              </div>
              <div className="col-12 col-sm-12 col-lg-2 col-xl-2">
                <img src="/images/aicampussection/hackathons.svg" />
              </div>
              <div className="col-12 col-sm-12 col-lg-2 col-xl-2">
                <img src="/images/aicampussection/industry.svg" />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-0 col-sm-0 col-lg-0 col-xl-1"></div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3 content-pin">
                <h5>Enterprise Use Case</h5>
                <h6>Access to exhaustive collection of industry projects</h6>
              </div>
              <div className="col-0 col-sm-0 col-lg-0 col-xl-1"></div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3 content-pin">
                <h5>Industry Talks</h5>
                <h6>On campus sessions by Industry SME every semester</h6>
              </div>
              <div className="col-0 col-sm-0 col-lg-0 col-xl-1"></div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3 content-pin">
                <h5>Professor Industry Colab</h5>
                <h6>
                  Professors and researchers lead sessions for industry
                  solutions
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhoThisFor />
      <ProgramHighlights />
      <BigImageSlider />

      <div className="row empowerFuture whitebg">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-8">
                <h4>Career Readiness Support</h4>
              </div>
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-4 content-align-mobile"
              >
                <h6>
                  Equipping students with tools for job, research & startup
                  success.
                </h6>
                <button onClick={joinOurCommunity}>Join Our Community</button>
              </div>
            </div>
            <div className="row careersupport">
              <div className="col-sm-12 col-lg-12 col-xl-12">
                <div className="row">
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-3 settingPadding"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <img
                          src="/images/careerreadiness/resume_building.svg"
                        />
                        <h5>Resume Building & Mock Interviews</h5>
                        <summary>
                          Craft job-ready resumes and boost your confidence
                          through mock interviews.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-3 settingPadding"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <img
                          src="/images/careerreadiness/portfolio_githud_support.svg"
                        />
                        <h5>Portfolio & GitHub Support</h5>
                        <summary>
                          Build a strong project portfolio and showcase your
                          work on GitHub.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-3 settingPadding"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <img
                          src="/images/careerreadiness/mentorship_career_guidance.svg"
                        />
                        <h5>Mentorship & Career Guidance</h5>
                        <summary>
                          Receive expert career advice and mentorship from
                          industry leaders.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-3 settingPadding"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <img src="/images/careerreadiness/patentsupport.svg" />
                        <h5>Patent Support</h5>
                        <summary>
                          Get assistance in filing patents for your innovations
                          and ideas.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-3 settingPadding"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <img
                          src="/images/careerreadiness/research_publishing_guidance.svg"
                        />
                        <h5>Research & Publishing Guidance</h5>
                        <summary>
                          Support to convert your research into publishable
                          papers and journals.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-3 settingPadding"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <img
                          src="/images/careerreadiness/startup_mentorship.svg"
                        />
                        <h5>Startup Mentorship</h5>
                        <summary>
                          Build a strong project portfolio and showcase your
                          work on GitHub.
                        </summary>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-3 settingPadding"
                  >
                    <div className="row">
                      <div className="col-12 col-sm-12">
                        <img
                          src="/images/careerreadiness/funding_access.svg"
                        />
                        <h5>Funding Access</h5>
                        <summary>
                          Explore funding networks to turn your ideas into
                          ventures or research grants
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

      <div className="row empowerFuture ultralightgrey">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-8">
                <h4>Community Membership</h4>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                <h5>
                  To unlock and set up the benefits of Pratham Labs on campus, a
                  minimum of 100 Pro subscribers is required
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                <div className="freesubscription">
                  <span>For students</span>
                  <h5>Community</h5>
                  <h1>Free</h1>
                  <h6>
                    Free community resources for continuous learning engagement.
                  </h6>
                  <h6 id="no-bordering">Includes:</h6>
                  <p>Pre-recorded videos</p>
                  <p>Community feed</p>
                  <p>Delayed access to Live Class recording</p>
                  <p>Monthly challenges</p>
                  <p>Intra college hackathons</p>
                  <p>Beginner Enterprise Use case library</p>
                  <button onClick={joinOurCommunity}>Join Our Community</button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                <div className="freesubscription proindividual">
                  <span>Most popular</span>
                  <h5>Pro Individual</h5>
                  <h1>4999<span>/</span><span>year</span></h1>
                  <h6>
                    Enhanced learning with live classes and mentorship support.
                  </h6>
                  <h6 id="no-borderingmid">Everything in community plan +</h6>
                  <p>Live Classes</p>
                  <p>Full access to Use cases library with solutions</p>
                  <p>
                    Interview prep assistance (Resume review, mock interview,
                    Preparation materials)
                  </p>
                  <p>
                    Mentorship for research, product development or Open source
                    projects*
                  </p>

                  <button onClick={joinOurCommunity} className="margin3Top">Subscribe Now</button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                <div className="freesubscription premiumsubscription">
                  <span>Premium</span>
                  <h5>Pratham Labs</h5>
                  <h1>AI Campus</h1>
                  <h6>
                    Dedicated support with Industry collaboration and funding
                    for innovative projects.
                  </h6>
                  <h6 id="no-bordering">Everything in Pro Plan +</h6>
                  <p>On campus Industry SME visits every semester</p>
                  <p>Dedicated product development/research group</p>
                  <p>Professor industry colab</p>
                  <p>Infrastructure support</p>
                  <p>Access to pre-seed funding</p>
                  <p>Assistance in patent filing</p>
                  <button onClick={openWhatsApp}>Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row clientSpot">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row spacetop">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-8">
                <h4>Learning at Descipr</h4>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                <h5>
                  Learners who are building their AI capabilites with us,
                  work/study at
                </h5>
              </div>
            </div>

            {isMobile ? (
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}       // show 2 logos per slide on mobile
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              >
                {logos.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="d-flex justify-content-center align-items-center logoimageHeight">
                      <img src={src} alt={`logo-${i}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // ✅ Desktop/Tablet = your existing Bootstrap grid
              <>
                <div className="row clientsLogo">
                  <div
                    className="col-6 col-sm-6 col-lg-6 col-xl-2 d-flex justify-content-center align-items-center logoimageHeight"
                  >
                    <img src="/images/companylogo/bangalore_college.webp" />
                  </div>
                  <div
                    className="col-6 col-sm-6 col-lg-6 col-xl-2 d-flex justify-content-center align-items-center logoimageHeight"
                  >
                    <img src="/images/companylogo/home_credit.webp" />
                  </div>
                  <div
                    className="col-6 col-sm-6 col-lg-6 col-xl-2 d-flex justify-content-center align-items-center logoimageHeight"
                  >
                    <img src="/images/companylogo/amity_university.webp" />
                  </div>
                  <div
                    className="col-6 col-sm-6 col-lg-6 col-xl-2 d-flex justify-content-center align-items-center logoimageHeight"
                  >
                    <img src="/images/companylogo/manipal.png" />
                  </div>
                  <div
                    className="col-6 col-sm-6 col-lg-6 col-xl-2 d-flex justify-content-center align-items-center logoimageHeight"
                  >
                    <img src="/images/companylogo/1.png" />
                  </div>
                  <div
                    className="col-6 col-sm-6 col-lg-6 col-xl-2 d-flex justify-content-center align-items-center logoimageHeight"
                  >
                    <img src="/images/companylogo/2.png" />
                  </div>
                </div>
                <div className="row clientsLogo">
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-2">
                    <div className="row">
                      <div
                        className="col-6 col-sm-6 col-lg-6 col-xl-3 d-flex justify-content-center align-items-center logoimageHeight"
                      >
                        <img src="/images/companylogo/3.png" />
                      </div>
                      <div
                        className="col-6 col-sm-6 col-lg-6 col-xl-2 d-flex justify-content-center align-items-center logoimageHeight"
                      >
                        <img src="/images/companylogo/4.png" />
                      </div>
                      <div
                        className="col-6 col-sm-6 col-lg-6 col-xl-2 d-flex justify-content-center align-items-center logoimageHeight"
                      >
                        <img src="/images/companylogo/5.png" />
                      </div>
                      <div
                        className="col-6 col-sm-6 col-lg-6 col-xl-3 d-flex justify-content-center align-items-center logoimageHeight"
                      >
                        <img src="/images/companylogo/6.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <PartnerWithUs />
    </div>
  );
};

export default College;
