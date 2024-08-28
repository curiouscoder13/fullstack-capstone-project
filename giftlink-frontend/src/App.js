import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import SearchPage from "./components/SearchPage/SearchPage";

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
            <Route path="/app/login" element={<LoginPage />} />
            <Route path="/app/register" element={<RegisterPage />} />
            <Route path="/app/product/:productId" element={<DetailsPage />} />
            <Route path="/app/search" element={<SearchPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
