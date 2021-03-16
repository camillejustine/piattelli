import { Grid, Box, Typography, Button } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import { CSSProperties, useState, useContext } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
interface IProps {
  isLarge: boolean;
  getProduct: (value: {}) => void;
}

function Catalogue(props: IProps) {
  const { products } = useContext(ProductsContext);
  const [isLarge, setIsLarge] = useState(props.isLarge);
  const previewCatalogue = products.slice(1, 7);
  const cartItems = JSON.parse(localStorage.getItem('cart')!) || [];

  console.log(cartItems)

  return (
    <Box>
      {isLarge ? (
        <Grid style={gridWidth}>
          <Grid container item xs={12} spacing={1} style={innerGridStyle}>
            {products.map((product) => (
              <Link to={product.name}>
                <Typography variant="h6">
                  <Box
                    style={boxStyle}
                    onClick={() => {
                      props.getProduct(product);
                    }}
                  >
                    <img
                      src={product.preview}
                      alt=" "
                      width="400"
                      height="400"
                    />
                    <span>{product.name}</span>
                    <span>{product.price}kr</span>
                  </Box>
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      ) : (
        //   isLarge: False will render this code vvvv
        <Grid style={gridWidth}>
          <Grid container item xs={12} spacing={1} style={innerGridStyle}>
            {previewCatalogue.map((product) => (
              <Box style={boxStyle}>
                <Link to={product.name}>
                  <Typography variant="h6">
                    <img
                      onClick={() => {
                        props.getProduct(product);
                        
                      }}
                      src={product.preview}
                      style={customCursor}
                      draggable={false}
                      alt="Bags from Pialetti"
                      width="400"
                      height="400"
                    />
                    </Typography> 
                    </Link>
                    <Button 
                        style={button}
                        onClick={       
                          () => {
                            Object.assign(product,{newValue: 'value'})
                            cartItems.push(product);
                            localStorage.setItem('cart', JSON.stringify(cartItems)); 
                          }
                        }>
                      <Typography variant="button">Add to cart</Typography>
                    </Button>
              </Box>
            ))}
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

const gridWidth: CSSProperties = {
  maxWidth: "1400px",
  margin: "auto",
};

const innerGridStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const boxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
  textAlign: "center",
};

const customCursor: CSSProperties = {
  cursor: `url(${alternativeCursor}) 9 7, auto`,
};

const button: CSSProperties = {
  height: "4rem",
  width: "8rem",
  border: "solid 1.5px black",
  borderRadius: "0%",
  textDecoration: 'none',
}
export default Catalogue;
