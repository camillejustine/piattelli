import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

interface IProps {
  email: string | undefined;
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
      <Typography variant='h6' className={classes.centerFlex}>
        Thank you for your purchase. An email with more information has been
        send to {props.email}.
      </Typography>
      <Typography variant='body1' className={classes.centerFlex}>Invoice ID: {invoiceID} </Typography>
      <Box className={classes.centerFlex}>
        <Box className={classes.cartContentWrapper}>
          {props.payedProducts.map((product: any) => (
            <Box className={classes.cartContent}>
              <img src={product.preview} width="100rem" height="100rem" />
              <div className={classes.productInfo}>
                <Typography variant="body1">{product.name}</Typography>
                <Typography variant="body2">Price: {product.price}</Typography>
              </div>
            </Box>
          ))}
          <Typography>
            Total price for purchase: {props.total}kr + shipping cost: (
            {props.deliveryOption === "pn" ? "0kr" : null}
            {props.deliveryOption === "budbee" ? "69kr" : null}
            {props.deliveryOption === "instabox" ? "39kr" : null})
          </Typography>
        </Box>
        <Box>
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
  );
}

const useStyles = makeStyles({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

export default OrderComfirmation;
