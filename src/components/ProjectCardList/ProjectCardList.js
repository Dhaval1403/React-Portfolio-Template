import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectCardList() {
  const project = {
    title: "Face Detector",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tags: ["React", "Node.js", "Javascript"],
    links: { launch: "#", github: "https://www.github.com" }
  }

  const projectList = Array(7);
  projectList.fill(project);

  return (
    <Paper style={{backgroundColor: "#f3f3f3"}}>
      <Typography variant="h5" display="block" style={{ padding: "1rem 2rem", fontSize: "1.5rem"}}>
        Projects
      </Typography>
      <Grid
        container
        spacing={4}
        style={{ padding: "1rem 2rem", flexGrow: 1 }}
      >
        {
          projectList.map((project, i) => <ProjectCard project={project} key={i} />)
        }
      </Grid>
    </Paper>
  );
}
