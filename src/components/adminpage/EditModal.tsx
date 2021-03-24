import {
  Typography,
  Box,
  Button,
  Modal,
  Grid,
  TextField,
} from "@material-ui/core";
import { FormatColorResetOutlined } from "@material-ui/icons";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { makeStyles } from "@material-ui/styles";
import { useContext, useEffect, useState } from "react";
import { Product } from "../context/ProductsContext";
import { ProductsContext } from "../context/ProductsContext";

interface IProps {
  closeModal: () => void;
  editOpen: boolean;
  product: Product;
}

function EditModal(props: IProps) {
  const classes = useStyles();
  const { products, addNewProduct, updateProduct, removeProduct } = useContext(
    ProductsContext
  );

  const [product, setProduct] = useState<Product>();

  
  const inputFieldNames = [
    "name",
    "price",
    "preview",
    "collection",
    "description",
    "details",
    "care",
  ];

  function handleChange(event: any) {
    setProduct(props.product);

    setProduct((prev: any) => {
      prev.name = event;
      return prev;
    });
  }

  if (!props.product) return null;
  return (
    <Modal open={props.editOpen}>
      <Box className={classes.editContainer}>
        <Typography variant={"h3"}>Product settings</Typography>
        <Button onClick={props.closeModal}>
          <CancelOutlinedIcon />
        </Button>
        <Box className={classes.editCard}>
          <img
            src={props.product.preview}
            className={classes.imageStyling}
            draggable={false}
            alt="Bags from Pialetti"
            width="100"
            height="100"
          />
          <Box className={classes.cardText}>
            <Typography variant={"body1"} className={classes.productName}>
              {props.product.price}&nbsp;kr
            </Typography>
            <Typography variant={"body1"} className={classes.productName}>
              {props.product.name}
            </Typography>
          </Box>
        </Box>

        <form className={classes.formContainer}>
          <Box className={classes.smallerForms}>
            <TextField
              required
              name="name"
              error={props.product.name === ""}
              id="product-name"
              label="Name"
              onChange={(event) => handleChange(event.target.value)}
              defaultValue={props.product.name}
            ></TextField>

            <TextField
              required
              name="price"
              type="number"
              error={props.product.price === null}
              id="product-price"
              label="price"
              onChange={(event) => {
                setProduct(props.product);

                setProduct((prev: any) => {
                  prev.price = parseInt(event.target.value);
                  return prev;
                });
              }}
              defaultValue={props.product.price}
            ></TextField>

            <TextField
              required
              name="Picture"
              error={props.product.preview === ""}
              id="product-Picture"
              label="Picture"
              onChange={(event) => {
                setProduct(props.product);

                setProduct((prev: any) => {
                  prev.preview = event.target.value;
                  return prev;
                });
              }}
              defaultValue={props.product.preview}
            ></TextField>

            <TextField
              required
              name="collection"
              error={props.product.collection === ""}
              id="product-collection"
              label="collection"
              onChange={(event) => {
                setProduct(props.product);

                setProduct((prev: any) => {
                  prev.collection = event.target.value;
                  return prev;
                });
              }}
              defaultValue={props.product.collection}
            ></TextField>
          </Box>

          <TextField
            required
            rows={15}
            multiline={true}
            name="description"
            error={props.product.description === ""}
            id="product-description"
            label="description"
            onChange={(event) => {
              setProduct(props.product);

              setProduct((prev: any) => {
                prev.description = event.target.value;
                return prev;
              });
            }}
            defaultValue={props.product.description}
          ></TextField>

          <TextField
            required
            rows={15}
            multiline={true}
            name="details"
            error={props.product.details === ""}
            id="product-details"
            label="details"
            onChange={(event) => {
              setProduct(props.product);

              setProduct((prev: any) => {
                prev.details = event.target.value;
                return prev;
              });
            }}
            defaultValue={props.product.details}
          ></TextField>

          <TextField
            required
            rows={15}
            multiline={true}
            name="care"
            error={props.product.care === ""}
            id="product-care"
            label="care"
            onChange={(event) => {
              setProduct(props.product);

              setProduct((prev: any) => {
                prev.care = event.target.value;
                return prev;
              });
            }}
            defaultValue={props.product.care}
          ></TextField>

          <Button
            onClick={() => {
              updateProduct(props.product);
            }}
          >
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

const useStyles: any = makeStyles({
  editContainer: {
    marginTop: "10rem",
    height: "60%",
    width: "60%",
    margin: "auto",
    backgroundColor: "#eaeaea",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: "0",
  },
  editCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardText: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  smallerForms: {
    display: "flex",
    flexDirection: "column",
  },
});

export default EditModal;
