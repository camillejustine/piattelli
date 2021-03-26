import {
  Typography,
  Box,
  Button,
  Modal,
  Grid,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { Product, ProductsContext } from "../context/ProductsContext";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import EditModal from "./EditModal";
import fallback from "../../assets/bags/fallback.png";
import { Img } from "react-image";

// interface IProps {
//   getProduct: (value: {}) => void;
// }

function OpenAdminPage() {
  const classes = useStyles();
  const { products } = useContext(ProductsContext);
  const [open, setOpen] = React.useState(false);
  const [editingProduct, setEditingProduct] = useState<any>();
  const [emptyProduct, setEmptyProduct] = useState<Product>({} as Product);
  const [newProduct, setNewProduct] = useState(false);

  const { removeProduct } = useContext(ProductsContext);

  return (
    <>
      <Box className={classes.modalContainer}>
        <Typography variant={"h3"}>Admin page</Typography>
        <Box className={classes.productsContainer}>
          <Grid
            container
            item
            xs={12}
            spacing={1}
            className={classes.innerGridStyle}
          >
            {products.map((product) => {
              return (
                <>
                  <Box className={classes.productCard}>
                    <Hidden only={"xs"}>
                      <Img
                        src={[product.preview, fallback]}
                        className={classes.imageStyling}
                        draggable={false}
                        alt="Bags from Pialetti"
                        width="150"
                        height="150"
                      />
                    </Hidden>
                    <Hidden smUp>
                      <img
                        src={product.preview}
                        className={classes.imageStyling}
                        draggable={false}
                        alt="Bags from Pialetti"
                        width="50"
                        height="50"
                      />
                    </Hidden>
                    <Box className={classes.flexRow}>
                      <Typography
                        variant={"body1"}
                        className={classes.productName}
                      >
                        {product.name}
                      </Typography>
                    </Box>
                    <Box className={classes.flexRow}>
                      <Typography
                        variant={"body1"}
                        className={classes.productName}
                      >
                        {product.price}&nbsp;kr
                      </Typography>
                    </Box>
                    <div>
                      <Button onClick={() => setEditingProduct(product)}>
                        <EditOutlinedIcon fontSize={"small"} />
                      </Button>
                      <Button onClick={() => removeProduct(product)}>
                        <ClearIcon fontSize={"small"} />
                      </Button>
                    </div>
                  </Box>
                </>
              );
            })}
          </Grid>
          <Box className={classes.addItemButton}>
            <Button
              onClick={() => {
                setEditingProduct(emptyProduct);
                setNewProduct(true);
                console.log(emptyProduct);
              }}
            >
              <PostAddIcon fontSize={"large"} />
            </Button>
          </Box>
        </Box>
        <EditModal
          newProduct={newProduct}
          isProductNew={() => setNewProduct(false)}
          closeModal={() => setEditingProduct(undefined)}
          editOpen={Boolean(editingProduct)}
          product={editingProduct}
        />
      </Box>
    </>
  );
}

const useStyles: any = makeStyles((theme) => ({
  modalContainer: {
    height: "80vh",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // outline: "0",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      marginTop: "4rem",
    },
  },

  productsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  productName: {
    fontSize: "0.6rem",
  },
  productCard: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "5rem",
    marginRight: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3rem",
      marginRight: "0rem",
    },
  },
  imageStyling: {
    marginRight: ".5rem",
    marginBottom: ".5rem",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  innerGridStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addItemButton: {
    marginTop: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
}));

export default OpenAdminPage;
