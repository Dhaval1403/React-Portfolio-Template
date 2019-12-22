import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  expContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-around"
  },
  title: {
    margin: "1rem",
    fontSize: "1.6rem",
    fontFamily: "Bungee, cursive",
    textTransform: "uppercase"
  }
});
