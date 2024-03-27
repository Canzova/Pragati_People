// Icons
import { FaLinkedinIn } from "react-icons/fa6";
import cust2 from "../images/harilyer.jpeg";

import img1 from "../images/Vishal Rananawre2_TR.png";
import img3 from "../images/Prakhar_TR.png";
import img4 from "../images/Pranita-transformed_TR.png";
import img2 from "../images/WhatsApp Image 2024-03-23 at 7.46.31 PM.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiper-style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="testimonials_wrapper">
      <div className="header">
        <h1>Testimonials</h1>
        <div>
          <div className="main_heading">
            Discover what our customers say about their experiences with us.
          </div>
          <span className="first_alpha">A</span>t Pragati People, we have many
          metrics to track our performance, but our ultimate measure of success
          is the <span className="joy">JOY</span> we bring to our customers.
        </div>
      </div>
      <div className="testimonials_slider_wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={img1} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <div className="user-details">
                  <div className="name_Lindekin">
                    <h2 className="name">Vishal Rananaware</h2>
                    <a
                      href="https://www.linkedin.com/in/vishal-rananaware-72720325/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="linkedin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </div>
                  <h4 className="cust-details">
                    <span>Interview Preparation</span> March 3, 2023
                  </h4>
                </div>
                <p className="description">
                  I engaged Sanjeev's help for 'Interview Prep'. Sanjeev with
                  his core engineering background conducted a thorough
                  mock-interview. We covered technical and non- technical
                  questions over the 1-hour video-interview. The single biggest
                  thing I gained from my practice interview with Sanjeev was an
                  increased confidence in my abilities. After this practice
                  round, I was able to successfully crack my real interview
                  which got me a new job with a generous salary increase.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={img2} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <div className="user-details">
                  <div className="name_Lindekin">
                    <h2 className="name">Sainath Shetty</h2>
                    <a
                      href="https://www.linkedin.com/in/sainath-shetty-8a203619/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="linkedin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </div>
                  <h4 className="cust-details">
                    <span>Head Hunting</span> February 13, 2024
                  </h4>
                </div>
                <p className="description">
                  As a Talent sourcing partner, I can succinctly describe
                  Sanjeev's work style in two words - remarkably efficient. His
                  distinctive fusion of Engineering and HR acumen expedited our
                  talent acquisition process. During our concise 15-minute
                  hiring-intake call, Sanjeev skillfully grasped the
                  expectations of our engineering teams. He personally conducted
                  technical pre-interviews to sift through numerous profiles,
                  presenting only the most pertinent ones to our interview
                  panelists, thereby conserving their valuable time and effort.
                  I wholeheartedly endorse Sanjeev to anyone seeking a recruiter
                  who delivers with precision and speed.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={cust2} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <div className="user-details">
                  <div className="name_Lindekin">
                    <h2 className="name">Hari lyer</h2>
                    <a
                      href="https://www.linkedin.com/in/hari-iyer-indavenue/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="linkedin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </div>
                  <h4 className="cust-details">
                    <span>Resume Writing</span> June 6, 2023
                  </h4>
                </div>
                <p className="description">
                  I chose Sanjeev over other resume writers because of his deep
                  engineering expertise (20+ years) and his international stints
                  across Florida, Texas & Singapore(7+years) Initially, I hired
                  Sanjeev to enhance my resume. Later, I re-hired him a 2nd time
                  to receive coaching for an interview. He conducted a rigorous
                  45-minute mock interview, followed by 30 minutes of feedback
                  on my strengths and areas for improvement. This session gave
                  me the confidence and focus necessary for my actual interview.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={img3} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <div className="user-details">
                  <div className="name_Lindekin">
                    <h2 className="name">Prakhar Chaturvedi</h2>
                    <a
                      href="https://www.linkedin.com/in/prakhar-chaturvedi-a90444136/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="linkedin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </div>
                  <h4 className="cust-details">
                    <span>Technical Training</span> March 29, 2023
                  </h4>
                </div>
                <p className="description">
                  I had the pleasure of participating in a product design course
                  taught by Sanjeev. He employs the principles of Bloom's
                  taxonomy to create an engaging and effective learning
                  experience. His teaching style is inclusive and collaborative,
                  and he has a natural talent for breaking down complex concepts
                  into easy-to-understand components. I will always remember the
                  classroom activities that he planned to explain "Concept
                  Screening" and "DFX". I highly recommend him as a product
                  design instructor.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={img4} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <div className="user-details">
                  <div className="name_Lindekin">
                    <h2 className="name">
                      Pranita Madkaikar (nee Naina Mankikar)
                    </h2>
                    <a
                      href="https://www.linkedin.com/in/pranita-madkaikar-nee-naina-mankikar-00a87b15a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="linkedin">
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </div>
                  <h4 className="cust-details">
                    <span>Non-profit Consulting</span> July 14, 2023
                  </h4>
                </div>
                <p className="description">
                  Our non-profit, Tara Mobile Creches Pune (TMCP) engaged
                  Sanjeev as a Pro Bono Consultant in 2022. As CEO of TMCP, I
                  collaborated with Sanjeev extensively for several months.
                  Sanjeev's sharp focus on user-centricity helped us to redesign
                  our website's main-navigation menu to make it simpler,
                  intuitive and user-friendly. Sanjeev's strategic
                  recommendations on effectively showcasing our 'Impact' metrics
                  improved our engagement with potential donors.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonials;
