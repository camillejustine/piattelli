import React from "react";
import { Box, CircularProgress, makeStyles, TextField, Typography } from "@material-ui/core";
import swishLogo from "../../assets/swish.png";
import cardLogo from "../../assets/card.png";

interface IProps {
  deliveryOption: string | undefined;
  setPaymentOption: (value: string) => void;
  setSwishNumber: (value: string) => void;
  setNameOnCard: (value: string) => void;
  setCardNumber: (value: string) => void;
  setCvcNumber: (value: string) => void;
  setGiftCard: (value: string) => void;
  paymentOption: string | undefined;
  phoneNumber: string | undefined;
  fullName: string | undefined;
  total: number;
  clearValues: () => void;
  isLoading: boolean;
}

function PaymentMethod(props: IProps) {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Typography variant="h5" className={classes.centerFlex}>
          Choose Payment Method
        </Typography>
        {props.deliveryOption === "pn" ? (
          <Typography className={classes.centerFlex}>
            Total price with shipping: {props.total}kr
          </Typography>
        ) : null}
        {props.deliveryOption === "budbee" ? (
          <Typography className={classes.centerFlex}>
            Total price with shipping: {props.total + 69}kr
          </Typography>
        ) : null}
        {props.deliveryOption === "instabox" ? (
          <Typography className={classes.centerFlex}>
            Total price with shipping: {props.total + 39}kr
          </Typography>
        ) : null}
        <Box className={classes.contentWrapper}>
          <Box
            className={classes.paymentMethodWrapper}
            onClick={() => {
              props.setPaymentOption("swish");
              props.clearValues();
            }}
          >
            <img
              className={classes.paymentLogoSize}
              draggable="false"
              src={swishLogo}
              alt="swish"
            />
          </Box>
          <Box
            className={classes.paymentMethodWrapper}
            onClick={() => {
              props.setPaymentOption("card");
              props.clearValues();
            }}
          >
            <img
              className={classes.paymentLogoSize}
              draggable="false"
              src={cardLogo}
              alt="card"
            />
          </Box>
          <Box
            className={classes.paymentMethodWrapper}
            onClick={() => {
              props.setPaymentOption("giftcard");
              props.clearValues();
            }}
          >
            <Typography className={classes.centerFlex} variant="h6">
              GIFTCARD
            </Typography>
          </Box>
        </Box>
        <Box>
          {props.paymentOption === "swish" ? (
            <Box className={classes.centerFlex}>
              <TextField
                required
                autoFocus
                id="standard-required"
                label="Phone number for swish"
                defaultValue={props.phoneNumber}
                onChange={(event) => {
                  props.setSwishNumber(event.target.value);
                }}
                onBlur={(event) => {
                  props.setSwishNumber(event.target.value);
                }}
              />
            </Box>
          ) : null}
          {props.paymentOption === "card" ? (
            <Box className={classes.centerFlex}>
              <TextField
                autoFocus
                required
                id="standard-required"
                label="Name on card"
                defaultValue={props.fullName}
                onChange={(event) => {
                  props.setNameOnCard(event.target.value);
                }}
                onBlur={(event) => {
                  props.setNameOnCard(event.target.value);
                }}
              />
              <TextField
                required
                id="standard-required"
                label="Card number"
                onChange={(event) => {
                  props.setCardNumber(event.target.value);
                }}
                // defaultValue="Email"
              />
              <TextField
                required
                id="standard-required"
                label="CVC"
                onChange={(event) => {
                  props.setCvcNumber(event.target.value);
                }}

                // defaultValue="Email"
              />
            </Box>
          ) : null}
          {props.paymentOption === "giftcard" ? (
            <Box className={classes.centerFlex}>
              <TextField
                required
                id="standard-required"
                label="Giftcard number"
                onChange={(event) => {
                  props.setGiftCard(event.target.value);
                }}

                // defaultValue="Email"
              />
            </Box>
          ) : null}
        </Box>
        <Box className={`${classes.centerFlex} ${classes.loadingAnimation}`}>
       {props.isLoading ? <CircularProgress /> : null } 
        </Box>
      </Box>
    </>
  );
}

export default PaymentMethod;

const useStyles = makeStyles({
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
  loadingAnimation: {
    margin: '5rem',
  }


});
