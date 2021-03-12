import { Box, Link, TextField, Typography } from "@material-ui/core";
import { Component, CSSProperties, useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingCart as CartIcon } from "@material-ui/icons";
import "animate.css/animate.css";
import Cart from "./Cart";
import { makeStyles } from "@material-ui/styles";

function Header() {
  const [searchClicked, setSearchClicked] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const classes = useStyles();

  function hideCart() {
    setIsCartVisible(false);
  }

  return (
    <Box className={classes.rootStyle}>
      <Link href="#" color='inherit' underline='none'>
        <Typography variant="body1">New Collection </Typography>
      </Link>
      <Link href="#" color='inherit' underline='none'>
        <Typography variant="body1">All Bags </Typography>{" "}
      </Link>

      <Link href="/" color='inherit' underline='none'>
        <Typography variant="h1">PIATTELLI</Typography>
      </Link>

      <Link href="#" color='inherit' underline='none'>
        <Typography variant="body1">Timless Favorites</Typography>{" "}
      </Link>
      <Box className={classes.iconWrapper}>
        <Box onClick={() => setSearchClicked(true)} m="1rem">
          {!searchClicked ? (
            <SearchIcon />
          ) : (
            <form className="animate__animated animate__fadeIn">
              <TextField
                autoFocus
                onBlur={() => setSearchClicked(false)}
                id="search-basic"
                label="Search"
              />
            </form>
          )}
        </Box>
        <Box m="1rem">
          {/* Icon */}
          <CartIcon
            onClick={() => {
              setIsCartVisible(true);
              console.log("clicked");
              console.log(isCartVisible);
            }}
          />
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

export default Header;
