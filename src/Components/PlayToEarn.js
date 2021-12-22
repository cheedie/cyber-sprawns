import React from "react";
import Earn from "./Earn";
import playToEarn from "../assets/SVG/play_to_earn2.svg";

export default function PlayToEarn() {
  return (
    <div className="playToEarn">
      <img alt="play to earn" src={playToEarn} />
      <div className="" id="earn">
        <Earn />
      </div>
    </div>
  );
}
