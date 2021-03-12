import Header from './header/Header';
import Hero from './hero/Hero';
import Footer from './footer/Footer';
import Promotion from './content/Promotion';
import Explore from './content/Explore';
import PromotionSecond from './content/PromotionSecond';
import Catalogue from './catalogue/Catalogue';
import { Box } from '@material-ui/core';
import { CSSProperties } from 'react';

function Layout() {
  return (
    <Box>
      <Header />
      <div style={landingContainer}>
        <Hero />
        <Promotion />
        <Explore />
        <PromotionSecond />
        <Catalogue isLarge={false} />
      </div>
      <Footer />
    </Box>
  );
}

const landingContainer: CSSProperties = {
  width: '50vw',
  margin: 'auto',
};

export default Layout;
