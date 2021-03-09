import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Catalogue from "./catalogue/Catalogue"

function Layout() {
  return (
    <div>
      <Header />
      <Hero />
      <Catalogue />
      <Footer />
    </div>
  );
}

export default Layout;
