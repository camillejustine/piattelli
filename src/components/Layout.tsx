import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Promotion from "./content/Promotion";
import Explore from "./content/Explore";

function Layout() {
  return (
    <div>
      <Header />
      <Hero />
      <Promotion />
      <Explore />
      <Footer />
    </div>
  );
}

export default Layout;
