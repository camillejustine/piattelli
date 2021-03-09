import { Box, Link, Typography } from "@material-ui/core";
import { Component, CSSProperties } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingCart } from "@material-ui/icons";
class Header extends Component {
  render() {
    return (
      <Typography>
        <Box style={rootStyle}>
          <Link>New Collection</Link>
          <Link>All Bags</Link>
          <Link>
            <h1>Piatelli</h1>
          </Link>
          <Link>Timless Favorites</Link>
          <Box display="flex" m="1rem">
            <Box m="1rem">
              <Link>
                <SearchIcon />
              </Link>
            </Box>
            <Box m="1rem">
              <Link>
                <ShoppingCart />
              </Link>
            </Box>
          </Box>
        </Box>
      </Typography>
    );
  }
}

const rootStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}


export default Header;
