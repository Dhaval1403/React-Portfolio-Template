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

	const handleClickOnModal = (event) => {
		if (event.target.id === 'modal-container-id') {
			handleClose();
		}
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
		<div id='modal-container-id' style={modalContainerStyle} onClick={handleClickOnModal}>
			<div id='modal-id' className='modal'>
				<Typography gutterBottom variant='h6' component='h2' style={{ textAlign: 'center', padding: '0 8px' }}>
					{project.title}
				</Typography>
				<Typography variant='body2' component='p' gutterBottom>
					{project.des}
					{console.log(project.des)}
				</Typography>
				<Button
					variant='outlined'
					id='close-button'
					color='primary'
					style={{ margin: 'auto' }}
					onClick={handleClose}
				>
					close
				</Button>
			</div>
		</div>
	);
}
