// import { CSSProperties } from 'react';
import { Typography, Box, Button, makeStyles, Tab } from "@material-ui/core";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ImgTest from '../../assets/hero2.png';

// we should use pexels api here?
// const productImg: {
//     img: string;
// }[] = [
//     {img: 'url()'}
// ]
interface iProps {
  productView: any;
}

const textInfoStrings = [
  "Description",
  "Detail",
  "Care"
];

function ProductDetails(props: iProps) {
  let [textView, setTextView] = useState<string>("Description");
  const { addToCart } = useContext(CartContext);
  const classes = useStyles();


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
              <Typography><h2>{props.productView && props.productView.name}</h2></Typography>
              <Typography><h3>{props.productView && props.productView.collection}</h3></Typography>
              <Typography><h4>{props.productView && props.productView.price}Sek</h4></Typography>
            </Box>
            <div className={classes.row}>
              {
                textInfoStrings.map((tab) => (
                  <Typography 
                    className={classes.padding}
                    onClick={()=>{
                      setTextView(tab)
                    }}
                  >{tab}
                  </Typography>
                ))
              }
            </div>
            <Box className={classes.row}>
              {textView === "Description" ? (
                 <Typography>{props.productView && props.productView.description}</Typography>
              ) : null}
              {textView === "Detail" ? (
                <Typography>{props.productView && props.productView.details}</Typography>
              ) : null}
              {textView === "Care" ? (
                <Typography>{props.productView && props.productView.care}</Typography>
              ) : null}
            </Box>
        </Box>
        <Box className={classes.row}>
          <Box className={classes.circle}></Box>
          <Box className={classes.circle}></Box>
          <Box className={classes.circle}></Box>
        </Box>
          <Button 
            className={classes.button} 
            onClick={       
              () => {
                addToCart(props.productView)
              }
            }>
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
    width: '100%'
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
    color: 'white',
    height: "3rem",
    width: "77%",
    border: "solid 1.5px black",
    borderRadius: "0%",
    background: 'black'
  },
  row: {
    display: "flex",
    flexDirection: "row",
    padding: '0.5rem'
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
    paddingRight: '1rem'
  },
  detailPadding: {
    padding: '3rem'
  }
});

export default ProductDetails;
