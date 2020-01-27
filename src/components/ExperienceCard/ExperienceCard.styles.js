import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  cardContainer: {
    margin: "10px",
    maxHeight: "300px"
  },
  overlayContent: {
    backgroundImage:
      "linear-gradient(to bottom right, rgb(0,0,0, 0.7), rgb(0,0,0, 0.5), rgb(0, 0, 0, 0.7))",
    border: 0,
    width: "300px",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #f5f5f5",
    color: "white",
    height: "300px",
    padding: "10px 30px",
    "& p": {
      fontFamily: "'Work Sans', 'sans-serif'",
      fontSize: ".8em",
      lineHeight: "1em",
      margin: "5px 0"
    },
    "& h4": {
      fontFamily: "'Work Sans', 'sans-serif'",
      fontSize: "1em",
      margin: "5px 0"
    },
    "&:hover": {
      display: "block",
      margin: "0 auto",
      height: "auto",
      width: "300px"
    }
  },
  expImg: {
    position: "relative",
    objectFit: "fill",
    bottom: "300px",
    width: "300px",
    height: "300px",
    transition: ".5s",
    "&:hover": {
      opacity: 0
    }
  }
});
