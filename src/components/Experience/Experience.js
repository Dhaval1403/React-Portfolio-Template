import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  overlayContent: {
    background: "#3f51b5",
    border: 0,
    width: "300px",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #f5f5f5",
    color: "white",
    height: "300px",
    padding: "10px 30px"
  },
  expContainer: {
    display: "flex" /* 
    justifyContent: "space-between", */,
    width: "100%",
    flexWrap: "wrap"
  },
  expImg: {
    position: "relative",
    bottom: "300px",
    transition: ".5s",
    "&:hover": {
      opacity: 0
    }
  }
});
function Experience() {
  const classes = useStyles();
  const { expContainer, overlayContent, expImg } = classes;
  return (
    <>
      <CssBaseline />
      <h2 style={{ margin: "20px 20px" }}>Work Experience</h2>
      <div className={expContainer}>
        <div style={{ margin: "0 20px" }}>
          <div className={overlayContent}>
            <h4 style={{ marginBlockEnd: 0 }}>GALPÃO GARAGEM</h4>
            <p style={{ marginBlockStart: 0 }}>
              {" "}
              <i>January 2015 - April 2017</i>{" "}
            </p>
            <p>
              Project: 2016 _ Implementation: 2016/17 _ São Paulo, SP _ Brasil _
              Construction: 500 m² Project Team: Andre Weigand; Mariana Weigand;
              Olegário Vasconcelos; Aline Gaspar; Felipe Rodrigues; _
              Construction Metta Engenharia; Woodwork: Officio Marcenaria;
              Structure: Alumarques; Photography: am studio
            </p>
          </div>

          <div style={{ height: "20px" }}>
            <img
              className={expImg}
              src="https://picsum.photos/id/124/300"
              alt="random"
            />
          </div>
        </div>
        <div style={{ margin: "0 20px" }}>
          <div className={overlayContent}>
            <h4 style={{ marginBlockEnd: 0 }}>APARTAMENTO OSCAR PORTO</h4>
            <p style={{ marginBlockStart: 0 }}>
              {" "}
              <i>January 2015 - April 2017</i>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus.
            </p>
          </div>
          <div style={{ height: "20px" }}>
            <img
              className={expImg}
              src="https://picsum.photos/id/123/300"
              alt="random"
            />
          </div>
        </div>
        <div style={{ margin: "0 20px" }}>
          <div className={overlayContent}>
            <h4 style={{ marginBlockEnd: 0 }}>LOREM HOWLIN</h4>
            <p style={{ marginBlockStart: 0 }}>
              {" "}
              <i>January 2015 - April 2017</i>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus.
            </p>
          </div>
          <div style={{ height: "20px" }}>
            <img
              className={expImg}
              src="https://picsum.photos/id/125/300"
              alt="random"
            />
          </div>
        </div>
        <div style={{ margin: "0 20px" }}>
          <div className={overlayContent}>
            <h4 style={{ marginBlockEnd: 0 }}>CARTEN GOSLEN</h4>
            <p style={{ marginBlockStart: 0 }}>
              {" "}
              <i>January 2015 - April 2017</i>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus.
            </p>
          </div>
          <div style={{ height: "20px" }}>
            <img
              className={expImg}
              src="https://picsum.photos/id/240/300"
              alt="random"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
