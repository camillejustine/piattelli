import { Typography, Box, Button, Modal, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useContext, useState, useEffect } from "react";
import ProductContext, { ProductsContext } from "../context/ProductsContext";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { Height } from "@material-ui/icons";
import EditModal from "./EditModal";

// interface IProps {
//   getProduct: (value: {}) => void;
// }

function OpenAdminPage() {
  const classes = useStyles();
  const { products } = useContext(ProductsContext);
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);

  return (
    <>
      <Box>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
      </Box>
      <Modal open={open}>
        <Box className={classes.modalContainer}>
          <Typography variant={"h3"}>Admin page</Typography>
          <Button onClick={() => setOpen(false)}>
            <CancelOutlinedIcon />
          </Button>
          <Box className={classes.productsContainer}>
            <Grid
              container
              item
              xs={12}
              spacing={1}
              className={classes.innerGridStyle}
            >
              {products.map((product) => {
                console.log(product);
                return (
                  <>
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
                      <Button>
                        <EditOutlinedIcon
                          fontSize={"small"}
                          onClick={() => setEditOpen(true)}
                        />
                      </Button>
                    </Box>
                    <EditModal
                      setEditOpen={setEditOpen}
                      editOpen={editOpen}
                      product={product}
                    />
                  </>
                );
              })}
              <Button>
                <PostAddIcon fontSize={"large"} />
              </Button>
            </Grid>
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
    backgroundColor: "#eaeaea",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: "0",
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
});

export default OpenAdminPage;
