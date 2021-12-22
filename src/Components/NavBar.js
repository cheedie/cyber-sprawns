import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import "../index.css";
import logo from "../assets/SVG/logo.svg";

const NavBar = ({ grabActiveLink }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [name, setName] = useState("");
  const containerRef = useRef();

  const hoverTo = (elem) => {
    gsap.to(containerRef.current, { x: elem.offsetLeft, opacity: 0.5 });
    containerRef.current.style.width = elem.offsetWidth + "px";
  };

  const handleLeave = (elem) => {
    gsap.to(containerRef.current, { x: elem.offsetRight });
  };

  return (
    <main className="navbar-container">
      <img src={logo} alt="" className="nav-logo" />
      <div className="navbar-items">
        <ul
          className={showLinks ? "navbar-links-mobile" : "nav-links"}
          onClick={() => setShowLinks(false)}
        >
          <div ref={containerRef} className="nav-hover"></div>
          <div
            onMouseOver={(e) => hoverTo(e.target)}
            onMouseLeave={handleLeave}
            className="nav-link-container"
          >
            <Link
              smooth={true}
              spy={true}
              duration={500}
              offset={50}
              className={`${name === "home" ? "active" : ""} nav-link`}
              name="home"
              to="home"
              onClick={(e) => setName(e.target.name)}
            >
              Home
            </Link>
          </div>

          <div
            onMouseOver={(e) => hoverTo(e.target)}
            onMouseLeave={handleLeave}
          >
            <Link
              smooth={true}
              spy={true}
              duration={500}
              offset={50}
              className={`${name === "about" ? "active" : ""} nav-link`}
              name="about"
              to="about"
              onClick={(e) => setName(e.target.name)}
            >
              About
            </Link>
          </div>
          <div
            onMouseOver={(e) => hoverTo(e.target)}
            onMouseLeave={handleLeave}
          >
            <Link
              smooth={true}
              spy={true}
              duration={500}
              offset={50}
              className={`${name === "earn" ? "active" : ""} nav-link`}
              name="earn"
              to="earn"
              onClick={(e) => setName(e.target.name)}
            >
              Earn
            </Link>
          </div>
          <div
            onMouseOver={(e) => hoverTo(e.target)}
            onMouseLeave={handleLeave}
          >
            <Link
              smooth={true}
              spy={true}
              duration={500}
              offset={50}
              name="battle"
              to="battle"
              className={`${name === "battle" ? "active" : ""} nav-link`}
              onClick={(e) => setName(e.target.name)}
            >
              Battle
            </Link>
          </div>
          <div
            onMouseOver={(e) => hoverTo(e.target)}
            onMouseLeave={handleLeave}
          >
            <Link
              smooth={true}
              spy={true}
              duration={500}
              offset={50}
              name="marketplace"
              to="marketplace"
              className={`${name === "marketplace" ? "active" : ""} nav-link`}
              onClick={(e) => setName(e.target.name)}
            >
              Marketplace
            </Link>
          </div>
          <div
            onMouseOver={(e) => hoverTo(e.target)}
            onMouseLeave={handleLeave}
          >
            <Link
              smooth={true}
              spy={true}
              duration={500}
              offset={50}
              className={`${name === "more" ? "active" : ""} nav-link`}
              name="more"
              to="more"
              onClick={(e) => setName(e.target.name)}
            >
              More
            </Link>
          </div>
        </ul>
      </div>
      <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
        {showLinks ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </main>
  );
};

export default NavBar;
