import { Box, Button, Link, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import { ShoppingCart as CartIcon } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import {CartContext} from '../context/CartContext';
import { useContext } from "react";
//import { flexbox } from "@material-ui/system";


interface IProps {
  isVisible: boolean;
  onHide: () => void;
}

function Cart(props: IProps) {
  const { cart, removeProductFromCart } = useContext(CartContext);
  const classes = useStyles();
  const total = cart.reduce((n: any, {price}: any) => n + price, 0)
  //hahahaha

  return (
    <>
      {props.isVisible ? (
          <Box
          className={`animate__animated animate__slideInRight ${classes.rootStyle}`}>
            <Box className={classes.topContent}>
              <CloseIcon onClick={props.onHide}></CloseIcon>
              <Typography variant="body1">Your Items</Typography>
                <CartIcon />
            </Box>
            <Box>{
              cart.map((product: any) => (
                <Box className={classes.cartItems}>
                  <Link href={`/products/${product.name}`}>
                    <img src={product.preview} width='100rem' height='100rem'/>
                  </Link>
                  <div className={classes.cartItemDetail}>
                    <span>{product.name}</span>
                    <span>Price: {product.price}</span>
                  </div>
                <CloseIcon onClick={
                  () => {
                    removeProductFromCart(product.uniqueId)
                  }
                }></CloseIcon>
                </Box>
              ))
            }
            </Box>
            <Box className={classes.bottomContentWrapper}>
              <Box className={classes.bottomContent}>
                <Typography className={classes.keepLeft} variant="h6">
                  Total: {total}
                </Typography>
                <Button className={classes.keepRight} variant="contained">
                  <Link href='/checkout' underline='none' color='inherit'>Checkout</Link>
                </Button>
              </Box>
            </Box>
          </Box>
      ) : null}
    </>
  );
}

const useStyles = makeStyles({
  rootStyle: {
    position: "fixed",
    width: "20rem",
    top: 0,
    right: 0,
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    margin: '0.2rem'
  },
  topContent: {
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    margin: "2rem 1rem",
    borderBottom: "solid 1px black",
  },
  bottomContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  bottomContentWrapper: {
    bottom: 0,
    borderTop: "solid 1px black",
    margin: "1rem 1rem",
    paddingTop: '1rem'
  },
  keepLeft: {
    left: 0,
  },
  keepRight: {
    right: 0,
  },
  cartItems: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2rem',
    padding: '0.5rem',
  },
  cartItemDetail: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'
  }
});

export default Cart;
