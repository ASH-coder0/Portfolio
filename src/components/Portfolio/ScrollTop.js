// src/components/portfolio/ScrollTop.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Portfolio.css";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <button className="scroll-top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollTop;
