import { Grid, Box, Typography, Button } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import { CSSProperties, useState, useContext } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
interface IProps {
  isLarge: boolean;
  getProduct: (value: {}) => void;
}

function Catalogue(props: IProps, id: string) {
  const { products } = useContext(ProductsContext);
  const [isLarge, setIsLarge] = useState(props.isLarge);
  const [isHover, setIsHover] = useState(id);
  // const [isOut, setIsOut] = useState(null);
  const previewCatalogue = products.slice(1, 7);
  const cartItems = JSON.parse(localStorage.getItem("cart")!) || [];
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
              <Link to={product.name}>
                <Typography variant="h6">
                  <Box
                    onMouseLeave={() => setIsHover("null")}
                    className={classes.boxStyle}
                    onClick={() => {
                      props.getProduct(product);
                    }}
                  >
                    <img
                      onMouseEnter={() => setIsHover(product.name)}
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

                          <Typography variant="body2">
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
                              cartItems.push(uniqueProduct);
                              localStorage.setItem(
                                "cart",
                                JSON.stringify(cartItems)
                              );
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
    display: "inline-block",
    position: "relative",
    zIndex: 1,
    paddingLeft: "4rem",
    paddingRight: "4rem",
    paddingTop: "4rem",
    margin: "-2rem",
    bottom: "5rem",
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
    height: "4rem",
    width: "8rem",
    border: "solid 1.5px black",
    borderRadius: "0%",
    textDecoration: "none",
    position: "absolute",
  },
  moreInfoStyle: {
    marginTop: "2rem",
  },
});

export default Catalogue;
