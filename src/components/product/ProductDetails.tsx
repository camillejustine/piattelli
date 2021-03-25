//node components
import { Typography, Box, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//context
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
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
        <img src={detailViewProduct.preview} alt="" className={classes.preview} />
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

const useStyles: any = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "10rem",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignContent: 'center',
      
    },
  },
  preview: {
    height: 600,
    width: 600,
    [theme.breakpoints.down("xs")]: {
      height: '100%',
      width: '100%',
    },
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
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
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
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
    },
  },
  padding: {
    paddingRight: "1rem",
  },
  detailPadding: {
    padding: "3rem",
  },
}));

export default ProductDetails;
