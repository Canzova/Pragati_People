// Icons
import { FaLinkedinIn } from "react-icons/fa6";

import cust1 from "../images/vishal_rananaware.png";
import cust2 from "../images/harilyer.jpeg";
import cust3 from "../images/prakhar.png";
import cust4 from "../images/pranita.png";
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
        <div>Read what our Customers say about us</div>
      </div>
      <div className="testimonials_slider_wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
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
                  <img src={cust1} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <div className="user-details">
                  <div className="name_Lindekin">
                    <h2 className="name">Vishal Rananaware</h2>
                    <a
                      href="https://www.linkedin.com/in/vishal-rananaware-72720325/"
                      target="_blank"
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
                  <img src={cust3} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <div className="user-details">
                  <div className="name_Lindekin">
                    <h2 className="name">Prakhar Chaturvedi</h2>
                    <a
                      href="https://www.linkedin.com/in/prakhar-chaturvedi-a90444136/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
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
                  <img src={cust4} alt="" className="card-img" />
                </div>
              </div>
              <div className="card-content">
                <div className="user-details">
                  <div className="name_Lindekin">
                    <h2 className="name">
                      PRANITA MADKAIKAR (nee Naina Mankikar)
                    </h2>
                    <a href="https://www.linkedin.com/in/pranita-madkaikar-nee-naina-mankikar-00a87b15a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
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
