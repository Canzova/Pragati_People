import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Components/NavBar";
import "./index.css";
import MobileNavBar from "./Components/MobileNavBar";
import Candidates from "./Components/Candidates";
import Testimonials from "./Components/Testimonials";
import CandidatesPhone from "./Components/CandidatesPhone";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <MobileNavBar />
    <Candidates />
    <Testimonials />
    <Footer/>
  </React.StrictMode>
);
