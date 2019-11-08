const style = theme => ({
  dialog: {
    width: "100%",
    textAlign: "center"
  },
  dialogTitle: {
    padding: "10px",
    textAlign: "center",
    fontFamily: "roboto",
    textTransform: "uppercase"
  },
  dialogContent: {
    [theme.breakpoints.up("md")]: {
      width: "600px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  field: {
    width: "70%"
  },
  dialogActions: {
    [theme.breakpoints.up("md")]: {
      width: "600px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "70%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%"
    },
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    color: "white",
    backgroundColor: "#3F51B5"
  }
});
export default style;
