import React, { useState } from "react";
import { joinOurCommunity, openWhatsApp, scrollToProducts } from "../utils/buttonActions";
import "../assets/css/CustomTraining.css";

const CustomizedTraining = () => {
  return (
    <div className="row infographicdata">
        <div className="container">
          <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                <h4>Get customized training in just 2 weeks</h4>
              </div>
            </div>
            <div className="row numericsteps d-none d-xl-flex">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3">
                <img src="/images/corporate/steps/1.svg" />
                <hr style={{'color': '#ffffff'}} />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3">
                <img src="/images/corporate/steps/2.svg" />
                <hr style={{'color': '#ffffff'}} />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3">
                <img src="/images/corporate/steps/3.svg" />
                <hr style={{'color': '#ffffff'}} />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-3">
                <img src="/images/corporate/steps/4.svg" />
                <hr style={{'color': '#ffffff'}} />
              </div>
            </div>
            <div className="row numericstepscontent d-none d-xl-flex">
              <div className="col-md-3 d-flex flex-column">
                <h5>Discovery Call</h5>
                <h6>Quickly assess your training needs</h6>
              </div>
              <div className="col-md-3 d-flex flex-column">
                <h5>Tailored Curriculum</h5>
                <h6>
                  Choose from 150+ workshop variations or request one tailored
                  to your industry, function, tools, and goals
                </h6>
              </div>
              <div className="col-md-3 d-flex flex-column">
                <h5>Expert Match</h5>
                <h6>
                  Experienced instructors handpicked from our network of 50+
                  vetted experts.
                </h6>
              </div>
              <div className="col-md-3 d-flex flex-column">
                <h5>Fast, Scalable Launch</h5>
                <h6>
                  Training is ready to begin in 2 weeks, supporting multiple
                  batches concurrently
                </h6>
              </div>
            </div>

            <ol className="d-block d-xl-none px-3">
              <li>
                <h5>Discovery Call</h5>
                <h6>Quickly assess your training needs</h6>
              </li>
              <li>
                <h5>Tailored Curriculum</h5>
                <h6>
                  Choose from 150+ workshop variations or request one tailored
                  to your industry, function, tools, and goals
                </h6>
              </li>
              <li>
                <h5>Expert Match</h5>
                <h6>
                  Experienced instructors handpicked from our network of 50+
                  vetted experts.
                </h6>
              </li>
              <li>
                <h5>Fast, Scalable Launch</h5>
                <h6>
                  Training is ready to begin in 2 weeks, supporting multiple
                  batches concurrently
                </h6>
              </li>
            </ol>
            <div className="row d-none d-md-flex">
              <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                <div className="accordion-wrapper">
                  <div className="acc-head">
                    See How does customization work?&nbsp;
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <div className="acc-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                        <div className="discoveryblock">
                          <h3>Discovery</h3>
                          <div className="discoverContent discoveryindustry">
                            <div className="row d-flex align-items-center">
                              <div
                                className="col-5 col-sm-5 col-lg-5 col-xl-6 text600"
                              >
                                Goal
                              </div>
                              <div className="col-7 col-sm-7 col-lg-7 col-xl-6">
                                Upskilling DS team on GenAI
                              </div>
                            </div>
                          </div>
                          <div className="discoverContent discoveryindustry">
                            <div className="row d-flex align-items-center">
                              <div
                                className="col-5 col-sm-5 col-lg-5 col-xl-6 text600"
                              >
                                Industry
                              </div>
                              <div className="col-7 col-sm-7 col-lg-7 col-xl-6">
                                Financial Services
                              </div>
                            </div>
                          </div>
                          <div className="discoverContent discoveryindustry">
                            <div className="row d-flex align-items-center">
                              <div
                                className="col-5 col-sm-5 col-lg-5 col-xl-6 text600"
                              >
                                Focussed area
                              </div>
                              <div className="col-7 col-sm-7 col-lg-7 col-xl-6">
                                Customer services
                              </div>
                            </div>
                          </div>
                          <div className="discoverContent discoveryindustry">
                            <div className="row d-flex align-items-center">
                              <div
                                className="col-5 col-sm-5 col-lg-5 col-xl-6 text600"
                              >
                                Customer services
                              </div>
                              <div className="col-7 col-sm-7 col-lg-7 col-xl-6">
                                <ul>
                                  <li>Longchain</li>
                                  <li>OpenAI</li>
                                  <li>API Azure</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                        <div className="designblock">
                          <h3>Design</h3>
                          <div className="discoverContent expertshandpick">
                            <div className="row d-flex align-items-center">
                              <div
                                className="col-12 col-sm-12 col-lg-12 col-xl-12 text600"
                              >
                                Experts handpicked matching the requirements
                              </div>
                            </div>
                          </div>
                          <div className="discoverContent">
                            <div className="row d-flex align-items-center">
                              <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                                <h5>Descipr Proprietary curriculum Engine</h5>
                                <ul>
                                  <li>
                                    Battle-tested delivery frameworks by
                                    experts.
                                  </li>
                                  <li>Reusable Artifacts.</li>
                                  <li>
                                    Iterative improvements from past feedback.
                                  </li>
                                  <li>
                                    AI-powered content preparation. Library of
                                    solved enterprise-relevant case studies.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-lg-12 col-xl-4">
                        <div className="deliveryblock">
                          <h3>Delivery</h3>
                          <div className="discoverContent delivery-padding">
                            <div className="row d-flex align-items-center">
                              <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                                <h5>Customer Chatbot development</h5>
                                <ul>
                                  <li>Level - Beginner</li>
                                  <li>
                                    Key Concepts - Prompt engineering, RAG
                                    architecture
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="discoverContent delivery-padding">
                            <div className="row d-flex align-items-center">
                              <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                                <h5>Call transcript analysis for cross sell</h5>
                                <ul>
                                  <li>Level - Intermediate</li>
                                  <li>
                                    Key Concepts - Vector DB, Few shot learning,
                                    Distillation
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="discoverContent delivery-padding">
                            <div className="row d-flex align-items-center">
                              <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                                <h5>Automated call quality evaluation</h5>
                                <ul>
                                  <li>Level - Advanced</li>
                                  <li>
                                    Key Concepts - AI agents, LLM Finetuning,
                                    LLM Evals
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={openWhatsApp}>Let's Discuss</button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="swiper discoverSwiper d-md-none">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="discoveryblock">
                    <h3>Discovery</h3>
                    <div className="discoverContent discoveryindustry">
                      <div className="row d-flex align-items-center">
                        <div className="col-5 col-sm-5 col-lg-5 col-xl-6 text600">
                          Goal
                        </div>
                        <div className="col-7 col-sm-7 col-lg-7 col-xl-6">
                          Upskilling DS team on GenAI
                        </div>
                      </div>
                    </div>
                    <div className="discoverContent discoveryindustry">
                      <div className="row d-flex align-items-center">
                        <div className="col-5 col-sm-5 col-lg-5 col-xl-6 text600">
                          Industry
                        </div>
                        <div className="col-7 col-sm-7 col-lg-7 col-xl-6">
                          Financial Services
                        </div>
                      </div>
                    </div>
                    <div className="discoverContent discoveryindustry">
                      <div className="row d-flex align-items-center">
                        <div className="col-5 col-sm-5 col-lg-5 col-xl-6 text600">
                          Focussed area
                        </div>
                        <div className="col-7 col-sm-7 col-lg-7 col-xl-6">
                          Customer services
                        </div>
                      </div>
                    </div>
                    <div className="discoverContent discoveryindustry">
                      <div className="row d-flex align-items-center">
                        <div className="col-5 col-sm-5 col-lg-5 col-xl-6 text600">
                          Customer services
                        </div>
                        <div className="col-7 col-sm-7 col-lg-7 col-xl-6">
                          <ul>
                            <li>Longchain</li>
                            <li>OpenAI</li>
                            <li>API Azure</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="designblock">
                    <h3>Design</h3>
                    <div className="discoverContent expertshandpick">
                      <div className="row d-flex align-items-center">
                        <div
                          className="col-12 col-sm-12 col-lg-12 col-xl-12 text600"
                        >
                          Experts handpicked matching the requirements
                        </div>
                      </div>
                    </div>
                    <div className="discoverContent">
                      <div className="row d-flex align-items-center">
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                          <h5>Descipr Proprietary curriculum Engine</h5>
                          <ul>
                            <li>
                              Battle-tested delivery frameworks by experts.
                            </li>
                            <li>Reusable Artifacts.</li>
                            <li>Iterative improvements from past feedback.</li>
                            <li>
                              AI-powered content preparation. Library of solved
                              enterprise-relevant case studies.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="deliveryblock">
                    <h3>Delivery</h3>
                    <div className="discoverContent delivery-padding">
                      <div className="row d-flex align-items-center">
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                          <h5>Customer Chatbot development</h5>
                          <ul>
                            <li>Level - Beginner</li>
                            <li>
                              Key Concepts - Prompt engineering, RAG
                              architecture
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="discoverContent delivery-padding">
                      <div className="row d-flex align-items-center">
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                          <h5>Call transcript analysis for cross sell</h5>
                          <ul>
                            <li>Level - Intermediate</li>
                            <li>
                              Key Concepts - Vector DB, Few shot learning,
                              Distillation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="discoverContent delivery-padding">
                      <div className="row d-flex align-items-center">
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                          <h5>Automated call quality evaluation</h5>
                          <ul>
                            <li>Level - Advanced</li>
                            <li>
                              Key Concepts - AI agents, LLM Finetuning, LLM
                              Evals
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="letsDiscussBtn" onClick={openWhatsApp}>Let's Discuss</button>
            </div> */}
          </div>
        </div>
      </div>
  );
};

export default CustomizedTraining;