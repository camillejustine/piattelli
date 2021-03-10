import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Promotion from "./content/Promotion";
import Catalogue from "./catalogue/Catalogue";
import {BrowserRouter, Route} from 'react-router-dom';

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Header />
          <Hero />
          <Promotion />
          <Catalogue />
          <Footer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
