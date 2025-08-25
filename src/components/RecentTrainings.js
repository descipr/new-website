import React, { useState, useEffect } from "react";
import "../assets/css/RecentTraining.css";

const RecentTrainings = () => {
  const [activeImage, setActiveImage] = useState("egaImg");
  useEffect(() => {
    document.getElementById("egadubai").style.display = "block";
    document.getElementById("homecredit").style.display = "none";
  }, []);

  const showEgaDubai = () => {
    document.getElementById("egadubai").style.display = "block";
    document.getElementById("homecredit").style.display = "none";
    setActiveImage("egaImg");
  };

  const showHomeCredit = () => {
    document.getElementById("homecredit").style.display = "block";
    document.getElementById("egadubai").style.display = "none";
    setActiveImage("homeCreditImg");
  };
  return (
    <div className="row recentTrainings">
      <div className="container">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12 col-xl-8">
              <h4>Our Recent Trainings</h4>
            </div>
            <div
              className="col-12 col-sm-12 col-lg-12 col-xl-4 d-flex align-items-center"
            >
              <h6>
                Empowering diverse teams at leading organizations to harness
                the transformative power of AI.
              </h6>
            </div>
          </div>
          <div className="row additional5rem">
            <div
              className="col-12 col-xl-3 d-flex align-items-center justify-content-center instantPadding"
            >
              <div>
                <a onClick={showEgaDubai}>
                  <img
                    id="egaImg"
                    src="/images/corporate/abroad/egacolor.png"
                    alt="EGA Logo"
                    className={activeImage === "egaImg" ? "active" : ""}
                    style={{ cursor: "pointer" }}
                  />
                </a>
                <a onClick={showHomeCredit}>
                  <img
                    id="homeCreditImg"
                    src={
                      activeImage === "homeCreditImg"
                        ? "/images/corporate/abroad/home_credit_red.png"
                        : "/images/corporate/abroad/home_credit_grey.png"
                    }
                    alt="Home Credit"
                    className={activeImage === "homeCreditImg" ? "active" : ""}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
            </div>

            <div className="col-12 col-xl-9">
              <div className="trainingDetails">
                <div id="egadubai">
                  <div className="row d-flex align-items-center">
                    <div
                      className="col-12 col-xl-8 d-flex flex-column justify-content-center text-left"
                    >
                      <h3>EGA, Dubai: AI for Leaders</h3>
                      <h6>December 2024</h6>
                      <h5>
                        A 2-day intensive interactive workshop, delivered in
                        partnership with Refocus AI, introduced leaders to AI's
                        potential and its revolutionary impact on manufacturing.
                      </h5>
                    </div>
                    <div
                      className="col-12 col-xl-4 d-flex justify-content-xl-end justify-content-center mt-3 mt-xl-0"
                    >
                      <img
                        src="/images/corporate/abroad/EGA.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>

                <div id="homecredit">
                  <div className="row d-flex align-items-center">
                    <div
                      className="col-12 col-xl-8 d-flex flex-column justify-content-center text-left"
                    >
                      <h3>Home Credit: Product & Marketing Analytics</h3>
                      <h6>January 2025</h6>
                      <h5>
                        A 6-week, hands-on program using real-world industry
                        case studies helped Home Credit's data science team
                        redefine their product marketing strategies.
                      </h5>
                    </div>
                    <div
                      className="col-12 col-xl-4 d-flex justify-content-xl-end justify-content-center mt-3 mt-xl-0"
                    >
                      <img
                        src="/images/corporate/abroad/Dubai.png"
                        className="img-fluid"
                      />
                    </div>
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

export default RecentTrainings;