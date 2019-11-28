import React from 'react';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default function ContactForm() {
	return (
		<React.Fragment>
			<Typography
				variant='h5'
				display='block'
				style={{
					margin: '1rem',
					fontSize: '1.5rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textTransform: 'uppercase'
				}}
			>
				Contact Me
			</Typography>
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
				<div style={{ backgroundColor: '#fff', width: '50%', display: 'flex', flexDirection: 'column' }}>
					<TextField
						id='outlined-password-input'
						label='Name'
						type='text'
						autoComplete='current-password'
						margin='normal'
						variant='outlined'
						placeholder='Enter your name'
					/>
					<TextField
						id='outlined-password-input'
						label='Email'
						type='email'
						autoComplete='current-password'
						margin='normal'
						variant='outlined'
						placeholder='Enter your email'
					/>
					<TextField
						id='outlined-password-input'
						label='Password'
						type='password'
						autoComplete='current-password'
						margin='normal'
						variant='outlined'
						placeholder='Enter your password'
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
