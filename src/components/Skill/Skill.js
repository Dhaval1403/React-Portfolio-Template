import React from "react";
import { SvgIcon, Paper, Typography } from "@material-ui/core";
import "./Skill.css";

import skillList from "../../skill-list";

export default function Skill({ skill }) {
  return (
    <Paper>
      <Typography variant="h5" component="h2" style={{ padding: "0 16px" }}>
        Skills
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
    </Paper>
  );
}
