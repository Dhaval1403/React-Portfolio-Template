import React from "react";
import { Grid } from "@material-ui/core";
import skillList from "../../skill-list";
import Skill from "../Skill/Skill";

import "./SkillList.css";

export default function SkillList() {
  return (
    <div className="container">
      <Grid container style={{ flexGrow: 1 }}>
        {skillList.map((skill, i) => (
          <Skill skill={skill} key={i} />
        ))}
      </Grid>
    </div>
  );
}
