import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../assets/css/OurTeamMembers.css";

import tanoyImg from "../assets/images/ourTeam/tanoyy.jpg";
import srinivasanImg from "../assets/images/ourTeam/srinivasanbalaji.jpg";
import sameerImg from "../assets/images/ourTeam/sameerdubey.jpg";
import ankitaImg from "../assets/images/ourTeam/ankitakundu.jpg";
import manishImg from "../assets/images/ourTeam/manishsinha.jpg";
import vasuImg from "../assets/images/ourTeam/vasubhasin.jpg";
import rohanImg from "../assets/images/ourTeam/rohanlal.jpg";
import kshitijImg from "../assets/images/ourTeam/kshitizjha.jpg";
import atulImg from "../assets/images/ourTeam/atulanand.jpg";

const teamMembers = [
    {
        name: "Tanoy Dewanjee",
        linkedin: "https://www.linkedin.com/in/tanoydewanjee/",
        image: tanoyImg
    },
    {
        name: "Srinivasan Balaji",
        linkedin: "https://www.linkedin.com/in/srinivasan-balaji-912364b6/",
        image: srinivasanImg
    },
    {
        name: "Sameer Dubey",
        linkedin: "https://www.linkedin.com/in/sameerz/",
        image: sameerImg
    },
    {
        name: "Ankita Kundu",
        linkedin: "https://www.linkedin.com/in/ankita-kundu-2a50ba66/",
        image: ankitaImg
    },
    {
        name: "Manish Sinha",
        linkedin: "https://www.linkedin.com/in/manishsinha1bittu/",
        image: manishImg
    },
    {
        name: "Vasu Bhasin",
        linkedin: "https://www.linkedin.com/in/vasubhasin/",
        image: vasuImg
    },
    {
        name: "Rohan Lal Das",
        linkedin: "https://www.linkedin.com/in/rohanld/",
        image: rohanImg
    },
    {
        name: "Kshitij Jha",
        linkedin: "https://www.linkedin.com/in/kshitijjha/",
        image: kshitijImg
    },
    {
        name: "Atul Anand",
        linkedin: "https://www.linkedin.com/in/atul-anand-6075bb58/",
        image: atulImg
    },
];

const OurTeam = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 800);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="row ourteam">
            <div className="container">
                <div className="col-12 col-sm-12 col-lg-12 col-xl-10 offset-xl-1">
                    <div className="row">
                        <div className="col-12">
                            <h4>Our Team</h4>
                        </div>
                    </div>

                    {/* ✅ Mobile = Swiper */}
                    {isMobile ? (
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            className="team-swiper"
                        >
                            {teamMembers.map((member, i) => (
                                <SwiperSlide key={i}>
                                    <article className="text-center" style={{ padding: "20px" }}>
                                        <div
                                            style={{
                                                width: "360px",
                                                height: "380px",
                                                borderRadius: "12px",
                                                overflow: "hidden",
                                                position: "relative",
                                            }}
                                        >
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />

                                            <div
                                                style={{
                                                    position: "absolute",
                                                    bottom: "15px",
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    background: "#fff",
                                                    padding: "15px",
                                                    borderRadius: "5px",
                                                    width: "calc(100% - 80px)",
                                                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                }}
                                            >
                                                <label style={{ margin: 0, fontWeight: "500" }}>{member.name}</label>
                                                <a href={member.linkedin} target="_blank" rel="noreferrer">
                                                    <img
                                                        src="/images/socialmedia/linkedin_blue.svg"
                                                        alt="LinkedIn"
                                                        style={{ width: "20px", height: "20px" }}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="row">
                            {teamMembers.map((member, i) => (
                                <div
                                    key={i}
                                    className={`col-12 col-lg-4 col-xl-2 ${i === 6 ? "offset-xl-3" : ""}`}
                                >
                                    <article>
                                        <div className="card-content">
                                            <div className="top-row">
                                                <label>{member.name}</label>
                                                <a href={member.linkedin} target="_blank" rel="noreferrer">
                                                    <img src="/images/socialmedia/linkedin_blue.svg" alt="LinkedIn" />
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
