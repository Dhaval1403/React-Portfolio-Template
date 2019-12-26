import React from "react";
import portfolio from "../../utils/portfolio.png";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Faiz Hameed</h1>
        <div className="subtitle">
          <h3>Full Stack Developer, Writer, Freelance Workaholic</h3>
          <p>
            Creating Beautiful things with quality and elegance! <br />
            Experienced in Javascript and Python. My favourite technology is
            ReactJS
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
