import React from "react";
import Blend from "./Blend";
import CombinedCircuit from "./combinedCircuit";
import Animals from "./Animals";
import AboutBg from "../assets/aboutBg.png"

const About = () => {
  return (
    // <main className="dummy-style" id="about">
    //   <div className="blend-about-bg"></div>
    //   <div className="about-bg"></div>
    //   <div>
    <>
        <Blend />

        <div style={{
          // backgroundImage: 'url(./assets/aboutPageBg.png)',
          backgroundImage: `url(${AboutBg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // width: "100%",
          // height: '340vh',
          marginTop: '-24rem',
          position: 'relative',
          border: 'solid transparent 2px',
          overflow: 'hidden',
          paddingTop: 0,
          zIndex: 5,
        }}>
          <div className="about" id="about">
            <CombinedCircuit />
          </div>
          <div>
            <Animals />
          </div>
        </div>


        {/* <div className="combined-circuits">
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
            </div> */}
      {/* </div>
    </main> */}
    </>
    );
};

export default About;
