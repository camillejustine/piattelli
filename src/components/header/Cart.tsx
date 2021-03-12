import { Box, Button, Typography } from "@material-ui/core";
import { CSSProperties, makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import { ShoppingCart as CartIcon } from "@material-ui/icons";
import React, { Component, useState } from "react";
import { flexbox } from "@material-ui/system";

interface IProps {
  isVisible: boolean;
  onHide: () => void;
}

function Cart(props: IProps) {
  const classes = useStlyes();

  return (
    <>
      {props.isVisible ? (
        <Box
          className={
            "animate__animated animate__slideInRight" && classes.rootStyle
          }
        >
          <Box className={classes.topContent}>
            <CloseIcon onClick={props.onHide}></CloseIcon>
            <Typography variant="body1">Your Items</Typography>
            <CartIcon></CartIcon>
          </Box>
          <Box>{/* PUTT ALL PROJECT IN CART HERE */}</Box>

          <Box className={classes.bottomContentWrapper}>
            <Box className={classes.bottomContent}>
              <Typography className={classes.keepLeft} variant="h6">Total: 300000</Typography>
              <Button className={classes.keepRight} variant="contained">Checkout</Button>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

const useStlyes = makeStyles({
  rootStyle: {
    position: "fixed",
    width: "20rem",
    height: "40rem",
    top: 0,
    right: 0,
    backgroundColor: "white",
    border: "1px solid black",
    display: 'flex',
    flexDirection: 'column'
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
    position: 'absolute',
    bottom: 0,
    borderTop: 'solid 1px black',
    padding: '1rem'
  },
  keepLeft: {
    left: 0
  },
  keepRight: {
    right: 0
  }
});

export default Cart;
