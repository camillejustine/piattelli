// import { Box } from "@material-ui/core";
import { CSSProperties } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";
import dress from "../../assets/dress-cu.png";
import { Typography, Box, Button } from "@material-ui/core";

function PromotionSecond() {
  return (
    <Box style={promotionContainer}>
      <Box style={promotionText}>
        <Typography variant="h6">who is</Typography>
        <Typography variant="h2">MONA-LISA</Typography>
        <Typography variant="body2">by</Typography>
        <Typography variant="h2">PIATELLI</Typography>
      </Box>
      <Box>
        <img
          src={dress}
          style={customCursor}
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

const customCursor: CSSProperties = {
  cursor: `url(${alternativeCursor}), auto`,
};
export default PromotionSecond;
