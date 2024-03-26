import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Components/NavBar";
import "./index.css";
import MobileNavBar from "./Components/MobileNavBar";
import Candidates from "./Components/Candidates";
import Testimonials from "./Components/Testimonials";
import CandidatesPhone from "./Components/CandidatesPhone";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/AboutUs";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return (
    <div className="app">
      <NavBar />
      <MobileNavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/professionals",
        element: <Candidates />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/ourservices",
        element: <OurServices />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
