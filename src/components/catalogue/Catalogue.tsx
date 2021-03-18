import { Grid, Box, Typography, Button } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import { CSSProperties, useState, useContext } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
interface IProps {
  isLarge: boolean;
  getProduct: (value: {}) => void;
}

function Catalogue(props: IProps, id: string) {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [isLarge, setIsLarge] = useState(props.isLarge);
  const [isHover, setIsHover] = useState(id);
  // const [isOut, setIsOut] = useState(null);
  const previewCatalogue = products.slice(1, 7);
  const classes = useStyles();

  function assignRandomProductId(product: any) {
    product["uniqueId"] = Math.random().toString(36).substr(2, 9);
    return product;
  }

  return (
    <Box>
      {isLarge ? (
        <Grid className={classes.gridWidth}>
          <Grid
            container
            item
            xs={12}
            spacing={1}
            className={classes.innerGridStyle}
          >
            {products.map((product) => (
              <Box
                className={classes.boxStyle}
                onMouseLeave={() => setIsHover("null")}
              >
                <Typography variant="h6">
                  <img
                    onMouseEnter={() => setIsHover(product.name)}
                    src={product.preview}
                    className={classes.customCursor}
                    draggable={false}
                    alt="Bags from Pialetti"
                    width="400"
                    height="400"
                  />
                </Typography>
                {isHover === product.name ? (
                  <>
                    <Box
                      className={`${classes.hoverContainer} ${classes.customCursor}`}
                    >
                      <Box
                        className={`${classes.hoverEffect} ${classes.customCursor}`}
                      >
                        <Box
                          className={`${classes.hoverText} ${classes.customCursor}`}
                        >
                          <Box className={classes.customCursor}>
                            <Link
                              className={`${classes.linkStyle} ${classes.customCursor}`}
                              to={`/products/${product.name}`}
                              onClick={() => {
                                props.getProduct(product);
                              }}
                            >
                              <Typography
                                variant="body1"
                                className={`${classes.moreInfoStyle} ${classes.customCursor}`}
                              >
                                More info
                              </Typography>
                            </Link>
                            <Typography variant="h5">{product.name}</Typography>
                          </Box>
                          <Typography variant="body1">
                            {product.price}&nbsp;kr
                          </Typography>
                        </Box>
                        <Box
                          className={`${classes.buttonContainer} ${classes.customCursor}`}
                        >
                          <Button
                            className={classes.button}
                            onClick={() => {
                              const uniqueProduct = assignRandomProductId(
                                product
                              );
                              addToCart(uniqueProduct);
                            }}
                          >
                            <Typography
                              variant="button"
                              className={classes.customCursor}
                            >
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
      ) : (
        //   isLarge: False will render this code vvvv
        <Grid className={classes.gridWidth}>
          <Grid
            container
            item
            xs={12}
            spacing={1}
            className={classes.innerGridStyle}
          >
            {previewCatalogue.map((product) => (
              <Box
                className={classes.boxStyle}
                onMouseLeave={() => setIsHover("null")}
              >
                <Typography variant="h6">
                  <img
                    onMouseEnter={() => setIsHover(product.name)}
                    src={product.preview}
                    className={classes.customCursor}
                    draggable={false}
                    alt="Bags from Pialetti"
                    width="400"
                    height="400"
                  />
                </Typography>
                {isHover === product.name ? (
                  <>
                    <Box
                      className={`${classes.hoverContainer} ${classes.customCursor}`}
                    >
                      <Box
                        className={`${classes.hoverEffect} ${classes.customCursor}`}
                      >
                        <Box
                          className={`${classes.hoverText} ${classes.customCursor}`}
                        >
                          <Box className={classes.customCursor}>
                            <Link
                              className={`${classes.linkStyle} ${classes.customCursor}`}
                              to={product.name}
                              onClick={() => {
                                props.getProduct(product);
                              }}
                            >
                              <Typography
                                variant="body1"
                                className={`${classes.moreInfoStyle} ${classes.customCursor}`}
                              >
                                More info
                              </Typography>
                            </Link>
                            <Typography variant="h5">{product.name}</Typography>
                          </Box>
                          <Typography variant="body1">
                            {product.price}&nbsp;kr
                          </Typography>
                        </Box>
                        <Box
                          className={`${classes.buttonContainer} ${classes.customCursor}`}
                        >
                          <Button
                            className={classes.button}
                            onClick={() => {
                              const uniqueProduct = assignRandomProductId(
                                product
                              );
                              addToCart(uniqueProduct);
                            }}
                          >
                            <Typography
                              variant="button"
                              className={classes.customCursor}
                            >
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

const useStyles: any = makeStyles({
  linkStyle: {
    textDecoration: "none",
    color: "black",
    position: "relative",
    top: "14.5rem",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "60px",
    marginTop: "1rem",
  },
  hoverText: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    color: "black",
    textDecoration: "none",
  },
  hoverContainer: {
    position: "relative",
    bottom: "25.5rem",
  },
  hoverEffect: {
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
  },
  gridWidth: {
    maxWidth: "1400px",
    margin: "auto",
  },
  innerGridStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    textAlign: "center",
  },
  customCursor: {
    cursor: `url(${alternativeCursor}) 9 7, auto`,
  },
  button: {
    height: "2rem",
    width: "8rem",
    border: "solid 1.5px black",
    borderRadius: "0%",
    textDecoration: "none",
    position: "absolute",
    bottom: "4rem",
  },
  moreInfoStyle: {
    marginTop: "0rem",
  },
});

export default Catalogue;
