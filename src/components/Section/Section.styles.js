import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  bg: {
    background: "rgb(256, 256, 256, 0.6)",
    padding: "50px 5%",
    borderTop: "1px solid rgba(0, 0, 0, 0.13)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.13)",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)"
  },
  noBg: {
    background: "none",
    padding: "50px 5%"
  }
});
