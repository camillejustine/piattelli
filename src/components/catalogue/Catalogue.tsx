import { Grid, Box, Typography } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import { CSSProperties, useState } from "react";
import bag1 from "../../assets/bags/bag-1.png";
import bag2 from "../../assets/bags/bag-2.png";
import bag3 from "../../assets/bags/bag-3.png";
import bag4 from "../../assets/bags/bag-4.png";
import bag5 from "../../assets/bags/bag-5.png";
import bag6 from "../../assets/bags/bag-6.png";
import alternativeCursor from "../../assets/alternativeCursor.png";

const products: {
  name: string;
  price: number;
  preview: string;
}[] = [
  { name: "mickeyBag", price: 100, preview: bag1 },
  { name: "mickeyBag", price: 100, preview: bag2 },
  { name: "mickeyBag", price: 100, preview: bag3 },
  { name: "mickeyBag", price: 100, preview: bag4 },
  { name: "mickeyBag", price: 100, preview: bag5 },
  { name: "mickeyBag", price: 100, preview: bag6 },
  { name: "mickeyBag", price: 100, preview: bag1 },
  { name: "mickeyBag", price: 100, preview: bag2 },
  { name: "mickeyBag", price: 100, preview: bag3 },
  { name: "mickeyBag", price: 100, preview: bag4 },
  { name: "mickeyBag", price: 100, preview: bag5 },
  { name: "mickeyBag", price: 100, preview: bag6 },
];
interface IProps {
  isLarge: boolean;
}

function Catalogue(props: IProps) {
  const [isLarge, setIsLarge] = useState(props.isLarge);
  const previewCatalogue = products.slice(1, 7);
  return (
    <Box>
      {isLarge ? (
        <Grid style={gridWidth}>
          <Grid container item xs={12} spacing={1} style={innerGridStyle}>
            {products.map((product) => (
              <Typography variant="h6">
                <Box style={boxStyle}>
                  <img src={product.preview} alt=" " width="400" height="400" />
                  <span>{product.name}</span>
                  <span>{product.price}kr</span>
                </Box>
              </Typography>
            ))}
          </Grid>
        </Grid>
      ) : (
        //   isLarge: False will render this code vvvv
        <Grid style={gridWidth}>
          <Grid container item xs={12} spacing={1} style={innerGridStyle}>
            {previewCatalogue.map((product) => (
              <Typography variant="h6">
                <Box style={boxStyle}>
                  <img
                    src={product.preview}
                    style={customCursor}
                    draggable={false}
                    alt="Bags from Pialetti"
                    width="400"
                    height="400"
                  />
                </Box>
              </Typography>
            ))}
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

const gridWidth: CSSProperties = {
  maxWidth: "1400px",
  margin: "auto",
};

const innerGridStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const boxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
  textAlign: "center",
};

const customCursor: CSSProperties = {
  cursor: `url(${alternativeCursor}), auto`,
};

export default Catalogue;
