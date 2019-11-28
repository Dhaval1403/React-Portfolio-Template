import React, { useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
import './InfoModal.css';

export default function({ project, handleClose }) {
	const modalContainerStyle = {
		position: 'fixed',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		overflow: 'auto',
		margin: '0',
		zIndex: '100',
		display: 'flex',
		backgroundColor: 'rgba(100, 100, 100, 0.4)'
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Escape') {
			handleClose();
		}
	};

	// This runs after render
	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('onkeydown', handleKeyPress); // Unsubscribe
	});

	return (
		<div style={modalContainerStyle}>
			<div className='modal'>
				<Typography
					gutterBottom
					variant='h6'
					component='h2'
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					{project.title}
				</Typography>
				<Typography
					gutterBottom
					variant='body2'
					component='p'
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					{project.des}
				</Typography>
				<Button variant='outlined' color='primary' onClick={handleClose}>
					Close
				</Button>
			</div>
		</div>
	);
}
