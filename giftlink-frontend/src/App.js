import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
