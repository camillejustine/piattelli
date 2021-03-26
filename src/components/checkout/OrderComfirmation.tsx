import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

interface IProps {
  email: string | undefined;
  name: string | undefined;
  adress: string | undefined;
  phoneNumber: string | undefined;
  zipCode: string | undefined;
  country: string | undefined;
  city: string | undefined;
  payedProducts: any;
  deliveryOption: string | undefined;
  total: number | undefined;
}

function OrderComfirmation(props: IProps) {
  const classes = useStyles();

  function makeId(length: number) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const invoiceID = makeId(10);

  return (
    <Box>
      <Box className={classes.textAlignCenterResponsive}>
        <Typography variant="h6" className={classes.centerFlex}>
          Thank you for your purchase.
        </Typography>
        <Typography variant="body2" className={classes.centerFlex}>
          An email with more information has been send to {props.email}.
        </Typography>
        <Typography variant="body1" className={classes.centerFlex}>
          Invoice ID: {invoiceID}{" "}
        </Typography>
      </Box>
      <Box className={`${classes.centerFlex} ${classes.columnResponsive}`}>
        <Box>
          <Box className={`${classes.cartContentWrapper} ${classes.margin2}`}>
            {props.payedProducts.map((product: any) => (
              <Box className={`${classes.cartContent}`}>
                <img src={product.preview} width="100rem" height="100rem" />
                <div className={classes.productInfo}>
                  <Typography variant="body1">{product.name}</Typography>
                  <Typography variant="body1">x{product.quantity}</Typography>
                  <Typography variant="body2">
                    Price: {product.price}
                  </Typography>
                </div>
              </Box>
            ))}
          </Box>
          <Typography className={classes.margin2}>
            Total price: {props.total}kr + shipping cost: (
            {props.deliveryOption === "pn" ? "0kr" : null}
            {props.deliveryOption === "budbee" ? "69kr" : null}
            {props.deliveryOption === "instabox" ? "39kr" : null})
          </Typography>
        </Box>
        <Box>
          <Box className={classes.margin2}>
            <Typography variant="h6">Customer:</Typography>
            <Typography>Name: {props.name}</Typography>
            <Typography>
              Adress: {props.adress}, {props.zipCode} {props.city},{" "}
              {props.country}
            </Typography>
            <Typography>Telefon: {props.phoneNumber}</Typography>
          </Box>
          <Box className={classes.margin2}>
            {props.deliveryOption === "pn" ? (
              <Typography>
                Delivery method: <br /> Delivery to closest Postombud with Post
                Nord.
              </Typography>
            ) : null}
            {props.deliveryOption === "budbee" ? (
              <Typography>
                Delivery method: <br /> Home delivery with Budbee.
              </Typography>
            ) : null}
            {props.deliveryOption === "instabox" ? (
              <Typography>
                Delivery method: <br /> Delivery to closest Instabox.
              </Typography>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textAlignCenterResponsive: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: '0.3rem'
    },
  },
  columnResponsive: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
      padding: '1rem'
    },
  },
  cartContentWrapper: {
    overflow: "auto",
    height: "25rem",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
      border: " 4px solid transparent",
      borderRadius: "8px",
      backgroundClip: "padding-box",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",

    },
    
  },
  cartContent: {
    margin: "1rem 0rem",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      margin: "0rem 0rem",
    },
  },
  productInfo: {
    marginLeft: "1rem",
  },
  margin2: {
    margin: "2rem",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem 0rem",
    },
  },
}));

export default OrderComfirmation;
