import {
  Box,
  makeStyles,
  TextField,
  Typography,
  withWidth,
} from "@material-ui/core";
import React from "react";

interface IProps {
  fullName: string | undefined;
  setFullName: (event: string) => void;
  email: string | undefined;
  setEmail: (event: string) => void;
  adress: string | undefined;
  setAdress: (event: string) => void;
  phoneNumber: string | undefined;
  setPhoneNumber: (event: string) => void;
  zipCode: string | undefined;
  setZipCode: (event: string) => void;
  country: string | undefined;
  setCountry: (event: string) => void;
  city: string | undefined;
  setCity: (event: string) => void;
}

function PersonalDetails(props: IProps) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.centerFlex} variant="h6">
        Fill in your personal detail below:
      </Typography>
      <Box>
        <form className={classes.contentWrapper} autoComplete="off">
          <Box className={classes.flexColumn}>
            <TextField
              className={classes.textField}
              required
              name="fname"
              value={props.fullName}
              error={props.fullName === ""}
              id="standard-required"
              label="Full Name"
              onChange={(event) => props.setFullName(event.target.value)}
              defaultValue={props.fullName}
            />
            <TextField
              className={classes.textField}
              required
              name="email"
              type="email"
              error={props.email === ""}
              id="standard-required"
              label="Email"
              onChange={(event) => props.setEmail(event.target.value)}
              defaultValue={props.email}
            />
            <TextField
              className={classes.textField}
              required
              id="standard-required"
              label="Adress"
              name="street"
              error={props.adress === ""}
              onChange={(event) => props.setAdress(event.target.value)}
              defaultValue={props.adress}
            />
            <TextField
              className={classes.textField}
              required
              id="standard-required"
              label="Phone number"
              type="number"
              error={props.phoneNumber === ""}
              onChange={(event) => props.setPhoneNumber(event.target.value)}
              defaultValue={props.phoneNumber}
            />
          </Box>
          <Box className={classes.flexColumn}>
            <TextField
              className={classes.textField}
              required
              id="standard-required"
              label="Zip code"
              error={props.zipCode === ""}
              onChange={(event) => props.setZipCode(event.target.value)}
              defaultValue={props.zipCode}
            />
            <TextField
              className={classes.textField}
              required
              id="standard-required"
              label="Country"
              error={props.country === ""}
              onChange={(event) => props.setCountry(event.target.value)}
              defaultValue={props.country}
            />
            <TextField
              className={classes.textField}
              required
              id="standard-required"
              label="City"
              error={props.city === ""}
              onChange={(event) => props.setCity(event.target.value)}
              defaultValue={props.city}
            />
          </Box>
        </form>
      </Box>
    </>
  );
}
export default PersonalDetails;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "8.5rem",
    height: "50rem",
    border: "solid 2px black",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: '100rem',
    },
  },

  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "3rem",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
    },
  },
  flexColumn: {
    flexDirection: "column",
    display: "flex",
  },
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  paymentLogoSize: {
    width: "15rem",
    height: "8rem",
  },
 
  textField: {
    margin: "0.5rem 2rem",
    width: "20rem",
    [theme.breakpoints.down("xs")]: {
      width: '10rem',
    },
  },
}));
