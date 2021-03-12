import {
  Box,
  Button,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import swishLogo from "../../assets/swish.png";
import cardLogo from "../../assets/card.png";
import bitcoinLogo from "../../assets/bitcoin.png";

function getSteps() {
  return [
    "Shopping Cart",
    "Personal Details",
    "Payment Options",
    "Order Confirmation",
  ];
}

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [paymentOption, setPaymentOption] = useState<string>();
  const steps = getSteps();
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <Typography> PRODUCTS IN CART HERE</Typography>;
      case 1:
        return (
          <>
            <Typography className={classes.centerFlex} variant="h6">
              Fill in your personal detail below:
            </Typography>
            <Box>
              <form
                className={classes.contentWrapper}
                noValidate
                autoComplete="off"
              >
                <Box className={classes.flexColumn}>
                  <TextField
                    required
                    id="standard-required"
                    label="Full Name"
                    // defaultValue="Full Name"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Email"
                    // defaultValue="Email"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Adress"
                    // defaultValue="Adress"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Phone number"
                    // defaultValue="Phone number"
                  />
                </Box>
                <Box className={classes.flexColumn}>
                  <TextField
                    required
                    id="standard-required"
                    label="Zip code"
                    // defaultValue="Zip code"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Country"
                    // defaultValue="Country"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="City"
                    // defaultValue="Hello World"
                  />
                </Box>
              </form>
            </Box>
          </>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h5" className={classes.centerFlex}>
              Choose Payment Method
            </Typography>
            <Box className={classes.contentWrapper}>
              <Box
                className={classes.paymentMethodWrapper}
                onClick={() => setPaymentOption("swish")}
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
                onClick={() => setPaymentOption("card")}
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
                onClick={() => setPaymentOption("bitcoin")}
              >
                <Typography className={classes.centerFlex} variant="h6">GIFTCARD</Typography>
              </Box>
            </Box>
            <Box>
              {paymentOption === "swish" ? (
                <TextField
                  required
                  id="standard-required"
                  label="Phone number for swish"
                  // defaultValue="Email"
                />
              ) : null}
              {paymentOption === "card" ? (
                <>
                  <TextField
                    required
                    id="standard-required"
                    label="Name on card"
                    // defaultValue="Email"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Card number"
                    // defaultValue="Email"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="CVC"
                    // defaultValue="Email"
                  />
                </>
              ) : null}
              {paymentOption === "bitcoin" ? (
                <TextField
                  required
                  id="standard-required"
                  label="Giftcard number"
                  // defaultValue="Email"
                />
              ) : null}
            </Box>
          </Box>
        );
      case 3:
        return (
            <Typography className={classes.centerFlex}>CONGRATIOFUCKINGLATIONS <br/>

            YOU JUST BOUGHT BAGS WORTH MORE THAN MY CAR <br/>
            
            YOU’LL GET AN INVOICE ON YOUR EMAIL</Typography>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <Box className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === steps.length ? (
          <Box>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        ) : (
          <Box>
            <Box>{getStepContent(activeStep)}</Box>
            <Box>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Complete" : "Next"}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: "8.5rem",
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
    alignItems: 'center'
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
});
export default Checkout;
