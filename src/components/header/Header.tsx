import { Box, Link, TextField, Typography, Badge } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { Component, CSSProperties, useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingCart as CartIcon } from "@material-ui/icons";
import "animate.css/animate.css";
import Cart from "./Cart";
import { makeStyles } from "@material-ui/styles";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
 
function Header() {
  const [searchClicked, setSearchClicked] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { products } = useContext(ProductsContext);
  const { cart } = useContext(CartContext);
  const classes = useStyles();

  const amountOfItemsInCart = cart.reduce((ack: number, item) => ack + item.quantity, 0);

  function hideCart() {
    setIsCartVisible(false);
  }

  return (
    <Box className={classes.rootStyle}>
      <Link href="/new-collection" color="inherit" underline="none">
        <Typography variant="body2">New Collection </Typography>
      </Link>
      <Link href="/catalogue" color="inherit" underline="none">
        <Typography variant="body2">All Bags </Typography>{" "}
      </Link>

      <Link href="/" color="inherit" underline="none">
        <Typography variant="h1">PIATTELLI</Typography>
      </Link>

      <Link href="/catalogue" color="inherit" underline="none">
        <Typography variant="body2">Timless Favorites</Typography>{" "}
      </Link>
      <Box className={classes.iconWrapper}>
        <Box onClick={() => setSearchClicked(true)} m="1rem">
          {!searchClicked ? (
            <SearchIcon />
          ) : (
            <form className="animate__animated animate__fadeIn">
              <Autocomplete
                freeSolo
                disableClearable
                options={products.map((option) => option.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    style={width}
                    autoFocus
                    id="search-basic"
                    label="Search"
                    margin="normal"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                    onBlur={() => setSearchClicked(false)} 
                  />)
                }
              />
            </form>
          )}
        </Box>
        <Box m="1rem">
          {/* Icon */}
          <CartIcon
            onClick={() => {
              setIsCartVisible(!isCartVisible);
            }}
          />
          <Badge
            badgeContent={amountOfItemsInCart}
            color="primary"
            className="animate__animated animate__bounceIn"
            onClick={() => {
              setIsCartVisible(!isCartVisible);
            }}
          ></Badge>

          {/* Cart view */}
          <Cart onHide={hideCart} isVisible={isCartVisible} />
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  rootStyle: {
    top: 0,
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "fixed",
    zIndex: 5,
    width: "100vw",
    height: "8.5rem",
    backgroundColor: "white",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
  },
});

const width: CSSProperties = {
  width: "10rem"
}

export default Header;
