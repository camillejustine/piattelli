import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Promotion from "./content/Promotion";
import Catalogue from "./catalogue/Catalogue"

function Layout() {
  return (
    <div>
      <Header />
      <Hero />
      <Promotion />
      <Catalogue />
      <Footer />
    </div>
  );
}

export default Layout;
