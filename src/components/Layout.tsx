import Header from "./header/Header";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import Promotion from "./content/Promotion";
import Explore from "./content/Explore";
import PromotionSecond from "./content/PromotionSecond";
import Catalogue from "./catalogue/Catalogue";
import Newsletter from "./content/Newsletter";
import ErrorBoundary from "./ErrorBoundary";
import { Box } from "@material-ui/core";

import { CSSProperties, useState } from "react";
import Checkout from "./checkout/Checkout";

import { Route } from "react-router-dom";
import ProductDetails from "./product/ProductDetails";
import alternativeCursorBlack from "../assets/alternativeCursorBlack.png";
import alternativeCursor from "../assets/alternativeCursor.png";

function Layout() {
  const [productDetail, setProductDetail] = useState<object>();

  function productDetails(value: object) {
    setProductDetail(value);
  }

  return (
    <Box style={customCursorBlack}>
      <Header />
      <div style={landingContainer}>
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
      </div>

      <Route path="/:name">
        <ProductDetails productView={productDetail} />
      </Route>
      <ErrorBoundary>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </ErrorBoundary>
      <Newsletter />

      <Footer />
    </Box>
  );
}

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
