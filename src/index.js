import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Components/NavBar";
import "./index.css";
import MobileNavBar from "./Components/MobileNavBar";
import Candidates from "./Components/Candidates";
import Testimonials from "./Components/Testimonials";
import CandidatesPhone from "./Components/CandidatesPhone";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <MobileNavBar />
    <Candidates />
    <Testimonials />
  </React.StrictMode>
);
