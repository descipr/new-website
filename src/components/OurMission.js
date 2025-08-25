import React, { useEffect, useState, useRef } from "react";
import "../assets/css/OurMission.css";

const OurMission = ({ missionText }) => {
  const [letters, setLetters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const missionRef = useRef(null);

  const isDesktop = window.innerWidth >= 1100;
  const currentIndexRef = useRef(0);
  const lockedRef = useRef(false);
  const suppressRef = useRef(false);
  const cooldownRef = useRef(false);

  useEffect(() => {
    setLetters(missionText.split(""));
    currentIndexRef.current = 0;
    setCurrentIndex(0);
  }, [missionText]);

  const setIndex = (i) => {
    currentIndexRef.current = i;
    setCurrentIndex(i);
  };

  const processStep = (dir) => {
    if (cooldownRef.current) return;
    cooldownRef.current = true;
    setTimeout(() => (cooldownRef.current = false), 50);

    const len = letters.length;
    const stepSize = 3;
    if (dir > 0) {
      if (currentIndexRef.current < len) {
        setIndex(Math.min(currentIndexRef.current + stepSize, len));
      } else {
        unlockAndScroll();
      }
    } else {
      if (currentIndexRef.current > 0) {
        setIndex(Math.max(currentIndexRef.current - stepSize, 0));
      } else {
        unlockAndScroll(true);
      }
    }
  };

  const unlockAndScroll = (scrollUp = false) => {
    lockedRef.current = false;
    suppressRef.current = true;

    const missionSection = missionRef.current?.parentElement?.parentElement;
    const nextSection = missionSection?.nextElementSibling;
    const target = scrollUp ? missionSection?.previousElementSibling : nextSection;

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
      suppressRef.current = false;
    }, 900);
  };

  // Mouse scroll handler
  useEffect(() => {
    if (!isDesktop) return;

    // window.addEventListener("wheel", handleWheel, { passive: false });
    return;
  }, [letters, isDesktop]);

  // Keyboard handler
  useEffect(() => {
    if (!isDesktop) return;

    const onKey = (e) => {
      if (suppressRef.current || !lockedRef.current) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        processStep(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        processStep(-1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [letters, isDesktop]);

  return (
    <div className="row ourmission" ref={missionRef}>
      <div className="container">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
          <h5><img src="/images/mission/mission.svg" alt="mission" /> Our Mission</h5>
          <h3 id="mission-text" aria-hidden="false">
            {letters.map((ch, i) => (
              <span
                key={i}
                style={{
                  color: isDesktop
                    ? i < currentIndex
                      ? "#ffffff"
                      : "#ffffff"
                    : "#ffffff",
                  transition: isDesktop ? "color 0.18s linear" : "none",
                  whiteSpace: ch === " " ? "pre" : "normal",
                }}
              >
                {ch}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OurMission;