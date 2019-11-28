import React from 'react';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Contact.css';

export default function ContactForm() {
	return (
		<React.Fragment>
			<Typography
				variant='h2'
				display='block'
				align='center'
				style={{ margin: '1rem', fontSize: '1.6rem', textTransform: 'uppercase' }}
			>
				Contact Me
			</Typography>
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
				<div
					className='contact-form'
					style={{
						backgroundColor: '#fff',
						display: 'flex',
						flexDirection: 'column',
						padding: '25px',
						borderRadius: '10px'
					}}
				>
					<TextField
						label='Name'
						type='text'
						margin='normal'
						variant='outlined'
						placeholder='Enter your name'
					/>
					<TextField
						label='Email'
						type='email'
						margin='normal'
						variant='outlined'
						placeholder='Enter your email'
					/>
					<TextField
						label='Message'
						multiline
						margin='normal'
						variant='outlined'
						placeholder='Enter your message'
					/>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Button
							variant='outlined'
							color='primary'
							size='large'
							style={{ width: '50%', marginTop: '15px' }}
						>
							Send
						</Button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
