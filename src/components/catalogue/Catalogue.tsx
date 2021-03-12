import { Grid, Box, Typography } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import { CSSProperties, useState, useContext } from "react";
import alternativeCursor from "../../assets/alternativeCursor.png";
import { ProductsContext } from '../context/ProductsContext'
import { Link } from 'react-router-dom';
interface IProps {
  isLarge: boolean;
  getProduct: (value: {}) => void;
}

function Catalogue(props: IProps) {

  const { products } = useContext(ProductsContext)

  const [isLarge, setIsLarge] = useState(props.isLarge);
  const previewCatalogue = products.slice(1, 7);
  return (
    <Box>
      {isLarge ? (
        <Grid style={gridWidth}>
          <Grid container item xs={12} spacing={1} style={innerGridStyle}>
            {products.map((product) => (
              <Link to={product.name}>
                <Typography variant="h6">
                  <Box 
                    style={boxStyle}
                    onClick={() => {
                      props.getProduct(product)
                    }}
                    >
                    <img src={product.preview} alt=" " width="400" height="400" />
                    <span>{product.name}</span>
                    <span>{product.price}kr</span>
                  </Box>
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      ) : (
        //   isLarge: False will render this code vvvv
        <Grid style={gridWidth}>
          <Grid container item xs={12} spacing={1} style={innerGridStyle}>
            {previewCatalogue.map((product) => (
              <Link to={product.name}>
                <Typography variant="h6">
                  <Box 
                    style={boxStyle}
                    onClick={() => {
                      props.getProduct(product)
                    }}
                    >
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
              </Link>
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
