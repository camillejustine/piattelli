import { Box, makeStyles, TextField, Typography } from "@material-ui/core";
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
  setCountry: (event:string) => void; 
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
              required
              name="name"
              value={props.fullName}
              error={props.fullName === ""}
              id="standard-required"
              label="Name"
              onChange={(event) => props.setFullName(event.target.value)}
              defaultValue={props.fullName}
            />
            <TextField
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
              required
              id="standard-required"
              label="Adress"
              name='adress'
              error={props.adress === ""}
              onChange={(event) => props.setAdress(event.target.value)}
              defaultValue={props.adress}
            />
            <TextField
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
              required
              id="standard-required"
              label="Zip code"
              error={props.zipCode === ""}
              onChange={(event) => props.setZipCode(event.target.value)}
              defaultValue={props.zipCode}
            />
            <TextField
              required
              id="standard-required"
              label="Country"
              error={props.country === ""}
              onChange={(event) => props.setCountry(event.target.value)}
              defaultValue={props.country}
            />
            <TextField
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

const useStyles = makeStyles({
  root: {
    marginTop: "8.5rem",
    height: "50rem",
    border: "solid 2px black",
    position: "relative",
  },
  buttonWrapper: {
    position: "absolute",
    display: "flex",
    bottom: "1rem",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "3rem",
    flexDirection: "row",
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
  paymentMethodWrapper: {
    width: "15rem",
    height: "8rem",
    border: "solid 1px black",
    margin: "1rem",
    padding: "2rem",
    borderRadius: 5,
  },
  paymentLogoSize: {
    width: "15rem",
    height: "8rem",
  },
  deliveryBox: {
    margin: "1rem",
    padding: "0.5rem",
    border: "1px solid black",
    borderRadius: 5,
    cursor: "pointer",
  },
  cartContentWrapper: {
    overflow: "auto",
  },
  cartContent: {
    margin: "1rem 2rem",
    display: "flex",
  },
  productInfo: {
    marginLeft: "1rem",
  },
});
