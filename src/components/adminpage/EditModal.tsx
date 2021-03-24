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

  const [product, setProduct] = useState([] as Product[]);

  const [nameState, setNameState] = useState<string>("");
  const [priceState, setPriceState] = useState<number>(0);
  const [previewState, setPreviewState] = useState<string>("");
  const [collectionState, setCollectionState] = useState<string>("");
  const [descriptionState, setDescriptionState] = useState<string>("");
  const [detailsState, setDetailsState] = useState<string>("");
  const [careState, setCareState] = useState<string>("");

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
              onChange={(event) => setNameState(event.target.value)}
              defaultValue={props.product.name}
            ></TextField>

            <TextField
              required
              name="price"
              type="number"
              error={props.product.price === null}
              id="product-price"
              label="price"
              onChange={(event) => setPriceState(parseInt(event.target.value))}
              defaultValue={props.product.price}
            ></TextField>

            <TextField
              required
              name="Picture"
              error={props.product.preview === ""}
              id="product-Picture"
              label="Picture"
              onChange={(event) => setPreviewState(event.target.value)}
              defaultValue={props.product.preview}
            ></TextField>

            <TextField
              required
              name="collection"
              error={props.product.collection === ""}
              id="product-collection"
              label="collection"
              onChange={(event) => setCollectionState(event.target.value)}
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
            onChange={(event) => setDescriptionState(event.target.value)}
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
            onChange={(event) => setDetailsState(event.target.value)}
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
            onChange={(event) => setCareState(event.target.value)}
            defaultValue={props.product.care}
          ></TextField>

          <Button
            onClick={
              () => {
                updateProduct(props.product);
              }
              // updateLSCatalogue(
              //   nameState,
              //   priceState,
              //   previewState,
              //   collectionState,
              //   descriptionState,
              //   detailsState,
              //   careState
              // )
            }
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
