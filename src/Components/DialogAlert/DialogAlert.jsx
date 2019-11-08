import React from "react";
import {
  withStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import style from "./DialogAlert.styles.js";

const DialogAlert = ({
  classes,
  isOpenAlert,
  handleDialogAlert,
  title,
  content
}) => {
  const dialogTitle = (
    <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
      {title}
    </DialogTitle>
  );

  const dialogContent = (
    <DialogContentText
      className={classes.dialogContent}
      id="alert-dialog-description"
    >
      {content}
    </DialogContentText>
  );

  const dialogActions = (
    <DialogActions>
      <Button onClick={handleDialogAlert} color="primary">
        Wstecz
      </Button>
    </DialogActions>
  );

  return (
    <Dialog
      open={isOpenAlert}
      onClose={handleDialogAlert}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {dialogTitle}
      {dialogContent}
      {dialogActions}
    </Dialog>
  );
};
export default withStyles(style)(DialogAlert);
