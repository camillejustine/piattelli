import {
  Typography,
  Box,
  Button,
  Modal,
  Grid,
  TextField,
  createMuiTheme,
  Hidden,
} from "@material-ui/core";
import { FormatColorResetOutlined } from "@material-ui/icons";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useContext, useEffect, useState } from "react";
import { Product } from "../context/ProductsContext";
import { ProductsContext } from "../context/ProductsContext";

interface IProps {
  closeModal: () => void;
  editOpen: boolean;
  product: Product;
  newProduct: boolean;
  isProductNew: () => void;
}

function EditModal(props: IProps) {
  const classes = useStyles();
  const { products, addNewProduct, updateProduct, removeProduct } = useContext(
    ProductsContext
  );

  const [product, setProduct] = useState<Product>();

  function handleChange(value: string, key: keyof Product) {
    setProduct(props.product);
    setProduct((prev: any) => {
      prev[key] = value;
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
        <Hidden only={"xs"}>
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
        </Hidden>
        <Box className={classes.formContainer}>
          <form>
            <Box className={classes.smallerForms}>
              <Box mb={5} mt={5}>
                <TextField
                  className={classes.formWidth}
                  required
                  name="name"
                  error={props.product.name === ""}
                  id="product-name"
                  label="Name"
                  onChange={(event) => handleChange(event.target.value, "name")}
                  defaultValue={props.product.name}
                ></TextField>
              </Box>

              <Box mb={5}>
                <TextField
                  className={classes.formWidth}
                  variant={"outlined"}
                  required
                  name="price"
                  type="number"
                  error={props.product.price === null}
                  id="product-price"
                  label="price"
                  onChange={(event) =>
                    handleChange(event.target.value, "price")
                  }
                  defaultValue={props.product.price}
                ></TextField>
              </Box>
              <Box mb={5}>
                <TextField
                  className={classes.formWidth}
                  variant={"outlined"}
                  required
                  name="Picture"
                  error={props.product.preview === ""}
                  id="product-Picture"
                  label="Picture"
                  onChange={(event) =>
                    handleChange(event.target.value, "preview")
                  }
                  defaultValue={props.product.preview}
                ></TextField>
              </Box>
              <Box mb={5}>
                <TextField
                  className={classes.formWidth}
                  variant={"outlined"}
                  required
                  name="collection"
                  error={props.product.collection === ""}
                  id="product-collection"
                  label="collection"
                  onChange={(event) =>
                    handleChange(event.target.value, "collection")
                  }
                  defaultValue={props.product.collection}
                ></TextField>
              </Box>
            </Box>
            <Box className={classes.largerForms}>
              <Box mb={5}>
                <TextField
                  required
                  className={classes.formWidth}
                  variant={"outlined"}
                  rows={15}
                  multiline={true}
                  name="description"
                  error={props.product.description === ""}
                  id="product-description"
                  label="description"
                  onChange={(event) =>
                    handleChange(event.target.value, "description")
                  }
                  defaultValue={props.product.description}
                ></TextField>
              </Box>
              <Box mb={5}>
                <TextField
                  required
                  className={classes.formWidth}
                  variant={"outlined"}
                  rows={15}
                  multiline={true}
                  name="details"
                  error={props.product.details === ""}
                  id="product-details"
                  label="details"
                  onChange={(event) =>
                    handleChange(event.target.value, "details")
                  }
                  defaultValue={props.product.details}
                ></TextField>
              </Box>
              <Box mb={5}>
                <TextField
                  className={classes.formWidth}
                  required
                  variant={"outlined"}
                  rows={"10"}
                  multiline={true}
                  name="care"
                  error={props.product.care === ""}
                  id="product-care"
                  label="care"
                  onChange={(event) => handleChange(event.target.value, "care")}
                  defaultValue={props.product.care}
                ></TextField>
              </Box>
            </Box>
          </form>
        </Box>
        <Box mb={5} className={classes.buttonContainer}>
          <Box mr={4}>
            <Button
              href={"/admin"}
              onClick={() => {
                if (props.newProduct) {
                  addNewProduct(props.product);
                  props.isProductNew();
                } else {
                  updateProduct(props.product);
                }
              }}
            >
              Save
            </Button>
          </Box>
          <Box>
            <Button onClick={props.closeModal}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

const useStyles: any = makeStyles((theme) => ({
  editContainer: {
    marginTop: "5rem",
    height: "80%",
    width: "60%",
    margin: "auto",
    backgroundColor: "#eaeaea",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: "0",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      marginTop: "2rem",
      width: "100%",
    },
  },
  formWidth: {
    minWidth: "50rem",
    [theme.breakpoints.down("xs")]: {
      minWidth: "15rem",
    },
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
    justifyContent: "center",
    overflow: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // marginTop: "5rem",
      overflow: "auto",
      height: "100%",
    },
  },
  smallerForms: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      minWidth: "10rem",
    },
  },
  largerForms: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  buttonContainer: {
    width: "10rem",
    display: "flex",
    flexDirection: "row",
  },
}));

export default EditModal;
