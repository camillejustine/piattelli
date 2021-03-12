import Header from "./header/Header";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import Promotion from "./content/Promotion";
import Explore from "./content/Explore";
import PromotionSecond from "./content/PromotionSecond";
import Catalogue from "./catalogue/Catalogue";
import Newsletter from "./content/Newsletter";
import { Box } from "@material-ui/core";
import { CSSProperties, useState } from "react";
import { Route } from "react-router-dom";
import ProductView from "./product/ProductView";
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
          <Catalogue isLarge={false} getProduct={productDetails} />
        </Route>
      </div>
      <Route path="/:name">
        <ProductView productView={productDetail} />
      </Route>
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

export default Layout;
