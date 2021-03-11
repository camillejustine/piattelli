import { Box, Link, TextField, Typography } from '@material-ui/core';
import { Component, CSSProperties } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingCart } from '@material-ui/icons';
import 'animate.css/animate.css';
interface IState {
  searchClicked: boolean;
}

class Header extends Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      searchClicked: false,
    };

    this.onSearchClick = this.onSearchClick.bind(this);
    this.onLeavingSearchField = this.onLeavingSearchField.bind(this);
  }

  onSearchClick() {
    this.setState({ searchClicked: true });
  }

  onLeavingSearchField() {
    this.setState({ searchClicked: false });
  }

  render() {
    console.log(this.state.searchClicked);

    return (
      <Typography>
        <Box style={rootStyle}>
          <Link>New Collection</Link>
          <Link>All Bags</Link>
          <Typography variant="h5">
            <Link>PIATELLI</Link>
          </Typography>
          <Link>Timless Favorites</Link>
          <Box display="flex" m="1rem">
            <Box onClick={this.onSearchClick} m="1rem">
              {!this.state.searchClicked ? (
                <SearchIcon />
              ) : (
                <form className="animate__animated animate__fadeIn">
                  <TextField
                    autoFocus
                    onBlur={this.onLeavingSearchField}
                    id="standard-basic"
                    label="Standard"
                  />
                </form>
              )}
            </Box>
            <Box m="1rem">
              <ShoppingCart />
            </Box>
          </Box>
        </Box>
      </Typography>
    );
  }
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
