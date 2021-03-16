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
import moment from "moment";

function getSteps() {
  return [
    "Shopping Cart",
    "Personal Details",
    "Payment Options",
    "Order Confirmation",
  ];
}

function Checkout() {
  //Step counter
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  //Form states
  const [fullName, setFullName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [adress, setAdress] = useState<string>();
  const [zipCode, setZipCode] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [city, setCity] = useState<string>();
  const [deliveryOption, setDeliveryOption] = useState<string>();

  const isFormValid =
    fullName &&
    phoneNumber &&
    deliveryOption &&
    email &&
    adress &&
    zipCode &&
    country &&
    city;

  // Payment state
  const [paymentOption, setPaymentOption] = useState<string>();
  const [nameOnCard, setNameOnCard] = useState<string>();
  const [cardNumber, setCardNumber] = useState<string>();
  const [cvcNumber, setCvcNumber] = useState<string>();
  const [giftCard, setGiftCard] = useState<string>();
  const [swishNumber, setSwishNumber] = useState(phoneNumber);

  const isCardValid = nameOnCard && cardNumber && cvcNumber;
  const isPaymentValid = paymentOption && (isCardValid || giftCard || swishNumber );

  // Styling
  const classes = useStyles();

  //vars for delivery dates
  let today = moment();
  let today2 = today.clone();
  let today3 = today.clone();
  let pnDel = today.add(3, "d").format("dddd, MMMM Do");
  let budbeeDel = today2.add(2, "d").format("dddd, MMMM Do");
  let instaDel = today3.add(1, "d").format("dddd, MMMM Do");

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
              <form className={classes.contentWrapper} autoComplete="off">
                <Box className={classes.flexColumn}>
                  <TextField
                    required
                    name="name"
                    value={fullName}
                    error={fullName === ""}
                    id="standard-required"
                    label="Name"
                    onChange={(event) => setFullName(event.target.value)}
                    // defaultValue="Full Name"
                  />
                  <TextField
                    required
                    name="email"
                    type="email"
                    error={email === ""}
                    id="standard-required"
                    label="Email"
                    onChange={(event) => setEmail(event.target.value)}

                    // defaultValue="Email"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Adress"
                    error={adress === ""}
                    onChange={(event) => setAdress(event.target.value)}

                    // defaultValue="Adress"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Phone number"
                    type="number"
                    error={phoneNumber === ""}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    // defaultValue="Phone number"
                  />
                </Box>
                <Box className={classes.flexColumn}>
                  <TextField
                    required
                    id="standard-required"
                    label="Zip code"
                    error={zipCode === ""}
                    onChange={(event) => setZipCode(event.target.value)}

                    // defaultValue="Zip code"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Country"
                    error={country === ""}
                    onChange={(event) => setCountry(event.target.value)}

                    // defaultValue="Country"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="City"
                    error={city === ""}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </Box>
              </form>
              <Box>
                <h5 className={classes.centerFlex}>Delivery Options</h5>
                <Box className={classes.centerFlex}>
                  <Box
                    onClick={() => setDeliveryOption("pn")}
                    className={classes.deliveryBox}
                  >
                    Post Nord: 2-5 days
                  </Box>
                  <Box
                    onClick={() => setDeliveryOption("budbee")}
                    className={classes.deliveryBox}
                  >
                    Budbee home delivery: 1-3 days
                  </Box>
                  <Box
                    onClick={() => setDeliveryOption("instabox")}
                    className={classes.deliveryBox}
                  >
                    Instabox: 1-3 days
                  </Box>
                </Box>
                <Box className={classes.centerFlex}>
                  {deliveryOption === "pn" ? (
                    <Box>
                      <Typography>Delivery cost: free</Typography>
                      <Typography>
                        Estimated delivery time: {String(pnDel)}
                      </Typography>
                    </Box>
                  ) : null}
                  {deliveryOption === "budbee" ? (
                    <Box>
                      <Typography>Delivery cost: 69kr</Typography>
                      <Typography>
                        Estimated delivery time: {String(budbeeDel)}
                      </Typography>
                    </Box>
                  ) : null}
                  {deliveryOption === "instabox" ? (
                    <Box>
                      <Typography>Delivery cost: 39kr</Typography>
                      <Typography>
                        Estimated delivery time: {String(instaDel)}
                      </Typography>
                    </Box>
                  ) : null}
                </Box>
              </Box>
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
                onClick={() => setPaymentOption("giftcard")}
              >
                <Typography className={classes.centerFlex} variant="h6">
                  GIFTCARD
                </Typography>
              </Box>
            </Box>
            <Box>
              {paymentOption === "swish" ? (
                <Box className={classes.centerFlex}>
                  <TextField
                    required
                    id="standard-required"
                    label="Phone number for swish"
                    defaultValue={phoneNumber}
                    onChange={(event) => {
                      setSwishNumber(event.target.value);
                    }}
                  />
                </Box>
              ) : null}
              {paymentOption === "card" ? (
                <Box className={classes.centerFlex}>
                  <TextField
                    required
                    id="standard-required"
                    label="Name on card"
                    defaultValue={fullName}
                    onChange={(event) => {
                      setNameOnCard(event.target.value);
                    }}
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Card number"
                    onChange={(event) => {
                      setCardNumber(event.target.value);
                    }}
                    // defaultValue="Email"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="CVC"
                    onChange={(event) => {
                      setCvcNumber(event.target.value);
                    }}

                    // defaultValue="Email"
                  />
                </Box>
              ) : null}
              {paymentOption === "giftcard" ? (
                <Box className={classes.centerFlex}>
                  <TextField
                    required
                    id="standard-required"
                    label="Giftcard number"
                    onChange={(event) => {
                      setGiftCard(event.target.value);
                    }}

                    // defaultValue="Email"
                  />
                </Box>
              ) : null}
            </Box>
          </Box>
        );
      case 3:
        return (
          <Typography className={classes.centerFlex}>
            CONGRATIOFUCKINGLATIONS <br />
            YOU JUST BOUGHT BAGS WORTH MORE THAN MY CAR <br />
            YOU’LL GET AN INVOICE ON YOUR EMAIL
          </Typography>
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
            <Box className={classes.buttonWrapper}>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box>{getStepContent(activeStep)}</Box>
            <Box className={classes.buttonWrapper}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {activeStep === 0 ? (
                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Complete" : "Next"}
                </Button>
              ) : null}
              {activeStep === 1 ? (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!isFormValid}
                >
                  {activeStep === steps.length - 1 ? "Complete" : "Next"}
                </Button>
              ) : null}
              {activeStep === 2 ? (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!isPaymentValid}
                >
                  {activeStep === steps.length - 1 ? "Complete" : "Next"}
                </Button>
              ) : null}
              {activeStep === 3 ? (
                <Button variant="contained">
                  {activeStep === steps.length - 1 ? "Complete" : "Next"}
                </Button>
              ) : null}
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
});
export default Checkout;
