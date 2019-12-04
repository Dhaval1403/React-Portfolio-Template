import React from 'react';
import portfolio from '../../utils/portfolio.png';
import { Typography } from '@material-ui/core';
import './AboutMe.css';

const AboutMe = () => {
    return (
		<React.Fragment>
            <Typography
            variant='h2'
            display='block'
            align='center'
            style={{ margin: '1rem', fontSize: '1.6rem', textTransform: 'uppercase' }}
            >
                About Me
            </Typography>   
            <div className="name">
                <img src={portfolio} alt="profile_photo" className="img"/>
                <h1>John Doe</h1>  
                <h3>Full Stack Web Developer</h3>        
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            </p>
        </React.Fragment>
        )
}

export default AboutMe;