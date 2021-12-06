import React, { useRef, useState, useLayoutEffect } from "react";
import "../index.css";
import backgroundImage from "../assets/images/landing.png";
import logo from "../assets/SVG/logo.svg";
import landing_slice2 from "../assets/test/landing_slice2.png";
import landing_slice1 from "../assets/test/landing_slice1.png";
import landing_slice4 from "../assets/test/landing_slice4.png";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [offsetTree, setOffsetTree] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const homeRef = useRef(0);

  useLayoutEffect(() => {
    function handleScroll() {
      if (window.pageYOffset < 700) {
        setOffset(window.pageYOffset);
        setOffset2(window.pageYOffset + 5);
        setOffsetTree(window.pageYOffset + 100);
        homeRef.current.style.transform = `translateY(${
          window.pageYOffset * 0.1
        }px)`;
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    function mouseScroll(e) {
      let w = window.innerWidth / 2;
      let h = window.innerHeight / 2;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      homeRef.current.style.backgroundPosition = `${
        11.5 - (mouseX - w) * 0.02
      }px -${45.01 - (mouseY - h) * 0.02}px`;
    }

    homeRef.current.addEventListener("mousemove", mouseScroll);
    return () => {
      window.removeEventListener("scroll", mouseScroll);
    };
  }, []);

  return (
    <div
      ref={homeRef}
      id="home"
      className="hero"
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        height: "105vh",
        position: "relative",
      }}
    >
      <img
        src={landing_slice2}
        alt="landing_slice"
        className="home-container-img home-container"
        // style={{
        //   transform: `translateY(${offset * -0.2}px)`,
        // }}
      />
      <img
        src={landing_slice1}
        alt="landing_slice"
        className="home-container-img home-container"
        // style={{
        //   transform: `translateY(${offsetTree * -0.4}px)`,
        // }}
      />
      <img
        src={landing_slice4}
        alt="landing_slice"
        className="home-container-img"
        // style={{
        //   transform: `translateY(${offset2 * -0.6}px)`,
        // }}
      />
      <div>
        <img src={logo} className="logo" alt="header-logo" />
      </div>
    </div>
  );
};

export default Home;
