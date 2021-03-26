// import { Box } from "@material-ui/core";
import { CSSProperties } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import alternativeCursor from "../../assets/alternativeCursor.png";
import leScandinave from "../../assets/le-scandinave.png";
import { makeStyles } from "@material-ui/core/styles";

function Promotion() {
  const classes = useStyles();
  return (
    <Box className={classes.promotionContainer}>
      <Box className={classes.promotionText}>
        <Typography variant="h6">Explore</Typography>
        <Typography variant="h3">LE SCANDINAVE</Typography>
      </Box>
      <Box>
        <img
          src={leScandinave}
          className={`${classes.customCursor} ${classes.imgStyling}`}
          draggable="false"
          alt="A Le Scandinave promotion."
        />
      </Box>
    </Box>
  );
}

const useStyles: any = makeStyles((theme) => ({
  promotionContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      // height: "40rem",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  promotionText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    color: "white",
    cursor: `url(${alternativeCursor}), auto`,
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end",
    },
  },
  imgStyling: {
    width: "50vw",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  customCursor: {
    cursor: `url(${alternativeCursor}) 9 7, auto`,
  },
}));

export default Promotion;
