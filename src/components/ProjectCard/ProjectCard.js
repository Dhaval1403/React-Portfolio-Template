import React, { Component } from 'react';
import { Typography, Grid, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import ProjectImage from './project.png';

function ProjectCard(props) {
    return (
        <Grid container spacing={24} style={{padding: 24}}>
            <Grid item xs={12} sm={6} lg={4} xl={3}>
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={ProjectImage}
                        title={"Project Title"}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Project Title
                            </Typography>
                           <Typography component="p">
                           Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.                  </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="https://www.google.com" target="_blank">
                            Go to course
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ProjectCard;