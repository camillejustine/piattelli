//node components
import { Box, Typography, Hidden } from "@material-ui/core";
import { useState } from "react";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
//images
import alternativeCursorBlack from "../assets/alternativeCursorBlack.png";
import alternativeCursor from "../assets/alternativeCursor.png";
//context
import CartProvider from "./context/CartContext";
//components
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import Promotion from "./content/Promotion";
import Explore from "./content/Explore";
import PromotionSecond from "./content/PromotionSecond";
import Catalogue from "./catalogue/Catalogue";
import Newsletter from "./content/Newsletter";
import Collection from "./catalogue/Collection";
import ErrorBoundary from "./ErrorBoundary";
import AdminPage from "./adminpage/AdminPage";
import Checkout from "./checkout/Checkout";
import ProductDetails from "./product/ProductDetails";

function Layout() {
  const [productDetail, setProductDetail] = useState<object>();
  const classes = useStyles();

  function productDetails(value: object) {
    setProductDetail(value);
  }

  return (
    <Box className={classes.customCursorBlack}>
      <CartProvider>
        <Box className={classes.landingContainer}>
          <Route path="/catalogue">
            <Box className={classes.catalogueStyles}>
              <Typography variant={"h3"} align={"center"}>
                Our bags
              </Typography>
              <Catalogue isLarge={true} getProduct={productDetails} />
            </Box>
          </Route>
          <Route path="/new-collection">
            <Box className={classes.catalogueStyles}>
              <Collection />
              <Typography variant={"h3"} align={"center"}>
                Our bags
              </Typography>
              <Catalogue isLarge={true} getProduct={productDetails} />
            </Box>
          </Route>
          <Route exact path="/">
            <Hero />
            <Promotion />
            <Explore />
            <PromotionSecond />
            <ErrorBoundary>
              <Box className={classes.cataloguePreviewContainer}>
                <Catalogue isLarge={false} getProduct={productDetails} />
              </Box>
            </ErrorBoundary>
          </Route>
        </Box>
        <Header />
        <Route path="/products/:name">
          <ProductDetails productView={productDetail} />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Hidden smDown>
          <Newsletter />
        </Hidden>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Footer />
      </CartProvider>
    </Box>
  );
}

const useStyles: any = makeStyles((theme) => ({
  catalogueStyles: {
    marginTop: "8.5rem",
  },
  landingContainer: {
    width: "50vw",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  customCursorBlack: {
    cursor: `url(${alternativeCursorBlack}) 9 7, auto`,
  },
  customCursor: {
    cursor: `url(${alternativeCursor}) 9 7, auto`,
  },
  cataloguePreviewContainer: {
    marginTop: "1rem",
  },
}));

export default Layout;
