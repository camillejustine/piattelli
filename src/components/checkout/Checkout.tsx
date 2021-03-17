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
import React, { useContext, useState } from "react";
import swishLogo from "../../assets/swish.png";
import cardLogo from "../../assets/card.png";
import moment from "moment";
import CloseIcon from "@material-ui/icons/Close";
import PersonalDetails from "./PersonalDetails";
import DeliveryOptions from "./DeliveryOptions";
import PaymentMethod from "./PaymentMethod";
import { CartContext } from "../context/CartContext";


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
  const isPaymentValid =
    paymentOption && (isCardValid || giftCard || swishNumber);

  function clearValues() {
    setCardNumber(undefined);
    setSwishNumber(undefined);
    setCvcNumber(undefined);
    setGiftCard(undefined);
  }
  // Styling
  const classes = useStyles();

  //get content of cart from context/ls
  const { cart, removeProductFromCart } = useContext(CartContext);
  const total = cart.reduce((n: any, { price }: any) => n + price, 0);

  // changes to the stepper
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };


  //Cases tur
  //Each case is one step on the stepper
  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <Typography variant="h5" className={classes.centerFlex}>
              Products in cart
            </Typography>
            <Typography variant="body1" className={classes.centerFlex}>
              Total: {total}kr
            </Typography>
            <Box className={classes.cartContentWrapper}>
              {cart.map((product: any) => (
                <Box className={classes.cartContent}>
                  <CloseIcon
                    onClick={() => {
                      removeProductFromCart(product.uniqueId);
                    }}
                  ></CloseIcon>
                  <img src={product.preview} width="100rem" height="100rem" />
                  <div className={classes.productInfo}>
                    <Typography variant="body1">{product.name}</Typography>
                    <Typography variant="body2">
                      Price: {product.price}
                    </Typography>
                  </div>
                </Box>
              ))}
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <Box>
              <PersonalDetails
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                adress={adress}
                setAdress={setAdress}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                zipCode={zipCode}
                setZipCode={setZipCode}
                country={country}
                setCountry={setCountry}
                city={city}
                setCity={setCity}
              />
              <Box>
                <DeliveryOptions
                  deliveryOption={deliveryOption}
                  setDeliveryOption={setDeliveryOption}
                />
              </Box>
            </Box>
          </>
        );
      case 2:
        return (
          <PaymentMethod
            deliveryOption={deliveryOption}
            setPaymentOption={setPaymentOption}
            setSwishNumber={setSwishNumber}
            setNameOnCard={setNameOnCard}
            setCardNumber={setCardNumber}
            setCvcNumber={setCvcNumber}
            setGiftCard={setGiftCard}
            paymentOption={paymentOption}
            phoneNumber={phoneNumber}
            fullName={fullName}
            total={total}
            clearValues={clearValues}
          />
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
    padding: '0 10rem',
    marginTop: "8.5rem",
    height: "50rem",
    border: "solid 2px black",
    position: "relative",
  },
  buttonWrapper: {
    position: "absolute",
    display: "flex",
    bottom: "1rem",
    width: "80%",
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
export default Checkout;
