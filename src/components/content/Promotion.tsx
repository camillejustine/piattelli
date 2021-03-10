// import { Box } from "@material-ui/core";
import { CSSProperties } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";
import leScandinave from "../../assets/le-scandinave.png";

function Promotion() {
  return (
    <div style={promotionContainer}>
      <div style={promotionText}>
        <h4>Explore</h4>
        <h2>LE SCANDINAVE</h2>
      </div>
      <div>
        <img
          src={leScandinave}
          style={customCursor}
          draggable="false"
          alt="A Le Scandinave promotion."
        />
      </div>
    </div>
  );
}

const promotionContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const promotionText: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  color: "white",
  cursor: `url(${alternativeCursor}), auto`,
};

const customCursor: CSSProperties = {
  cursor: `url(${alternativeCursor}), auto`,
};
export default Promotion;
