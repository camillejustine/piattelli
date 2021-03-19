import { Typography, Box, Button, Modal } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function OpenAdminPage() {
  const classes = useStyles();
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
    justifyContent: "center",
    outline: "0",
  },
});

export default OpenAdminPage;
