import React from 'react';
import { Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
	overlayContent: {
		backgroundImage: 'linear-gradient(to right, rgb(85, 85, 255), rgb(255, 91, 91))',
		border: 0,
		width: '300px',
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px #f5f5f5',
		color: 'white',
		height: '300px',
		padding: '10px 30px'
	},
	expContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		flexWrap: 'wrap'
	},
	expImg: {
		position: 'relative',
		bottom: '300px',
		width: '300px',
		height: '300px',
		transition: '.5s',
		'&:hover': {
			opacity: 0
		}
	}
});
function Experience() {
	const classes = useStyles();
	const { expContainer, overlayContent, expImg } = classes;
	return (
		<React.Fragment>
			<CssBaseline />
			<Typography variant='h5' display='block' style={{ margin: '1rem', fontSize: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				Work Experience
			</Typography>
			<div className={expContainer}>
				<div style={{ margin: '0 10px' }}>
					<div className={overlayContent}>
						<h4 style={{ marginBlockEnd: 0 }}>GALPÃO GARAGEM</h4>
						<p style={{ marginBlockStart: 0 }}>
							{' '}
							<i>January 2015 - April 2017</i>{' '}
						</p>
						<p>
							Project: 2016 _ Implementation: 2016/17 _ São Paulo, SP _ Brasil _ Construction: 500 m²
							Project Team: Andre Weigand; Mariana Weigand; Olegário Vasconcelos; Aline Gaspar; Felipe
							Rodrigues; _ Construction Metta Engenharia; Woodwork: Officio Marcenaria; Structure:
							Alumarques; Photography: am studio
						</p>
					</div>

					<div style={{ height: '20px' }}>
						<img
							className={expImg}
							src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
							alt='random'
						/>
					</div>
				</div>
				<div style={{ margin: '0 10px' }}>
					<div className={overlayContent}>
						<h4 style={{ marginBlockEnd: 0 }}>APARTAMENTO OSCAR PORTO</h4>
						<p style={{ marginBlockStart: 0 }}>
							{' '}
							<i>January 2015 - April 2017</i>{' '}
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo
							vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque
							non tellus.
						</p>
					</div>
					<div style={{ height: '20px' }}>
						<img
							className={expImg}
							src='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
							alt='random'
						/>
					</div>
				</div>
				<div style={{ margin: '0 10px' }}>
					<div className={overlayContent}>
						<h4 style={{ marginBlockEnd: 0 }}>LOREM HOWLIN</h4>
						<p style={{ marginBlockStart: 0 }}>
							{' '}
							<i>January 2015 - April 2017</i>{' '}
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo
							vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque
							non tellus.
						</p>
					</div>
					<div style={{ height: '20px' }}>
						<img
							className={expImg}
							src='https://images.unsplash.com/photo-1533750088811-7a8b16218df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
							alt='random'
						/>
					</div>
				</div>
				<div style={{ margin: '0 10px' }}>
					<div className={overlayContent}>
						<h4 style={{ marginBlockEnd: 0 }}>CARTEN GOSLEN</h4>
						<p style={{ marginBlockStart: 0 }}>
							{' '}
							<i>January 2015 - April 2017</i>{' '}
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo
							vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque
							non tellus.
						</p>
					</div>
					<div style={{ height: '20px' }}>
						<img
							className={expImg}
							src='https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
							alt='random'
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Experience;
