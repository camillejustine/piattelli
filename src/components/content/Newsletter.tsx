import { Typography, Box, Button, TextField } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";

function Newsletter() {
  const [isClicked, setIsClicked] = useState(false);
  const classes = useStyles();

  return (
    <Box className={classes.textContainer}>
      {!isClicked ? (
        <Typography
          onClick={() => setIsClicked(true)}
          variant="h4"
          className={`${classes.customCursor} animate__animated animate__fadeIn`}
        >
          Subscribe to our newsletter
        </Typography>
      ) : (
        <TextField
          autoFocus
          onBlur={() => setIsClicked(false)}
          className={`${classes.textField} animate__animated animate__fadeIn`}
          id="filled-disabled"
          label="Email"
          // defaultValue="Hello World"
        />
      )}
    </Box>
  );
}

const useStyles: any = makeStyles({
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem",
    height: "3rem",
  },
  customCursor: {
    cursor: `url(${alternativeCursor}) 9 7, auto`,
    userSelect: "none",
  },
  textField: {
    width: "30rem",
    borderColor: "black",
    color: 'black',
    // height: '7rem'
    '& .MuiInput-underline:after': {
      borderColor: 'black',
    },
    'label + &': {
      color:'black'
    },
  },
});

export default Newsletter;
