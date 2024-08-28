import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const location = useLocation();
  return (
    <>
      {/* I want to add conditional rendering here, if /home is in the address bar render homepage else render everything else*/}

      {location.pathname === "/home" ? (
        <HomePage />
      ) : (
        <>
          <Navbar />
          <Routes>
            {/* the final code will not pass the products to every page, but each page will call the server API */}
            <Route path="/" element={<MainPage />} />
            <Route path="/app" element={<MainPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
