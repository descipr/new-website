import React, { useState } from "react";
import { openWhatsApp } from "../utils/buttonActions";
import { useLocation } from "react-router-dom";
import "../assets/css/PartnerWithUs.css";

const PartnerWithUs = () => {
  const location = useLocation();

  const isContactPage =
    location.pathname === "/" || location.pathname === "/college";
  const buttonLabel = isContactPage ? "Contact Us" : "Partner with us";

  return (
    <div className="row readyAI">
      <div className="container">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
              <div className="readyContent">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Are You Ready to Elevate Your AI Journey?</h4>
                    <button type="button" onClick={openWhatsApp}>
                      {buttonLabel}
                    </button>
                  </div>
                  <div className="col-sm-6 contactIllustrate">&nbsp;</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-12 col-xl-6">
              <div className="downloadapp">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Download our descipr community app</h4>
                    <img src="/images/badgeillustrations/apple_badge.webp" />
                    <img
                      src="/images/badgeillustrations/playstore_badge.webp"
                      id="playstoreimg"
                    />
                  </div>
                  <div className="col-sm-6 desciprappmob">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;