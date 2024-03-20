// Importring images
import temp2 from "../images/group-presentation-monochromatic.png";
import temp3 from "../images/handshake-monochromatic.png";
import temp4 from "../images/team-presentation-monochromatic-0304d.png";
import temp from "../images/job-interview-monochromatic (1).png";
import temp5 from "../images/career-monochromatic-70610.png";

const CandidatesPhone = () => {
  return (
    <div className="candidates_wrapper candidates_phone_wrapper">
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
      <div className="phone_cards_wrapper">
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
            <ul className="first-overLay">
              <li style={{ padding: "0 1rem" }}>
                <div>Resume writing & LinkedIn makeover Services :</div>
                <li className="list">
                  Get your resume hand-crafted by our experts.
                </li>
                <li className="list">
                  Optimize your LinkedIn profile to attract recruiters..
                </li>
                <li className="list">Get noticed by recruiters who matter.</li>
              </li>
              <li style={{ padding: "0 1rem" }}>
                <div>Interview Coaching :</div>
                <li className="list">
                  Refine your interview skills with our mock interview sessions.
                </li>
                <li className="list">
                  Our feedback helps you regain confidence.
                </li>
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
                  Leverage our expertise to improve your chances of landing that
                  'dream job'.
                </li>
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
              <li style={{ padding: "0 1rem" }}>
                <div>Offer Evaluation & Comparison :</div>
                <li className="list">
                  Indepth and side-by-side assessment of individual or multiple
                  job offers.
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

        <div className="card_wrapper">
          <div className="img_container">
            <img src={temp4} alt="" />
          </div>
          <div className="card_content">
            <h3>Career Decision Points</h3>
            <div>
              Steer your career with purpose and efficiency. Seeking guidance?
              We're available with the services listed below:
            </div>
            <ul className="overLay">
              <li style={{ padding: "0 1rem" }}>
                <div>Stay or Pivot :</div>
                <li className="list">
                  We help you decide whether to remain in your current role or
                  venture into new roles.
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
              <li style={{ padding: "0 1rem" }}>
                <div>Finding your IKIGAI (link) :</div>
                <li className="list">Discover your purpose and passion.</li>
              </li>
              <li style={{ padding: "0 1rem" }}>
                <div>Designing your career journey :</div>
                <li className="list">
                  Collaborate with us to sketch out a career trajectory spanning
                  several decades.
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
export default CandidatesPhone;
