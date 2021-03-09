import { CSSProperties } from "react";
import heroPic1 from "./components/assets/hero1.png";

function Footer() {
  return (
    <div style={flexCenter}>
      <div style={heroPic}></div>
      <div></div>
    </div>
  );
}

const heroPic: CSSProperties = {
  backgroundImage: `url(${heroPic1})`,
};

const flexCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

export default Footer;
