import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Scroll,{ animateScroll as scroll} from 'react-scroll'
import './Navigation.css';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	
	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

export default function ScrollableTabsButtonForce() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);
	const [tabTypes,setTabTypes] =React.useState(['standard',true])
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	
	React.useLayoutEffect(() => {
		function updateSize() {
			if(window.innerWidth>500){
				setTabTypes(['standard',true])
			}else{
				setTabTypes(['scrollable',false])
			}
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	
/* var Element = Scroll.Element; */
var scroller = Scroll.scroller;
 
// Somewhere else, even another file

	const scrollFunc=(e)=>{
		if(e==='about-me'){
			scroll.scrollToTop()
		}else{

			scroller.scrollTo(e, {
				duration: 800,
				delay: 0,
				offset: -200,
				smooth: 'easeInOutQuart'
			  })
		}
	}
	return (
		<div className={classes.root}>
			<AppBar color='default' className='tabs'>
				<Tabs
					value={value}
					onChange={handleChange}
					variant={tabTypes[0]}
					scrollButtons='on'
					indicatorColor='primary'
					textColor='primary'
					aria-label='scrollable force tabs example'
					centered={tabTypes[1]}
				>
					<Tab onClick={()=>scrollFunc("about-me")} label='About Me' icon={<PersonPinIcon />} {...a11yProps(0)} />
					<Tab  onClick={()=>scrollFunc("projects")} label='Projects' icon={<FavoriteIcon />} {...a11yProps(1)} />
					<Tab  onClick={()=>scrollFunc("experience")} label='Experience' icon={<WorkRoundedIcon />} {...a11yProps(2)} />
					<Tab  onClick={()=>scrollFunc("skill")} label='Skill' icon={<FavoriteIcon />} {...a11yProps(3)} />
					<Tab  onClick={()=>scrollFunc("contact-me")} label='Contact Me' icon={<QuestionAnswerRoundedIcon />} {...a11yProps(4)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				About Me
			</TabPanel>
			<TabPanel value={value} index={1}>
				Project
			</TabPanel>
			<TabPanel value={value} index={2}>
				Experience
			</TabPanel>
			<TabPanel value={value} index={3}>
				Skill
			</TabPanel>
			<TabPanel value={value} index={4}>

			</TabPanel>
		</div>
	);
}
