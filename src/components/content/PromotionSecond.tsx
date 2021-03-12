// import { Box } from "@material-ui/core";
import { CSSProperties } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";
import dress from "../../assets/dress-cu.png";
import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function PromotionSecond() {
  const classes = useStyles();
  return (
    <Box className={classes.promotionContainer}>
      <Box className={classes.promotionText}>
        <Typography variant="h6">who is</Typography>
        <Typography variant="h2">MONA-LISA</Typography>
        <Typography variant="body2">by</Typography>
        <Typography variant="h2">PIATELLI</Typography>
      </Box>
      <Box>
        <img
          src={dress}
          className={`${classes.customCursor} ${classes.imgStyling}`}
          draggable="false"
          alt="A Le Scandinave promotion."
        />
      </Box>
    </Box>
  );
}

const useStyles: any = makeStyles({
  promotionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  imgStyling: {
    width: "50vw",
  },
  promotionText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    color: "white",
    cursor: `url(${alternativeCursor}), auto`,
  },
  customCursor: {
    cursor: `url(${alternativeCursor}) 9 7, auto`,
  },
});

export default PromotionSecond;
