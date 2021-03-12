import Header from './header/Header';
import Hero from './hero/Hero';
import Footer from './footer/Footer';
import Promotion from './content/Promotion';
import Explore from './content/Explore';
import PromotionSecond from './content/PromotionSecond';
import Catalogue from './catalogue/Catalogue';
import { Box } from '@material-ui/core';
import { CSSProperties, useState } from 'react';
import { Route } from 'react-router-dom';
import ProductDetails from './product/ProductDetails';

function Layout() {
  const [productDetail, setProductDetail] = useState<object>();

  function productDetails(value: object) {
    setProductDetail(value);
  }
  return (
    <Box>
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
        <ProductDetails productView={productDetail} />
      </Route>
      <Footer />
    </Box>
  );
}

const landingContainer: CSSProperties = {
  width: '50vw',
  margin: 'auto',
};

export default Layout;
