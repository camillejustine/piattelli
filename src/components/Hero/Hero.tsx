import { CSSProperties } from "react";
import { useState } from "react";
import heroPic1 from "../../assets/hero1.png";
import heroPic2 from "../../assets/hero2.png";

function Hero() {
  const [leftIsShown1, setLeftIsShown] = useState(false);
  const [rightIsShown, setRightIsShown] = useState(false);

  //   const mousePosX = mouse.x
  return (
    <div style={heroContainer}>
      <div
        style={heroPicLeft}
        onMouseEnter={() => setLeftIsShown(true)}
        onMouseLeave={() => setLeftIsShown(false)}
      >
        {leftIsShown1 && <h2 style={heroTitle}>NEW COLLECTION</h2>}
      </div>
      <div
        style={heroPicRight}
        onMouseEnter={() => setRightIsShown(true)}
        onMouseLeave={() => setRightIsShown(false)}
      >
        {rightIsShown && <h2 style={heroTitle}>THE SOFTY</h2>}
      </div>
    </div>
  );
}

const heroPicLeft: CSSProperties = {
  backgroundImage: `url(${heroPic1})`,
  width: "40rem",
  height: "50rem",
  backgroundPosition: "center",
  objectFit: "cover",
  marginRight: ".5rem",
};

const heroPicRight: CSSProperties = {
  backgroundImage: `url(${heroPic2})`,
  width: "40rem",
  height: "50rem",
  backgroundPosition: "center",
  objectFit: "cover",
  marginLeft: ".5rem",
};

const heroContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const heroTitle: CSSProperties = {
  color: "white",
  position: "absolute",
  top: "40rem",
  marginLeft: "3rem",
};

export default Hero;
