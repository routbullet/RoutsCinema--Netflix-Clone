import React, { useState, useEffect } from "react";
import "./Navbar.css";
import styled from "styled-components";

const NavbarLogo = styled.img`
  width: 140px;
  height: 36px;
  padding: 0.6px;

  object-fit: contain;
`;
const NavBar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 77 ? setDisplayNav(true) : setDisplayNav(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`navbar ${displayNav && "navbar-bg"}`}>
        <NavbarLogo
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt=""
        />
      </div>
    </React.Fragment>
  );
};
export default NavBar;
