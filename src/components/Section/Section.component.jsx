import React from "react";
import { useStyles } from "./Section.styles";

export default function Section({ bg, ...props }) {
  const classes = useStyles();
  const background = bg ? classes.bg : classes.noBg;

  return <div className={background}>{props.children}</div>;
}
