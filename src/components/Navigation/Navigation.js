import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Navigation.css';

export default function IconTabs() {
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<Paper square className='tabs'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='icon label tabs example'
					centered
				>
					<Tab icon={<PersonRoundedIcon />} aria-label='phone' label='About Me' />
					<Tab icon={<FavoriteIcon />} aria-label='favorite' label='Projects' />
					<Tab icon={<WorkRoundedIcon />} aria-label='person' label='Experience' />
					<Tab icon={<FavoriteIcon />} aria-label='person' label='Skills' />
					<Tab icon={<QuestionAnswerRoundedIcon />} aria-label='person' label='Contact Me' />
				</Tabs>
			</Paper>
		</React.Fragment>
	);
}
