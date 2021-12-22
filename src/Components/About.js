import React from "react";
import Blend from "./Blend";
import CombinedCircuit from "./combinedCircuit";
import Animals from "./Animals";
import AboutBg from "../assets/aboutBg.png";

const About = () => {
  return (
    <>
      <Blend />

      <div
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "-24rem",
          position: "relative",
          border: "solid transparent 2px",
          overflow: "hidden",
          paddingTop: 0,
          zIndex: 5,
        }}
      >
        <div className="about" id="about">
          <CombinedCircuit />
        </div>
        <div>
          <Animals />
        </div>
      </div>
    </>
  );
};

export default About;
