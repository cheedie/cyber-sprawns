import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { scrollTrigger } from "gsap/ScrollTrigger";
import { BsShop } from "react-icons/bs";
import footerLogo from "../assets/SVG/CS_footer_logo.svg";
import newsletter from "../assets/SVG/newsletter.svg";
import purpleBtn from "../assets/SVG/purple_button.svg";

const More = () => {
  return (
    <div className="more" id="more">
      <div className="footer-logo">
        <img src={footerLogo} alt="footer logo" />
      </div>
      <div className="footer-links-container">
        <ul className="footer-links">
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Encyclopedia</a>
          </li>
          <li>
            <a href="#">Whitepaper</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="newsletter-container">
        <div>
          <h3>Newsletter</h3>
          <form action="">
            <input type="text" placeholder="Email Address" />
          </form>
          <img src={newsletter} alt="newsletter" />
          <div className="newsletter-btn">
            <div>
              <img src={purpleBtn} alt="purple button" />
              <div>
                <BsShop />
                <span>SUBSCRIBE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
