import React from "react";
import { gsap } from "gsap";
import { paths } from "./currentPath";

const About = () => {
  return (
    <main className="dummy-style" id="about">
      <div className="blend-about-bg"></div>
      <div className="about-bg"></div>
      <div>
        <div className="combined-circuits">
          <div>
            <svg
              className="meshCircuit1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-300 -110 1800 1600"
            >
              <g className="set2">
                {paths.map((path, i) => {
                  return (
                    <path
                      fill="none"
                      key={i}
                      data-placeholder={1 + 20}
                      d={path.path}
                    ></path>
                  );
                })}
              </g>
              <g className="set1">
                {paths.map((path, i) => {
                  return (
                    <path
                      fill="none"
                      key={i}
                      id={`path-${i + 1}`}
                      d={path.path}
                    ></path>
                  );
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
