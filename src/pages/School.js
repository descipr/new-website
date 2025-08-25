import React, { useEffect, useState, useRef } from "react";
import { joinOurCommunity, openWhatsApp, scrollToSchool, scrollToCollege } from "../utils/buttonActions";
import PartnerWithUs from "../components/PartnerWithUs";
import OurMission from "../components/OurMission";
import { } from "../utils/buttonActions";
import "../assets/css/SchoolProp.css";

const School = () => {
  const [activeStage, setActiveStage] = useState(1);
  const isDesktop = window.innerWidth >= 1100;
  return (
    <div className="container-fluid">
      <div className="row globalDiv bannerwhite">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1 mt-3">
            <div className="row mt-5 align-items-center">
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-6 banner-content mt-5 mb-5"
              >
                <h3>Descipr AI Bootcamp for Schools</h3>
                <h5>Turning Curiosity into Creation. One Student at a Time</h5>
                <article>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-sm-12">
                      <button className="expcurriculum" onClick={scrollToSchool}>
                        Explore curriculum
                      </button>

                      <button className="partnerwithus" onClick={scrollToCollege}>
                        Bring AI Bootcamp to our School
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6 fittingImage">
                <img src="/images/sectionimages/School_image.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurMission missionText="To spark excitement for AI in school children, nurture their creativity, and empower them to solve everyday challenges using technology—transforming them into AI Changemakers." />
      <div className="row programHighlights" id="campuseco">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-8">
                <h4>Our AI Bootcamp Program</h4>
              </div>
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-4 d-flex align-items-center"
              >
                <h6>
                  A two-stage journey that takes students from AI exploration to
                  becoming real AI Changemakers.
                </h6>
              </div>
            </div>
            <div className="row mt-5">
              <div
                className="col-12 col-sm-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3"
              >
                <div className="optionTabs d-flex justify-content-between">

                  <div
                    className={`tab ${activeStage === 1 ? "activeTab" : ""}`}
                    onClick={() => setActiveStage(1)}
                  >
                    <img src="/images/mission/mission.svg" alt="" /> Stage 1
                  </div>
                  <div
                    className={`tab ${activeStage === 2 ? "activeTab" : ""}`}
                    onClick={() => setActiveStage(2)}
                  >
                    <img src="/images/mission/mission.svg" alt="" /> Stage 2
                  </div>
                </div>
              </div>
              {activeStage === 1 && (
                <div className="col-12 col-sm-12 col-lg-12 col-xl-12 foundationlevel" id="stageContent1">
                  <span>10-Day Bootcamp</span>
                  <span>30 mins/day</span>
                  <span>In Vernacular Language</span>
                  <span>After School Classes</span>
                  <h4>AI is Your Superpower</h4>
                  <p>An engaging, hands-on program where students explore AI through fun activities and creative challenges.</p>
                  <section>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                        <h3>Week 1</h3>
                        <h2>Student Program Highlights</h2>
                        <div className="row marginGap align-items-center">
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 1</p>
                            <article>
                              AI Around Us – Explore how YouTube, Face ID & Google
                              use AI
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 2</p>
                            <article>
                              ChatGPT is Your Buddy – Rap songs, ghost stories &
                              homework hacks
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 3</p>
                            <article>
                              Creativity with Canva AI – Make logos, memes, &
                              posters
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 4</p>
                            <article>
                              Storytelling with AI – Create video ads for your
                              school using InVideo
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 5</p>
                            <article>
                              AI Quiz Show! – Kahoot game on “AI or Not AI?”
                            </article>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12 col-sm-12 col-lg-12 col-xl-6 secondSection"
                      >
                        <h3>Week 2</h3>
                        <h2>AI Ideathon (Innovation in Action)</h2>
                        <div className="row marginGap align-items-center">
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 6</p>
                            <article>Brainstorm daily problems</article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 7</p>
                            <article>Match problems with AI tools</article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 8</p>
                            <article>Build your no-code AI prototype</article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 9</p>
                            <article>Pitch your idea at “AI Shark Tank”</article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Day 10</p>
                            <article>
                              Graduation + Showcase (Awards & Certificates)
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="parallelTeacherProg">
                    <h3>45 mins/day</h3>
                    <h2>Parallel Teacher Program</h2>
                    <p>
                      Empowering teachers to use AI for teaching, planning, and
                      automation
                    </p>
                    <article>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                          <div className="box-model-purple">
                            <h5>Lesson Planning</h5>
                            <h6>
                              ChatGPT for quizzes, lesson plans, infographics
                            </h6>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                          <div className="box-model-purple">
                            <h5>Assessment Automation</h5>
                            <h6>Use AI to grade essays and quizzes</h6>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                          <div className="box-model-purple">
                            <h5>Student Engagement</h5>
                            <h6>AI video creation, Kahoot-based learning</h6>
                          </div>
                        </div>
                      </div>
                      <div className="row vertGap">
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                          <div className="box-model-purple">
                            <h5>Content Creation & Research</h5>
                            <h6>
                              Use Perplexity, ChatGPT, and InVideo for reports
                            </h6>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                          <div className="box-model-purple">
                            <h5>Bonus</h5>
                            <h6>
                              Teacher training to judge the AI Ideathon + mentor
                              students
                            </h6>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                  <button className="bringAIBootcamp" onClick={openWhatsApp}>
                    Bring AI Bootcamp to our School
                  </button>
                </div>
              )}
              {activeStage === 2 && (
                <div className="col-12 col-sm-12 col-lg-12 col-xl-12 foundationlevel" id="stageContent2">
                  <span>12 Months</span>
                  <span>1 Touchpoint/Month</span>
                  <span>1 Hour Each</span>
                  <h4>AI Changemakers - Year-Long Mentorship</h4>
                  <p>A structured program to help students identify real problems and build AI-powered solutions.</p>
                  <section>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                        <h2>Month-wise Journey</h2>
                        <div className="row marginGap align-items-center">
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Month 1-2</p>
                            <article>
                              Problem discovery + Research using ChatGPT & Perplexity
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Month 3-4</p>
                            <article>
                              AI Tool exploration + Paper prototyping
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Month 5-6</p>
                            <article>
                              Build simple AI prototypes (Teachable Machine, ChatGPT API, Google Sheets AI)
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Month 7-8</p>
                            <article>
                              Build simple AI prototypes (Teachable Machine, ChatGPT API, Google Sheets AI)
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Month 9-10</p>
                            <article>
                              Final Project + AI Innovation Showcase
                            </article>
                          </div>
                          <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <p className="day-label">Month 11-12</p>
                            <article>
                              Learn how to scale the idea, pitch to mentors and explore AI careers
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <button className="bringAIBootcamp" onClick="openWhatsApp()">
                    Bring AI Bootcamp to our School
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row curriculamFramework lightgreybg" id="curriculum">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
                <h4>Curriculum Framework</h4>
              </div>
              <div
                className="col-12 col-sm-12 col-lg-12 col-xl-6 content-align-mobile"
              >
                <h6>
                  The curriculum is case-based, contextual, and
                  exploratory—aligned to the cognitive level of school students,
                  while drawing inspiration from real-world use cases. We
                  simplify AI to make it accessible and exciting, rather than
                  intimidating.
                </h6>
              </div>
            </div>
            <div className="row curriculumFrame">
              <div className="col-sm-12 col-lg-12 col-xl-6 text-right pad-right">
                <img src="/images/curriculum/girlraise.jpg" />
              </div>
              <div className="col-sm-12 col-lg-12 col-xl-6">
                <h5>Key learning outcomes:</h5>
                <div className="row">
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-6 curriculum_column_padding"
                  >
                    <img src="/images/curriculum/introduction_ai.svg" />
                    <h6>
                      Introduction to AI tools: ChatGPT, Canva AI, InVideo,
                      Teachable Machine
                    </h6>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-6 curriculum_column_padding"
                  >
                    <img src="/images/curriculum/pattern_recognition.svg" />
                    <h6>Pattern recognition and logical reasoning</h6>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-6 curriculum_column_padding"
                  >
                    <img src="/images/curriculum/nocode_ai.svg" />
                    <h6>No-code AI prototyping</h6>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-6 curriculum_column_padding"
                  >
                    <img src="/images/curriculum/ai_storytelling.svg" />
                    <h6>AI in storytelling, creativity, and problem-solving</h6>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-6 curriculum_column_padding"
                  >
                    <img src="/images/curriculum/ethical_ai.svg" />
                    <h6>Ethical AI, data privacy, and responsible usage</h6>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-6 col-xl-6 curriculum_column_padding"
                  >
                    <img src="/images/curriculum/careerpath_ai.svg" />
                    <h6>Career paths in AI for school students</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row valueforeveryone">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-8 col-xl-8">
                <h4>Value For Everyone</h4>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 col-xl-4">
                <h6>Stakeholder What They Gain</h6>
              </div>
            </div>
            <div className="row activespace">
              <div className="col-12 col-sm-12 col-lg-6 col-xl-3">
                <div className="aiforall">
                  <div className="row">
                    <div
                      className="col-12 col-sm-12 col-lg-12 col-xl-12 text-center"
                    >
                      <img src="/images/valueveryone/student01.png" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                    <h5>Students</h5>
                    <h6>
                      Fun, hands-on AI learning, creativity, collaboration,
                      entrepreneurial thinking, public speaking
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-6 col-xl-3">
                <div className="aiforall">
                  <div className="row">
                    <div
                      className="col-12 col-sm-12 col-lg-12 col-xl-12 text-center"
                    >
                      <img src="/images/valueveryone/teachers.png" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                    <h5>Teachers</h5>
                    <h6>
                      AI tools for automation, better engagement, mentorship
                      role, future-ready skills
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-6 col-xl-3">
                <div className="aiforall">
                  <div className="row">
                    <div
                      className="col-12 col-sm-12 col-lg-12 col-xl-12 text-center"
                    >
                      <img src="/images/valueveryone/principal.png" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                    <h5>Principals</h5>
                    <h6>
                      Positioning as an AI-Ready School, eligibility for
                      recognition & funding
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-6 col-xl-3">
                <div className="aiforall">
                  <div className="row">
                    <div
                      className="col-12 col-sm-12 col-lg-12 col-xl-12 text-center"
                    >
                      <img src="/images/valueveryone/mentor.png" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                    <h5>Mentors</h5>
                    <h6>
                      Visibility, personal branding, impactful mentorship
                      opportunities
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row oneStopHub communityMembers">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="stopHub-content">
              <div className="row">
                <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
                  <div className="row">
                    <div className="col-sm-12 breathing-space-left">
                      <span><img src="/images/people/011.jpg" /></span>
                      <span><img src="/images/people/014.jpg" /></span>
                      <span><img src="/images/people/012.jpg" /></span>
                      <h5>Community Membership</h5>
                      <h6>
                        By joining Descipr’s AI School Ecosystem, schools gain
                        access to
                      </h6>
                      <div className="spacetop">
                        <p>National AI student community</p>
                        <p>Monthly showcase of student innovations</p>
                        <p>Live Q&As with industry mentors</p>
                        <p>AI student-alumni network</p>
                        <p>Access to Descipr’s AI resources and updates</p>
                      </div>
                      <button onClick={joinOurCommunity}>Join Our Community</button>
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
      <div className="row careerreadysupport">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-8">
                <h4>Career Readiness Support</h4>
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                <h6>
                  While school students are far from job-seeking age, we plant
                  the seeds of curiosity and career possibilities. Through
                  storytelling, live interactions with professionals, and
                  project showcases.
                </h6>
              </div>
            </div>

            <div className="row future-content">
              <div className="col-sm-12 col-lg-12 col-xl-12">
                <div className="row">
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img src="/images/careerreadiness/early careere.svg" />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>Students learn about AI careers early</h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img src="/images/careerreadiness/exposure.svg" />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>
                          Exposure to freelance gigs, entrepreneurship, and
                          product building
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-12 col-lg-12 col-xl-4 settingPadding"
                  >
                    <div className="row">
                      <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                        <img
                          src="/images/careerreadiness/future intersnhip.svg"
                        />
                      </div>
                      <div className="col-10 col-sm-10 col-lg-11 col-xl-10">
                        <h5>
                          Unlock future internships, scholarships, and advanced
                          learning
                        </h5>
                      </div>
                    </div>
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

export default School;
