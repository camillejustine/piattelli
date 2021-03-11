import Header from "./header/Header";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import Promotion from "./content/Promotion";
import Explore from "./content/Explore";
import PromotionSecond from "./content/PromotionSecond";

function Layout() {
  return (
    <div>
      <Header />
      <Hero />
      <Promotion />
      <Explore />
      <PromotionSecond />
      <Footer />
    </div>
  );
}

export default Layout;
