import { Box } from "@material-ui/core";
import { CSSProperties } from "react";
import { useState } from "react";
import heroPic1 from "../../assets/hero1.png";
import heroPic2 from "../../assets/hero2.png";
import alternativeCursor from "../../assets/alternativeCursor.png";
import { useMouse } from "../MousePos";
import Carousel from "./Carousel";


function Hero() {
  const [leftIsShown, setLeftIsShown] = useState(false);
  const [rightIsShown, setRightIsShown] = useState(false);
  const { x, y } = useMouse();

  const heroTitleLeft: CSSProperties = {
    color: "white",
    position: "absolute",
    left: x,
    top: y,
    marginLeft: "-8rem",
    marginTop: "-3rem",
    whiteSpace: "nowrap",
  };

  const heroTitleRight: CSSProperties = {
    color: "white",
    position: "absolute",
    left: x,
    top: y,
    marginLeft: "-8rem",
    marginTop: "-3rem",
    whiteSpace: "nowrap",
    // marginLeft: "3rem",
  };

  return (
    <>
    <div style={heroContainer}>
      <div
        style={heroPicLeft}
        onMouseEnter={() => setLeftIsShown(true)}
        onMouseLeave={() => setLeftIsShown(false)}
      >
        {leftIsShown && <h2 style={heroTitleLeft}>NEW COLLECTION</h2>}
      </div>
      <div
        style={heroPicRight}
        onMouseEnter={() => setRightIsShown(true)}
        onMouseLeave={() => setRightIsShown(false)}
      >
        {rightIsShown && <h2 style={heroTitleRight}>THE SOFTY</h2>}
      </div>
    </div>
      <Box>
        <p>More than 135 years of timeless Italian craftmanship.</p>
      </Box>
      <Box>
        <Carousel />
      </Box>
      </>
  );
}

const heroPicLeft: CSSProperties = {
  backgroundImage: `url(${heroPic1})`,
  width: "40rem",
  height: "50rem",
  backgroundPosition: "center",
  objectFit: "cover",
  marginRight: ".5rem",
  cursor: `url(${alternativeCursor}), auto`,
};

const heroPicRight: CSSProperties = {
  backgroundImage: `url(${heroPic2})`,
  width: "40rem",
  height: "50rem",
  backgroundPosition: "center",
  objectFit: "cover",
  marginLeft: ".5rem",
  cursor: `url(${alternativeCursor}), auto`,
};

const heroContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

// const heroTitleLeft: CSSProperties = {
//   color: "white",
//   position: "absolute",
//   top: "40rem",
//   marginLeft: "3rem",
// };

export default Hero;
