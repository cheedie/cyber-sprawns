import React from "react";
import { BsShop } from "react-icons/bs";
import birdGirl from "../assets/images/girl_bird.png";
import snakeSpawn from "../assets/images/snake_spawn.png";
import manBear from "../assets/images/man_bear.png";
import dragonSpawn from "../assets/images/dragon_spawn.png";
import cyanButton from "../assets/SVG/cyan_button.svg";

const Marketplace = () => {
  return (
    <div className="market-place-container" id="marketplace">
      <div className="marketplace-img-container">
        <img src={birdGirl} className="bird-girl" alt="bird girl" />
        <img src={snakeSpawn} className="snake-spawn" alt="snake spawn" />
        <img src={manBear} className="man-bear" alt="man bear" />
        <img src={dragonSpawn} className="dragon-spawn" alt="dragon spawn" />
      </div>
      <div className="marketplace-btn">
        <div className="marketplace-content">
          <img src={cyanButton} alt="cyan button" className="cyan-btn" />
          <div className="marketplace-items">
            <div className="shop-icon">
              <BsShop />
            </div>
            <span>Marketplace</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
