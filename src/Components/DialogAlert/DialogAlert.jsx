import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const DialogAlert = ({ isOpenAlert, handleDialogAlert }) => {
  return (
    <Dialog
      open={isOpenAlert}
      onClose={handleDialogAlert}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Czy wprowadziłeś wartość przelicznika walutowego?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          W celu utworzenia transakcji walutowej należy wprowadzić wartość
          przelicznika. Powróć do strony głównej w celu wprowadzenia wymaganej
          wartości.
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
