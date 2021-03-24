//node components
import { Box, Typography } from "@material-ui/core";
import { CSSProperties, useState } from "react";
import { Route } from "react-router-dom";
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

  function productDetails(value: object) {
    setProductDetail(value);
  }

  return (
    <Box style={customCursorBlack}>
      <CartProvider>
        <Box style={landingContainer}>
          <Route path="/catalogue">
            <Box style={catalogueStyles}>
              <Typography variant={"h3"} align={"center"}>
                Our bags
              </Typography>
              <Catalogue isLarge={true} getProduct={productDetails} />
            </Box>
          </Route>
          <Route path="/new-collection">
            <Box style={catalogueStyles}>
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
              <Box style={cataloguePreviewContainer}>
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
        <Newsletter />
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Footer />
      </CartProvider>
    </Box>
  );
}

const catalogueStyles: CSSProperties = {
  marginTop: "8.5rem",
};

const landingContainer: CSSProperties = {
  width: "50vw",
  margin: "auto",
};

const customCursorBlack: CSSProperties = {
  cursor: `url(${alternativeCursorBlack}) 9 7, auto`,
};

const customCursor: CSSProperties = {
  cursor: `url(${alternativeCursor}) 9 7, auto`,
};

const cataloguePreviewContainer: CSSProperties = {
  marginTop: "1rem",
};

export default Layout;
