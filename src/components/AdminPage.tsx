import { Typography, Box, Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useContext, useState, useEffect } from "react";
import ProductContext, { ProductsContext } from "./context/ProductsContext";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

function OpenAdminPage() {
  const classes = useStyles();
  const { products } = useContext(ProductsContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.modalContainer}>
          <Typography variant={"h3"}>Admin page</Typography>
          <Box className={classes.productsContainer}>
            {products.map((product) => (
              <Box className={classes.productCard}>
                <img
                  src={product.preview}
                  className={classes.imageStyling}
                  draggable={false}
                  alt="Bags from Pialetti"
                  width="100"
                  height="100"
                />
                <Box className={classes.flexRow}>
                  <Typography variant={"body1"} className={classes.productName}>
                    {product.name}
                  </Typography>
                  <EditOutlinedIcon fontSize={"small"} />
                </Box>
                <Box className={classes.flexRow}>
                  <Typography variant={"body1"} className={classes.productName}>
                    {product.price}&nbsp;kr
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
}

const useStyles: any = makeStyles({
  modalContainer: {
    marginTop: "10rem",
    height: "60%",
    width: "60%",
    margin: "auto",
    backgroundColor: "#F3CAC1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: "0",
  },
  productsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "50%",
  },
  productName: {
    fontSize: "0.6rem",
  },
  productCard: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "5rem",
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
});

export default OpenAdminPage;
