import React, { useEffect, useState } from "react";
import { Grid, Chip } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from "@material-ui/core";
import { Info, Launch, GitHub } from "@material-ui/icons";
import InfoModal from "../InfoModal/InfoModal";
import "./ProjectCard.scss";

export default function ProjectCard({ project }) {
  // ref for the description node
  const desRef = React.createRef();
  const [des, setDes] = useState(project.des);
  const [modalOpen, setModalOpen] = useState(false);

  const updateDes = () => {
    /* project.des.length is the no. of characters in the original description
     * but due to card height being fixed, if the description is too long, it must
     * be trimed. By measuring no. of characters and width of the description at several widths, I found
     * description width = 1.3 * no. of characters (approx). The following math is a result of this.
     * desRef.current.offsetWidth is the width of the description element. Used 13 instead of 1.3,
     * by multipling both sides by 10. Also using 14.5 instead of 13 in division when calculating the
     * length of the substring because 13 is not exact and sometimes the substring was still bigger.
     * Hence, made it a little smaller by dividing by a 15 instead of 13.
     */
    setDes(
      project.des.length * 13 <= desRef.current.offsetWidth * 10
        ? project.des
        : project.des.slice(0, (desRef.current.offsetWidth * 10) / 15).trim() +
            "..."
    );
  };

  // This runs after render
  useEffect(() => {
    updateDes(); // Update (trim) the description
    window.addEventListener("resize", updateDes); // Update the des on resizing
    return () => window.removeEventListener("resize", updateDes); // Unsubscribe
  });

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card>
        <CardMedia
          component="img"
          className="project-image"
          alt={project.title}
          image={project.image}
          title={project.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className="one-line"
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className="description"
            ref={desRef}
            gutterBottom
          >
            {des}
          </Typography>
          <div className="chip-container">
            {project.tags.map((label, i) => (
              <Chip
                className="chip"
                size="small"
                label={label}
                color="primary"
                key={i}
              />
            ))}
          </div>
        </CardContent>
        <CardActions disableSpacing className="card-actions">
          <IconButton
            title="More Info"
            aria-label="More Info"
            onClick={handleOpen}
          >
            <Info />
          </IconButton>
          {modalOpen ? (
            <InfoModal project={project} handleClose={handleClose} /> // Modal
          ) : null}
          <IconButton
            title="Launch App"
            aria-label="Launch Application"
            href={project.links.launch}
          >
            <Launch />
          </IconButton>
          <IconButton
            title="See Code"
            aria-label="Source Code On Github"
            href={project.links.github}
          >
            <GitHub />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
