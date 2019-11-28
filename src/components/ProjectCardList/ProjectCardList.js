import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project_list from '../../utils/project-list';
import ProjectCard from '../ProjectCard/ProjectCard';

const useStyles = makeStyles({
	'spacing-xs-4': {
		width: 'inherit',
		margin: 0
	}
});

export default function ProjectCardList() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography variant='h5' display='block' style={{ margin: '1rem', fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' , color: 'black'}}>
				Projects
			</Typography>
			<Grid
				container
				spacing={4}
				style={{ flexGrow: 1 }}
				classes={{
					'spacing-xs-4': classes['spacing-xs-4'] // overriding defaults as it was causing horizontal scroll
				}}
			>
				{project_list.map((project, i) => <ProjectCard project={project} key={i} />)}
			</Grid>
		</React.Fragment>
	);
}
