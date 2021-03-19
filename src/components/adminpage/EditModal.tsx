import { Typography, Box, Button, Modal, Grid } from "@material-ui/core";
import { FormatColorResetOutlined } from "@material-ui/icons";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { makeStyles } from "@material-ui/styles";

interface IProps {
  setEditOpen: (value: boolean) => void;
  editOpen: boolean;
  product: any;
}

function EditModal(props: IProps) {
  const classes = useStyles();
  return (
    <Modal open={props.editOpen}>
      <Box className={classes.editContainer}>
        <Typography variant={"h3"}>Product settings</Typography>
        <Button onClick={() => props.setEditOpen(false)}>
          <CancelOutlinedIcon />
        </Button>
        <Box className={classes.editCard}>
          {/* Make only chosen product show up */}

          <img
            src={props.product.preview}
            className={classes.imageStyling}
            draggable={false}
            alt="Bags from Pialetti"
            width="100"
            height="100"
          />
          <Typography variant={"body1"} className={classes.productName}>
            {props.product.price}&nbsp;kr
          </Typography>
          <Typography variant={"body1"} className={classes.productName}>
            {props.product.name}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

const useStyles: any = makeStyles({
  editContainer: {
    marginTop: "10rem",
    height: "40%",
    width: "40%",
    margin: "auto",
    backgroundColor: "#eaeaea",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: "0",
  },
  editCard: {
    width: "80%",
    height: "80%",
    backgroundColor: "beige",
  },
});

export default EditModal;
