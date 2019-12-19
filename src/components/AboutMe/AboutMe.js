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
                <h1>Faiz Hameed</h1>  
                <h3>Full Stack Web Developer</h3>        
            </div>
            <p>
                Creating Beautiful things with quality and elegance! <br/>
                Experienced in Javascript and Python. My favourite technology is ReactJS
            </p>
        </React.Fragment>
        )
}

export default AboutMe;