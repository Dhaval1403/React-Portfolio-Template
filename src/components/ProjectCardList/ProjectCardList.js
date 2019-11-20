import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project_list from '../../project-list';
import ProjectCard from '../ProjectCard/ProjectCard';

const useStyles = makeStyles({
  "spacing-xs-4": {
    width: 'inherit',
    margin: 0,
  }
});

export default function ProjectCardList() {
  const classes = useStyles();

  return (
    <Paper style={{ backgroundColor: "#f3f3f3" }}>
      <Typography variant="h5" display="block" style={{ padding: "1rem 2rem", fontSize: "1.5rem" }}>
        Projects
      </Typography>
      <Grid
        container
        spacing={4}
        style={{ flexGrow: 1 }}
        classes={{
          "spacing-xs-4": classes["spacing-xs-4"], // overriding defaults as it was causing horizontal scroll
        }}
      >
        {
          project_list.map((project, i) => <ProjectCard project={project} key={i} />)
        }
      </Grid>
    </Paper>
  );
}
