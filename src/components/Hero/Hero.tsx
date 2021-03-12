import { Typography, Box, Button } from "@material-ui/core";
import { CSSProperties } from "react";
import { useState } from "react";
import heroPic1 from "../../assets/hero1.png";
import heroPic2 from "../../assets/hero2.png";
import alternativeCursor from "../../assets/alternativeCursor.png";
import { useMouse } from "../MousePos";
import Carousel from "./Carousel";
import { makeStyles } from "@material-ui/styles";

function Hero() {
  const [leftIsShown, setLeftIsShown] = useState(false);
  const [rightIsShown, setRightIsShown] = useState(false);
  const { x, y } = useMouse();
  const classes = useStyles();

  const heroTitleLeft: CSSProperties = {
    color: "white",
    position: "absolute",
    left: x,
    top: y,
    marginLeft: "-8rem",
    marginTop: "-3rem",
    whiteSpace: "nowrap",
    fontFamily: "roboto",
  };

  const heroTitleRight: CSSProperties = {
    color: "white",
    position: "absolute",
    left: x,
    top: y,
    marginLeft: "-5rem",
    marginTop: "-3rem",
    whiteSpace: "nowrap",
    fontFamily: "roboto",
  };

  return (
    <>
      <Box className={classes.heroContainer}>
        <Box
          className={classes.heroPicLeft}
          onMouseEnter={() => setLeftIsShown(true)}
          onMouseLeave={() => setLeftIsShown(false)}
        >
          {leftIsShown && <h2 style={heroTitleLeft}>NEW COLLECTION</h2>}
        </Box>
        <Box
          className={classes.heroPicRight}
          onMouseEnter={() => setRightIsShown(true)}
          onMouseLeave={() => setRightIsShown(false)}
        >
          {rightIsShown && <h2 style={heroTitleRight}>THE SOFTY</h2>}
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h4"
          className={classes.flexCenter && classes.carouselText}
        >
          More than 135 years of timeless Italian craftmanship.
        </Typography>
      </Box>
      <Box>
        <Carousel />
      </Box>
    </>
  );
}

const useStyles: any = makeStyles({
  heroPicLeft: {
    backgroundImage: `url(${heroPic1})`,
    width: "40rem",
    height: "50rem",
    backgroundPosition: "center",
    objectFit: "cover",
    marginRight: ".5rem",
    cursor: `url(${alternativeCursor}) 9 7, auto`,
  },
  heroPicRight: {
    backgroundImage: `url(${heroPic2})`,
    width: "40rem",
    height: "50rem",
    backgroundPosition: "center",
    objectFit: "cover",
    marginLeft: ".5rem",
    cursor: `url(${alternativeCursor}) 9 7, auto`,
  },
  heroContainer: {
    display: "flex",
    justifyContent: "center",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  carouselText: {
    marginBottom: "2rem",
    marginTop: "2rem",
    textAlign: "center",
  },
});

export default Hero;
