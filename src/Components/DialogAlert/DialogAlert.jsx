import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const DialogAlert = ({ isOpenAlert, handleDialogAlert, title, content }) => {
  return (
    <Dialog
      open={isOpenAlert}
      onClose={handleDialogAlert}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogAlert} color="primary">
          Wstecz
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogAlert;
