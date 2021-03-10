import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Promotion from "./content/Promotion";
import Catalogue from "./catalogue/Catalogue";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductView from './product/ProductView'

function Layout() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Header />
            <Hero />
            <Promotion />
            <Catalogue />
            <Footer />
          </Route>
          <Route path="/mickeyBag">
              <ProductView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
