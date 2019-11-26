import React from 'react';
import { SvgIcon, Typography } from '@material-ui/core';
import './Skill.css';

import skillList from '../../utils/skill-list';

export default function Skill({ skill }) {
	return (
		<React.Fragment>
			<Typography variant='h5' display='block' style={{ margin: '1rem 2rem', fontSize: '1.6rem' }}>
				Skills
			</Typography>
			<div className='skill-container'>
				{skillList.map((skill, i) => (
					<div className='skill-img' key={i}>
						<SvgIcon
							titleAccess={skill.name}
							style={{ width: 'auto', height: '100%' }}
							className='svg-icon'
							viewBox='0 0 24 24'
							color='#fff'
						>
							<path d={skill.svgPath} />
						</SvgIcon>
					</div>
				))}
			</div>
		</React.Fragment>
	);
}
