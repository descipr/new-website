import React, { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Bibhuti Jha",
    image: "/images/people/bibhuti.jpeg",
    content:
      "Attending the bootcamp was great learning. Highly recommended for anyone looking to accelerate their career in AI/Data Science.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7213443197241286656/?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7213443197241286656%2C7226886405719777280%29",
  },
  {
    name: "Suryansh Abhijit",
    image: "/images/people/suryansh.jpeg",
    content:
      "Attended the very first workshop of the cohort, the sessions were very insightful and interactive. Descipr did a fantastic job with introducing the business aspect of different industries and how data analytics actually helps businesses in real life, something that is not much talked upon, and the 1:1 mentorship is just a cherry on the top.",
    link:
      "https://www.linkedin.com/posts/suryansh-abhijit-29318a181_powerhour-activity-7202745454093082624-PNHX/",
  },
  {
    name: "Koushik Mitra",
    image: "/images/people/koushikmitra.jpeg",
    content:
      "IMy heartfelt gratitude to the entire team. I feel extremely lucky to be a part of Descipr.The sessions which I have attended, are the best so far.As I have got a thorough understanding of domains and its areas related to analysis.Looking forward to more amazing sessions.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235298945701208064%29",
  },
  {
    name: "Samiksha Gebise",
    image: "/images/people/samiksha.jpeg",
    content:
      "I want to express my sincere gratitude to the entire Descipr team for conducting this incredible Cohort. A special thank you to Tanoy Sir for his outstanding sessions. This cohort has truly helped me explore and develop my thinking abilities in new and diverse ways.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235259291165716480%29",
  },
  {
    name: "Gaurav Kumar",
    image: "/images/people/gaurav.jpeg",
    content:
      "Thank you for the insightful session, Tanoy Dewanjee! The case study shared was incredibly informative and address real-world problems. It provided valuable practical knowledge.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7203123434413776896%29",
  },
  {
    name: "Sampath Vinayak",
    image: "/images/people/sampath.jpeg",
    content:
      "It was an amazing session, very informative and full of insights by Tanoy Dewanjee. Thanks for the STAR method and the real world case studies.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7203396111527538689%29",
  },
  {
    name: "Farzand Khan",
    image: "/images/people/farzand.jpeg",
    content:
      "I got a chance to be a part of amazing online community where industry experts discuss case studies on analytic solutions across various industries. It's a fantastic platform for brainstorming and learning. If you're interested in participating or just want to gain some insights, I highly recommend checking out Descipr.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7197913173914472448/",
  },
  {
    name: "Debjani Majumdar",
    image: "/images/people/debjanimajumdar.jpeg",
    content:
      "I would like to thank to team Descipr for arranging some engaging sessions. It helped me to enhance my knowledge and drive my interest more into data science. I am happy be a part of this team and quite hopeful to become a contributor in future.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235218954296705025%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235218954296705025%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    name: "Pranoy Dewanjee",
    image: "/images/people/pranoydewanjee.jpeg",
    content:
      "I want to extend a big thank you to the entire Descipr team for organizing this incredible cohort. It has been a truly enriching journey for me. I’m grateful for the support and would love to continue being involved with the Descipr community. Looking forward to staying connected.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235184559074525184%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235184559074525184%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    name: "Srishti Shikha",
    image: "/images/people/srishti.jpeg",
    content:
      "Engaging content, expert guidance, and insights into a hiring manager s perspective made the session outstanding.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7211084994981560320/?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7211084994981560320%2C7226887320233242626%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287226887320233242626%2Curn%3Ali%3AugcPost%3A7211084994981560320%29",
  },
  {
    name: "Lochan Raj",
    image: "/images/people/lochan.jpeg",
    content:
      "It was an information session given by Tanoy Dewanjee and the Descipr team. Thank you for sharing insights regarding the 3 P's and case studies.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7202708895214047232%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287202708895214047232%2Curn%3Ali%3Aactivity%3A7202704501504368641%29",
  },
  {
    name: "Charu Goyal",
    image: "/images/people/charugoyal.jpeg",
    content:
      "I want to thank to the entire Descipr team for taking such wonderful initiatives and arranging the sessions. Would like to extend a big thank you to Srinivasan B for taking a detailed session on AB testing. It really helped me in gaining valuable insights and having a detailed understanding of the concepts & business problems.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7202708895214047232%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287202708895214047232%2Curn%3Ali%3Aactivity%3A7202704501504368641%29",
  },
  {
    name: "Adithia V",
    image: "/images/people/adithiav.jpeg",
    content:
      "Being a part of Descipr's first Data Scientist Fellowship cohort has been an incredible journey. The growth I’ve experienced, both technically and professionally, has exceeded my expectations. I highly recommend this fellowship to anyone looking to elevate their data science skills and business acumen.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235203541722656770%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235203541722656770%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
];

const RandomScroller = () => {
  const [isMobile, setIsMobile] = useState(false);
  const columns = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize(); // check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // scrolling effect only for desktop/tablet
  useEffect(() => {
    if (isMobile) return;
    const intervals = columns.map((ref, i) => {
      let direction = Math.random() > 0.5 ? 1 : -1;
      let speed = Math.random() * 1.5 + 0.5;

      return setInterval(() => {
        const el = ref.current;
        if (!el) return;

        el.scrollTop += direction * speed;

        if (el.scrollTop <= 0 || el.scrollTop + el.clientHeight >= el.scrollHeight) {
          direction *= -1;
          speed = Math.random() * 1.5 + 0.5;
        }
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, [isMobile]);

  // group for desktop/tablet
  const chunked = [
    testimonials.slice(0, 4),
    testimonials.slice(4, 9),
    testimonials.slice(9, 13),
  ];

  return (
    <div className="row customers-content">
      {isMobile ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="linkedinsec">
                <div className="row align-items-center">
                  <div className="col-3">
                    <p>
                      <img src={t.image} alt={t.name} style={{ width: "100%" }} />
                    </p>
                  </div>
                  <div className="col-7">
                    <h5>{t.name}</h5>
                  </div>
                  <div className="col-2 text-right">
                    <a href={t.link} target="_blank" rel="noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <article>{t.content}</article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // ✅ Desktop/Tablet View → 3 scrolling columns
        chunked.map((testimonialGroup, index) => (
          <div className="col-sm-4 alignVertical" key={index}>
            <div
              className={`scroll-column column-${index + 1}`}
              ref={columns[index]}
              style={{
                height: "500px",
                overflow: "hidden",
                // overflowY: "scroll",
                // scrollBehavior: "smooth",
                scrollbarWidth: "none",
              }}
            >
              {testimonialGroup.map((t, i) => (
                <div className="linkedinsec" key={i}>
                  <div className="row align-items-center">
                    <div className="col-3">
                      <p>
                        <img src={t.image} alt={t.name} style={{ width: "100%" }} />
                      </p>
                    </div>
                    <div className="col-7">
                      <h5>{t.name}</h5>
                    </div>
                    <div className="col-2 text-right">
                      <a href={t.link} target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <article>{t.content}</article>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RandomScroller;
