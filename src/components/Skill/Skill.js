import React from "react";
import { SvgIcon, Typography } from "@material-ui/core";
import "./Skill.css";
import { Element } from "react-scroll";

import skillList from "../../utils/skill-list";

export default function Skill({ skill }) {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          fontFamily: '"Bungee", cursive'
        }}
      >
        <Element name="skill">Skills</Element>
      </Typography>
      <div className="skill-container">
        {skillList.map((skill, i) => (
          <div className="skill-img" key={i}>
            <SvgIcon
              titleAccess={skill.name}
              style={{ width: "auto", height: "100%" }}
              className="svg-icon"
              viewBox="0 0 24 24"
              color="primary"
            >
              <path d={skill.svgPath} />
            </SvgIcon>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
