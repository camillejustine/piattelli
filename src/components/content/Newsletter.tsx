import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import alternativeCursor from "../../assets/alternativeCursor.png";

function Newsletter() {
  const classes = useStyles();
  return (
    <Box className={classes.textContainer}>
      <Typography variant="h4" className={classes.customCursor}>
        Subscribe to our newsletter
      </Typography>
    </Box>
  );
}

const useStyles: any = makeStyles({
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
  },
  customCursor: {
    cursor: `url(${alternativeCursor}) 9 7, auto`,
  },
});

export default Newsletter;
