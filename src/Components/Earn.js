import React from "react";
import { FaDiscord } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import PurpleButton from "./Purplebutton";

const Earn = () => {
  return (
    <>
      <div className="cta">
        <h2>Play To Earn Revolution</h2>
        <p>
          Cyber Spawn is a new type of game, partially owned and operated by its
          players.
        </p>
        <p>
          Earn Concentrated Nano Dose ($CND) and Cyber Spawn Splinters ($CSS)
          tokens <br />
          by playing and using them to decide the future of the game!{" "}
        </p>
      </div>

      <div className="about-button">
        <PurpleButton text="Discord">
          <FaDiscord />
        </PurpleButton>
      </div>
      <div className="about-button2">
        <PurpleButton text="Marketplace">
          <BsShop />
        </PurpleButton>
      </div>
    </>
  );
};

export default Earn;
