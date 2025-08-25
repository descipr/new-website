import React, { useState } from "react";
import "../assets/css/ProgramHighlights.css";

const ProgramHighlights = () => {
  const data = {
    foundation: {
      title: "Foundation Level",
      desc: "Building the essential skills for AI understanding",
      content: [
        "Data Analytics with Excel",
        "Python & SQL Basics",
        "ML Foundations",
        "Introduction to NLP & Neural Networks",
        "Prompt Engineering & LLMs",
      ],
    },
    intermediate: {
      title: "Intermediate Level",
      desc: "Deepening knowledge and practical applications",
      content: [
        "Deep Learning",
        "Transformers and Tokenization",
        "Github, Langchain, CrewAI",
        "Vector Databases",
        "Case Studies on AI Business",
      ],
    },
    advanced: {
      title: "Advanced Level",
      desc: "Building the essential skills for AI understanding",
      content: [
        "RAG, GraphRAG",
        "Multi-Agent Systems",
        "LLM Ops, PEFT, LoRA, QLoRA",
        "AI Product Thinking",
        "Research & Innovation Challenges",
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("foundation");

  return (
    <div className="row programHighlights" id="campuseco">
      <div className="container">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12 col-xl-8">
              <h4>Program Highlights</h4>
            </div>
            <div className="col-12 col-sm-12 col-lg-12 col-xl-4 d-flex align-items-center">
              <h6>
                Our curriculum is designed to take learners from foundational
                concepts to advanced AI applications, delivered through a
                blend of pre-recorded videos and live sessions.
              </h6>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-sm-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
              <div className="optionTabs d-flex justify-content-between">
                <div
                  className={`tab ${activeTab === "foundation" ? "activeTab" : ""}`}
                  onClick={() => setActiveTab("foundation")}
                >
                  Foundation
                </div>
                <div
                  className={`tab ${activeTab === "intermediate" ? "activeTab" : ""}`}
                  onClick={() => setActiveTab("intermediate")}
                >
                  Intermediate
                </div>
                <div
                  className={`tab ${activeTab === "advanced" ? "activeTab" : ""}`}
                  onClick={() => setActiveTab("advanced")}
                >
                  Advanced
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-12 col-xl-12 foundationlevel">
              <h4
                id="levelTitle"
                className={
                  activeTab === "foundation"
                    ? "foundation-icon"
                    : activeTab === "intermediate"
                      ? "intermediate-icon"
                      : "advanced-icon"
                }
              >
                {data[activeTab].title}
              </h4>
              <p id="levelDesc">{data[activeTab].desc}</p>
            </div>

            <div
              className="col-12 col-sm-12 col-lg-12 col-xl-12 foundationcontent"
              id="levelContent"
            >
              {data[activeTab].content.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;