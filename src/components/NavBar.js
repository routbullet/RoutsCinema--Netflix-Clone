import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../image/logo.svg";

const NavBar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setDisplayNav(true) : setDisplayNav(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`navbar ${displayNav && "navbar-bg"}`}>
      <div style={{ paddingTop: "7px" }}>
        <img
          style={{
            position: "relative",
            height: "125px",
            width: "100%",
            objectFit: "contain",
          }}
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
};
export default NavBar;
