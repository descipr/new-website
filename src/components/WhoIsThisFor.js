import React, { useState } from "react";
import "./WhoThisFor.css";

const WhoThisFor = () => {
  const content = {
    students: {
      text: [
        "Hands-On AI Learning",
        "Career Acceleration",
        "Industry & Startup Exposure",
        "Product Development Guidance",
        "Research & Paper Writing",
      ],
      img: "/images/who/schoolimg.png",
    },
    professors: {
      text: [
        "AI in Curriculum",
        "AI Research Guidance",
        "Industry Collaboration",
        "Workshops & Training",
      ],
      img: "/images/who/professor.png",
    },
    institutions: {
      text: [
        "AI Lab Setup",
        "Collaborative Projects",
        "Faculty Development",
        "Student Placements",
      ],
      img: "/images/who/collegeimg.png",
    },
  };

  const [activeTab, setActiveTab] = useState("students");

  return (
    <div className="row programFor">
      {/* Left side: Tabs */}
      <div className="col-12 col-sm-12 col-lg-12 col-xl-6 whothisfor-left">
        <h3>Who is this for?</h3>
        {Object.keys(content).map((key) => (
          <a
            key={key}
            href="#!"
            className={activeTab === key ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(key);
            }}
          >
            {activeTab === key && <i className="bi bi-arrow-right"></i>}{" "}
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}
      </div>

      {/* Right side: Text + Image */}
      <div className="col-12 col-sm-12 col-lg-12 col-xl-6 whothisfor-right contentPaddingRight d-flex align-items-center">
        <div className="who-text" style={{ flex: "1" }}>
          {content[activeTab].text.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="who-img" style={{ flexShrink: "0", marginRight: "4rem" }}>
          <img
            src={content[activeTab].img}
            alt={activeTab}
            className="who-image"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoThisFor;