// Importring images
import temp2 from "../images/group-presentation-monochromatic.png";
import temp3 from "../images/handshake-monochromatic.png";
import temp4 from "../images/team-presentation-monochromatic-0304d.png";
import temp from "../images/job-interview-monochromatic (1).png";
import temp5 from "../images/career-monochromatic-70610.png";

const Candidates = () => {
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
      <div className="cards_wrapper">
        <div className="card_wrapper">
          <div className="img_container">
            <img src={temp} alt="" />
          </div>
          <div className="card_content">
            <h3>Preparing for your Next Job</h3>
            <div>
              While your work experience sharpens your skills in your field,
              getting ready for your next career move, demands an additional
              level of preparation. We're here to assist you in acquiring that
              competitive advantage through the services listed below:
            </div>
            <ul className="overLay">
              <li>
                <span>Resume Services:</span> Get your resume critiqued or
                professionally written by our experts.
              </li>
              <li>
                <span>Online Profiles:</span> Enhance your professional image
                with a sophisticated LinkedIn profile.
              </li>
              <li>
                <span>Ace the Interview:</span> Refine your interview
                proficiency with our mock interview sessions.
              </li>
            </ul>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="img_container">
            <img src={temp2} alt="" />
          </div>
          <div className="card_content">
            <h3>Discovering your next job</h3>
            <div>
              Discovering a position where your passion, skills, and values
              converge is undoubtedly vital for a fulfilling career. We promise
              to 'hold the torch out' for you, with the below services:
            </div>
            <ul className="overLay">
              <li>
                <span>Recruitment Consultation:</span> Browse through the
                current job opportunities (link) offered by our corporate
                clients.
              </li>
              <li>
                <span>Advisory Services:</span> Benefit from our decades of
                experience to boost your chances of landing that 'dream job '.
              </li>
            </ul>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="img_container">
            <img src={temp3} alt="" />
          </div>
          <div className="card_content">
            <h3>Navigating job offers</h3>
            <div>
              Choosing the right path is as important as arriving at the
              destination. We stand by your side, offering the services listed
              below:
            </div>
            <ul className="overLay">
              <li>
                <span>Offer Evaluation:</span> Receive support in assessing job
                offers.
              </li>
              <li>
                <span>Negotiation Strategies:</span>Engage with us to strategize
                on optimizing your offers.
              </li>
              <li>
                <span>Comparing Multiple Offers:</span> Receive expert guidance
                for a comprehensive, side-by-side evaluation of multiple offers.
              </li>
            </ul>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="img_container">
            <img src={temp4} alt=""/>
          </div>
          <div className="card_content">
            <h3>Career Decision Points</h3>
            <div>
              Steer your career with purpose and efficiency. Seeking guidance?
              We're available with the services listed below:
            </div>
            <ul className="overLay">
              <li>
                <span>Stay or Pivot:</span>Gain valuable insights to determine
                whether to remain in your current position or explore new
                opportunities.
              </li>
              <li>
                <span>Exploring New Avenues</span>Discover the possibilities of
                a career change with our support.
              </li>
            </ul>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="img_container">
            <img src={temp5} alt="" />
          </div>
          <div className="card_content">
            <h3>Crafting your Career Trajectory </h3>
            <div>
              Regrettably, many individuals tend to opt for conventional career
              paths by default. We aim to break you out of this default mindset
              and assist you in gaining a deeper understanding of yourself, to
              construct a career where you can truly flourish. Our services are
              customised precisely for this purpose:
            </div>
            <ul className="overLay">
              <li>
                <span>Finding your IKIGAI (link):</span>Discover your purpose
                and passion with us.
              </li>
              <li>
                <span>Creating a long-term career-arc:</span>Collaborate with us
                to sketch out a long-term career trajectory spanning several
                decades.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Candidates;
