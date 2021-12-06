import React, { useLayoutEffect, useRef } from "react";
import bigCloud1 from "../assets/images/bigCloud1.png";
import bigCloud2 from "../assets/images/bigCloud2.png";
import cloud1 from "../assets/images/cloud1.png";
import cloud2 from "../assets/images/cloud2.png";
import cloud3 from "../assets/images/cloud3.png";
import cloud4 from "../assets/images/cloud4.png";
import cloud5 from "../assets/images/cloud5.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Battle = () => {
  const bigcloud1Ref = useRef();
  const bigcloud2Ref = useRef();

  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    tl.from(".big-cloud1", {
      ease: "ease-in",
      duration: 1,
      scrub: 1,
      transform: "translateX(-80%)",
      scrollTrigger: {
        trigger: ".cloud-img-container",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.from(".big-cloud2", {
      ease: "ease-in",
      duration: 1,
      scrub: 1,
      transform: "translateX(80%)",
      scrollTrigger: {
        trigger: ".cloud-img-container",
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.from(["small-cloud"], {
      duration: 4,
      opacity: 0,
      delay: 5,
      scrollTrigger: {
        trigger: ".small-cloud",
        start: "top 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <main id="battle">
      <div className="battle-container">
        <div className="cloud-img-container">
          <img
            src={bigCloud1}
            ref={bigcloud1Ref}
            alt="big cloud"
            className="big-cloud1 cloud-img"
          />
          <img
            src={bigCloud2}
            ref={bigcloud2Ref}
            alt="big cloud"
            className="big-cloud2 cloud-img"
          />
          <img className="small-cloud small-cloud1" src={cloud1} alt="cloud" />
          <img className="small-cloud small-cloud2" src={cloud2} alt="cloud" />
          <img className="small-cloud small-cloud3" src={cloud3} alt="cloud" />
          <img className="small-cloud small-cloud4" src={cloud4} alt="cloud" />
          <img className="small-cloud small-cloud5" src={cloud5} alt="cloud" />
        </div>
      </div>
    </main>
  );
};

export default Battle;
