import React from "react";
import "./HomePage.css";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  return (
    <div
      className={`home-page ${
        location.pathname === "/home" ? "home-page--active" : ""
      }`}
    >
      <div className="container my-5">
        <div className="text-center">
          <h1 className="home display-4 mb-3">GiftLink</h1>
          <h2 className="home mb-4">Share Gifts and Joy!</h2>
          <p className="home lead">
            "Sharing is the essence of community. It is through giving that we
            enrich and perpetuate both our lives and the lives of others."
          </p>
          <a href="/app" className="home btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
