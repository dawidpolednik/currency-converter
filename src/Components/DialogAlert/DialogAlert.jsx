import React from "react";
import {
  withStyles,
  Button,
  Dialog,
  DialogContent,
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
  // const { classes } = this.props;
  return (
    <Dialog
      open={isOpenAlert}
      onClose={handleDialogAlert}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
        {title}
      </DialogTitle>

      <DialogContentText
        className={classes.dialogContent}
        id="alert-dialog-description"
      >
        {content}
      </DialogContentText>

      <DialogActions>
        <Button onClick={handleDialogAlert} color="primary">
          Wstecz
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default withStyles(style)(DialogAlert);
