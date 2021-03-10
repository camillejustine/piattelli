import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Promotion from "./content/Promotion";
import Catalogue from "./catalogue/Catalogue";
import { Route} from 'react-router-dom';
import ProductView from './product/ProductView'

function Layout() {
  return (
    <div>
          <Route exact path="/">
            <Header />
            <Hero />
            <Promotion />
            <Catalogue />
            <Footer />
          </Route>
          <Route path="/:name">
              <ProductView />
          </Route>
    </div>
  );
}

export default Layout;
