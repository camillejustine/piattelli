import { makeStyles } from "@material-ui/styles";
import alternativeCursor from "../../assets/alternativeCursor.png";
import { Box, Typography } from "@material-ui/core";
import { render } from "@testing-library/react";
import heroPic1 from "../../assets/hero1.png";
import video1 from "../../assets/film1.png";
import video2 from "../../assets/film2.png";
import classes from "*.module.css";

function Collection() {
  const classes = useStyles();
  return (
    <Box className={classes.collectionContainer}>
      <Box className={classes.flexCenter}>
        <Box>
          <img src={heroPic1} alt="" />
        </Box>
        <Box className={classes.textContainer}>
          <Box className={classes.titleTextContainer}>
            <Typography variant={"h3"}>New Collection</Typography>
          </Box>
          <Box className={classes.bodyTextContainer}>
            <Typography variant={"body1"} className={classes.marginBot}>
              With its warm and gentle tone, Blond Beige is one of Lemaire’
              Spring-Summer 2021 key color.
            </Typography>
            <Typography variant={"body1"} className={classes.marginBot}>
              This theme is presented on a cotton linen blend with a soft twill
              structure for the women’s, men’s, and unisex wardrobe.
            </Typography>
            <Typography variant={"body1"}>
              For carry-overs, the shade is part of our seasonal colorama with
              six soft nappa leather accessories
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.videoContainer}>
        <img src={video1} alt="" />
        <img src={video2} alt="" />
      </Box>
    </Box>
  );
}

const useStyles: any = makeStyles({
  collectionContainer: {},
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "4rem",
    fontSize: "3rem",
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5rem",
    marginTop: "1rem",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  bodyTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  titleTextContainer: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "flex-start",
  },
  marginBot: {
    marginBottom: "2rem",
  },
});

export default Collection;
