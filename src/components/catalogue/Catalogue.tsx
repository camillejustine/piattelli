import { Grid, Box, Typography, Button } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import { CSSProperties, useState, useContext } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
interface IProps {
  isLarge: boolean;
  getProduct: (value: {}) => void;
}

function Catalogue(props: IProps) {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [isLarge, setIsLarge] = useState(props.isLarge);
  const [isHover, setIsHover] = useState(false);
  const previewCatalogue = products.slice(1, 7);
  //const cartItems = JSON.parse(localStorage.getItem("cart")!) || [];

  function assignRandomProductId(product: any){
      product['uniqueId'] = Math.random().toString(36).substr(2, 9);
      return product;
  } 

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
                      onMouseEnter={() => setIsHover(true)}
                      onMouseLeave={() => setIsHover(false)}
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
              <Box style={boxStyle} onMouseLeave={() => setIsHover(false)}>              
                    <Typography variant="h6">
                      <img
                        onMouseEnter={() => setIsHover(true)}
                        src={product.preview}
                        style={customCursor}
                        draggable={false}
                        alt="Bags from Pialetti"
                        width="400"
                        height="400"
                      />
                    </Typography>
                  {isHover ? (
                    <>
                      <Box style={{ ...hoverContainer, ...customCursor }}>
                        <Box style={{ ...hoverEffect, ...customCursor }}>
                          <Box style={{ ...hoverText, ...customCursor }}>
                            <Link to={product.name}  
                              onClick={() => {
                                props.getProduct(product);
                              }}>
                              <Typography variant="body1">
                                {product.name}
                              </Typography>
                              <Typography variant="body1">
                                {product.price}kr
                              </Typography>
                            </Link>
                          </Box>
                          <Box style={{ ...buttonContainer, ...customCursor }}>
                            <Button
                              style={button}
                              onClick={() => {
                                const uniqueProduct = assignRandomProductId(product)
                                addToCart(uniqueProduct)
                                /* cartItems.push(uniqueProduct);
                                localStorage.setItem("cart",JSON.stringify(cartItems)); */
                              }}
                            >
                              <Typography variant="button" style={customCursor}>
                                Add to cart
                              </Typography>
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  ) : null}
                
              </Box>
            ))}
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

const buttonContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "120px",
  height: "60px",
  marginTop: "1rem",
};
const hoverText: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  color: "black",
};

const hoverContainer: CSSProperties = {
  position: "relative",
  bottom: "25.5rem",
};

const hoverEffect: CSSProperties = {
  top: "0",
  position: "absolute",
  width: "400px",
  height: "400px",
  backgroundColor: "rgba(231, 234, 249, 0.2)",
  backdropFilter: "blur(10px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "backgdrop-filter 1000ms linear",
};

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
  textDecoration: "none",
  position: "absolute",
};
export default Catalogue;
