// Importring images
import temp2 from "../images/group-presentation-monochromatic.png";
import temp3 from "../images/handshake-monochromatic.png";
import temp4 from "../images/team-presentation-monochromatic-0304d.png";
import temp from "../images/job-interview-monochromatic (1).png";
import temp5 from "../images/career-monochromatic-70610.png";

import { RxCross2 } from "react-icons/rx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiper-style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Candidates = () => {

  const handleOnClick = (index) => {
    // Get all elements with the class "overLay"
    const overLays = document.getElementsByClassName("overLay");

    // Loop through each element and modify its style
    for (let i = 0; i < overLays.length; i++) {
      if (i === index) {
        // Set height to 100%
        overLays[i].style.height = "100%";
        // Set opacity to 1
        overLays[i].style.opacity = "1";
      }
    }
  };

  const handleCrossClick = (index)=>{
     // Get all elements with the class "overLay"
     const overLays = document.getElementsByClassName("overLay");

     // Loop through each element and modify its style
     for (let i = 0; i < overLays.length; i++) {
       if (i === index) {
         // Set height to 100%
         overLays[i].style.height = "0";
         // Set opacity to 1
         overLays[i].style.opacity = "0";
       }
     }
  }

  return (
    <div className="candidates_wrapper">
      <div className="header">
        <h1>Candidates</h1>
        <div>
          Your drive, aspirations, expertise and talents make your career
          journey truly unique. We're committed to standing by your side every
          step of the way! Each of our 'career pragati' services listed below
          will be carefully tailored to guide you, from wherever you are in your
          journey.
        </div>
      </div>
      <div className="testimonials_slider_wrapper cards_wrapper">
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            // Define breakpoints for different screen sizes
            0: {
              slidesPerView: 1, // Show 1 card per view on smaller screens
            },
            865: {
              slidesPerView: 2, // Show 2 cards per view on medium-sized screens
            },
            1200: {
              slidesPerView: 3, // Show 3 cards per view on larger screens
            },
          }}
        >
          <SwiperSlide>
            <div className="card_wrapper">
              <div className="img_container">
                <img src={temp} alt="" />
              </div>
              <div className="card_content">
                <h3>Preparing for your Next Job</h3>
                <div className="card_txt">
                  Getting your job application noticed is not an easy task. Gain
                  competitive advantage by engaging Pragati for:
                </div>
                <button
                  className="btn_primary"
                  onClick={() => handleOnClick(0)}
                >
                  Read More
                </button>
                <ul className="first-overLay overLay">
                  <RxCross2 className="cross-logo"onClick={()=>handleCrossClick(0)}/>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Resume writing & LinkedIn makeover Services :</div>
                    <li className="list">
                      Get your resume hand-crafted by our experts.
                    </li>
                    <li className="list">
                      Optimize your LinkedIn profile to attract recruiters..
                    </li>
                    <li className="list">
                      Get noticed by recruiters who matter.
                    </li>
                  </li>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Interview Coaching :</div>
                    <li className="list">
                      Refine your interview skills with our mock interview
                      sessions.
                    </li>
                    <li className="list">
                      Our feedback helps you regain confidence.
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card_wrapper">
              <div className="img_container">
                <img src={temp2} alt="" />
              </div>
              <div className="card_content">
                <h3>Discovering your next job</h3>
                <div className="card_txt">
                  Finding your dream job can feel like a journey through the
                  dark.  We hold the torch for you, with:
                </div>
                <button
                  className="btn_primary"
                  onClick={() => handleOnClick(1)}
                >
                  Read More
                </button>
                <ul className="overLay">
                <RxCross2 className="cross-logo" onClick={()=>handleCrossClick(1)}/>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Recruitment Consultation : </div>
                    <li className="list">
                      Explore current openings (hyperlink) from our corporate
                      clients.
                    </li>
                  </li>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Job Booster Package :</div>
                    <li className="list">
                      Leverage our expertise to improve your chances of landing
                      that 'dream job'.
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card_wrapper">
              <div className="img_container">
                <img src={temp3} alt="" />
              </div>
              <div className="card_content">
                <h3>Navigating job offers</h3>
                <div className="card_txt">
                  Once you’ve received job offer(s), choosing the right one is
                  crucial. We help you choose the one that celebrates you.
                </div>
                <button
                  className="btn_primary"
                  onClick={() => handleOnClick(2)}
                >
                  Read More
                </button>
                <ul className="overLay">
                <RxCross2 className="cross-logo" onClick={()=>handleCrossClick(2)}/>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Offer Evaluation & Comparison :</div>
                    <li className="list">
                      Indepth and side-by-side assessment of individual or
                      multiple job offers.
                    </li>
                  </li>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Negotiation Strategies :</div>
                    <li className="list">
                      Let us help you identify suitable salary ranges for your
                      skills.
                    </li>
                    <li className="list">
                      Get advice on how to negotiate your salary.
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card_wrapper">
              <div className="img_container">
                <img src={temp4} alt="" />
              </div>
              <div className="card_content">
                <h3>Career Decision Points</h3>
                <div className="card_txt">
                  Are you at a career cross-road? Steer your career on the right
                  path with our guidance on:
                </div>
                <button
                  className="btn_primary"
                  onClick={() => handleOnClick(3)}
                >
                  Read More
                </button>
                <ul className="overLay">
                <RxCross2 className="cross-logo" onClick={()=>handleCrossClick(3)}/>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Stay or Pivot :</div>
                    <li className="list">
                      We help you decide whether to remain in your current role
                      or venture into new roles.
                    </li>
                  </li>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Exploring New Avenues :</div>
                    <li className="list">
                      We discuss upskilling in trending fields like AI/ML, Data
                      Science or pursuing higher degrees- MBA, MS….
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card_wrapper">
              <div className="img_container">
                <img src={temp5} alt="" />
              </div>
              <div className="card_content">
                <h3>Crafting your Career Trajectory </h3>
                <div className="card_txt">
                  To break free from a conventional career path, you need to
                  take a long-term view. We help you gain a deeper
                  self-understanding to hand-craft a career where you can truly
                  flourish.
                </div>
                <button
                  className="btn_primary"
                  onClick={() => handleOnClick(4)}
                >
                  Read More
                </button>
                <ul className="overLay">
                <RxCross2 className="cross-logo" onClick={()=>handleCrossClick(4)}/>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Finding your IKIGAI (link) :</div>
                    <li className="list">Discover your purpose and passion.</li>
                  </li>
                  <li style={{ padding: "0 1rem" }}>
                    <div>Designing your career journey :</div>
                    <li className="list">
                      Collaborate with us to sketch out a career trajectory
                      spanning several decades.
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      ;
    </div>
  );
};
export default Candidates;
