import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 360) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 0) {
      setShowScroll(false);
    }
  };

  const scrollNavTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollNavTop}
      style={{
        height: 50,
        display: showScroll ? "flex" : "none",
      }}
    />
  );
};

export default ScrollTop;
