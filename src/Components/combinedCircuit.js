import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Circuit1 from "./Circuit1";
import Circuit3 from "./Circuit3";
import PlayToEarn from "./PlayToEarn.js";

export default function CombinedCircuit() {
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="combineCircuits">
      <div className="svg_circuit_1">
        <Circuit1 timeline={tl} />
      </div>
      <div className="svg_circuit_3">
        <Circuit3 timeline={tl} />
      </div>
      <PlayToEarn />
    </div>
  );
}
