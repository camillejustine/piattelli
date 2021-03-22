import { Typography, Box, Button, makeStyles, Tab } from "@material-ui/core";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import ImgTest from "../../assets/hero2.png";
import ProductContext, { ProductsContext } from "../context/ProductsContext";
import { useParams } from "react-router-dom";

interface IProps {
  productView: any;
}

const textInfoStrings = ["Description", "Detail", "Care"];

function ProductDetails(props: IProps) {
  const [textView, setTextView] = useState<string>("Description");
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const classes = useStyles();
  const params = useParams<{ name: string }>();
  const detailViewProduct = products.find(p => p.name === params.name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  if (!detailViewProduct) {
    return <p>This product does not exist</p>
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.productWrapper}>
        <img src={ImgTest} alt="" width="600" height="750" />
        <img src={ImgTest} alt="" width="600" height="750" />
        <img src={ImgTest} alt="" width="600" height="750" />
      </Box>
      <Box className={classes.infoWrapper}>
        <Box className={classes.detailPadding}>
          <Box className={classes.column}>
            <Typography>
              <h2>{detailViewProduct.name}</h2>
            </Typography>
            <Typography>
              <h3>{detailViewProduct.collection}</h3>
            </Typography>
            <Typography>
              <h4>{detailViewProduct.price}&nbsp;kr</h4>
            </Typography>
          </Box>
          <div className={classes.row}>
            {textInfoStrings.map((tab) => (
              <Typography
                variant={"body2"}
                className={classes.padding}
                onClick={() => {
                  setTextView(tab);
                }}
              >
                {tab}
              </Typography>
            ))}
          </div>
          <Box className={classes.row}>
            {textView === "Description" ? (
              <Typography>{detailViewProduct.description}</Typography>
            ) : null}
            {textView === "Detail" ? (
              <Typography>{detailViewProduct.details}</Typography>
            ) : null}
            {textView === "Care" ? (
              <Typography>{detailViewProduct.care}</Typography>
            ) : null}
          </Box>
        </Box>
        <Button
          className={classes.button}
          onClick={() => {
            addToCart(detailViewProduct);
          }}
        >
          <Typography variant="button">Add to cart</Typography>
        </Button>
      </Box>
    </Box>
  );
}

const useStyles: any = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "10rem",
    width: "100%",
  },
  productWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30rem",
    height: "50rem",
  },
  button: {
    color: "white",
    height: "3rem",
    width: "77%",
    border: "solid 1.5px black",
    borderRadius: "0%",
    background: "black",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    padding: "0.5rem",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  circle: {
    height: "2rem",
    width: "2rem",
    borderRadius: "50%",
    border: "solid 1px white",
    backgroundColor: "black",
  },
  padding: {
    paddingRight: "1rem",
  },
  detailPadding: {
    padding: "3rem",
  },
});

export default ProductDetails;
