
import { Box, Link, TextField, Typography } from "@material-ui/core";
import { Component, CSSProperties, useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingCart as CartIcon } from "@material-ui/icons";
import "animate.css/animate.css";
import Cart from "./Cart";


function Header() {
  const [searchClicked, setSearchClicked] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function hideCart() {
    setIsCartVisible(false);
  }


    return (
        <Box style={rootStyle}>
          <Link>New Collection</Link>
          <Link>All Bags</Link>

          <Link>
            <Typography variant='h1'>
              PIATELLI
            </Typography>
          </Link>

          <Link>Timless Favorites</Link>
          <Box display="flex" m="1rem">
            <Box onClick={() => setSearchClicked(true)} m="1rem">
              {!searchClicked 
              ? (
                <SearchIcon />
              ) : (

                <form className="animate__animated animate__fadeIn">
                  <TextField
                    autoFocus
                    onBlur={() => setSearchClicked(false)}
                    id="standard-basic"
                    label="Standard"
                  />

                </form>
              )}
            </Box>
            <Box m="1rem">
              {/* Icon */}
              <CartIcon onClick={ () => {
                setIsCartVisible(true);
                console.log('clicked');
                console.log(isCartVisible);
                
              }}/>
              {/* Cart view */}
              <Cart onHide={hideCart} isVisible={isCartVisible}/>
            </Box>
          </Box>
        </Box>
    );
  }


const rootStyle: CSSProperties = {
  top: 0,
  margin: '0',
  padding: '0',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 5,
  width: '100vw',
  height: '8.5rem',
  backgroundColor: 'white',
};

export default Header;
