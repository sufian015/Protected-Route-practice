import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages

import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Navbar from "../navbar/Navbar";
import Protected from "./Protected";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log In
        </button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={
        <Protected isLoggedIn={isLoggedIn}>
          <Blogs />

        </Protected>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
