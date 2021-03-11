// import { Box } from "@material-ui/core";
import { CSSProperties } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import alternativeCursor from "../../assets/alternativeCursor.png";
import leScandinave from "../../assets/le-scandinave.png";

function Promotion() {
  return (
    <Box style={promotionContainer}>
      <Box style={promotionText}>
        <Typography variant="h6">Explore</Typography>
        <Typography variant="h3">LE SCANDINAVE</Typography>
      </Box>
      <Box>
        <img
          src={leScandinave}
          style={{ ...customCursor, ...imgStyling }}
          draggable="false"
          alt="A Le Scandinave promotion."
        />
      </Box>
    </Box>
  );
}

const promotionContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const promotionText: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  color: "white",
  cursor: `url(${alternativeCursor}), auto`,
};

const imgStyling: CSSProperties = {
  width: "50vw",
};

const customCursor: CSSProperties = {
  cursor: `url(${alternativeCursor}), auto`,
};
export default Promotion;
