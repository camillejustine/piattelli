import { Typography, Box, Button, Modal, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { Product, ProductsContext } from "../context/ProductsContext";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import EditModal from "./EditModal";

// interface IProps {
//   getProduct: (value: {}) => void;
// }

function OpenAdminPage() {
  const classes = useStyles();
  const { products } = useContext(ProductsContext);
  const [open, setOpen] = React.useState(false);
  const [editingProduct, setEditingProduct] = useState<any>();
  const [newProduct, setNewProduct] = useState<boolean>(false);

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
                    <img
                      src={product.preview}
                      className={classes.imageStyling}
                      draggable={false}
                      alt="Bags from Pialetti"
                      width="150"
                      height="150"
                    />
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
            <Box className={classes.addItemButton}>
              <Button
                onClick={() => {
                  setEditingProduct("");
                  setNewProduct(true);
                }}
              >
                <PostAddIcon fontSize={"large"} />
              </Button>
            </Box>
          </Grid>
        </Box>
        <EditModal
          closeModal={() => setEditingProduct(undefined)}
          editOpen={Boolean(editingProduct)}
          product={editingProduct}
        />
      </Box>
    </>
  );
}

const useStyles: any = makeStyles({
  modalContainer: {
    height: "80vh",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // outline: "0",
    overflowY: "auto",
  },

  productsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "100%",
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
  },
  imageStyling: {
    marginRight: ".5rem",
    marginBottom: ".5rem",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  innerGridStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addItemButton: {
    marginTop: "5rem",
  },
});

export default OpenAdminPage;
