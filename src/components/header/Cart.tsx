import { Box, Typography } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import CloseIcon from '@material-ui/icons/Close';
import { ShoppingCart as CartIcon } from "@material-ui/icons";
import React, { Component, useState } from "react";
import { flexbox } from '@material-ui/system';


interface IProps {
  isVisible: boolean,
  onHide: () => void,
}

function Cart(props: IProps) {

  return (
    <Box>
      {props.isVisible ? (
        <Box
          style={rootStyle}
          className="animate__animated animate__slideInRight"
        >
          <Box display='flex'>
            <Box justifyContent='space-between'>
            <CloseIcon onClick={props.onHide} ></CloseIcon>
            <CartIcon></CartIcon>
            </Box>
            <Typography variant="body1">testing</Typography>
          </Box>
          <Box>

          </Box>
        </Box>
      ) : null}
    </Box>
  );
}

const rootStyle: CSSProperties = {
  position: "fixed",
  width: "20rem",
  height: "40rem",
  top: 0,
  right: 0,
  backgroundColor: "white",
  border: "1px solid black",
};

export default Cart;
