import { CSSProperties } from "react";
// import Box from "@material-ui/core/Box";
import exploreScandinave from "../../assets/explore-scandinave.png";
import { Typography, Box, Button } from "@material-ui/core";

function Explore() {
  return (
    <Box style={exploreContainer}>
      <Box style={imageContainer}>
        <img
          src={exploreScandinave}
          draggable="false"
          alt="A Le Scandinave promotion."
          style={imageStyling}
        />
      </Box>
      <Box style={textContainer}>
        <Typography variant="body1" style={textStyling}>
          Far known to sea and shore,<br></br> Foursquare and founded well,
          <br></br> A thousand years it bore,<br></br> And then the belfry fell.
        </Typography>
        <Typography variant="body1" style={textStyling}>
          The steersman of Triest<br></br> Looked where his mark should be,
          <br></br> But empty was the west<br></br> And Venice under sea.
        </Typography>
        <Button variant="outlined" style={buttonStyling}>
          Explore Le Scandinave Collection
        </Button>
      </Box>
    </Box>
  );
}

const exploreContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "53rem",
  margin: "auto",
};

const imageStyling: CSSProperties = {
  width: "20vw",
};

const imageContainer: CSSProperties = {
  height: "50rem",
  width: "100%",
  background: "#FAFAFA",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textContainer: CSSProperties = {
  height: "50rem",
  width: "50vw",
  background: "#F2F2F2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const textStyling: CSSProperties = {
  maxWidth: "50%",
  textAlign: "center",
  marginBottom: "1rem",
};

const buttonStyling: CSSProperties = {
  marginTop: "1rem",
};

export default Explore;
