import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { exp } from "../../configs/Experience.js";
import { useStyles } from "./Experience.styles";
import ExperienceCard from "../ExperienceCard/ExperienceCard.component.jsx";
import { Element } from "react-scroll";
function Experience() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography
        className={classes.title}
        variant="h2"
        display="block"
        align="center"
      >
        <Element name="experience">Work Experience</Element>
      </Typography>

      <div className={classes.expContainer}>
        {exp.map(e => {
          return (
            <ExperienceCard
              title={e.title}
              desc={e.desc}
              date={e.date}
              img={e.img}
              key={e.title + "key"}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Experience;
