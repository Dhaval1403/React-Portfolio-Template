import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './components/Navigation/Navigation';
import ProjectCardList from './components/ProjectCardList/ProjectCardList';
import Experience from './components/Experience/Experience';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<PersistentDrawerRight />
				<Container maxWidth='lg'>
					<ProjectCardList />
					<Experience />
				</Container>
			</React.Fragment>
		);
	}
}

export default App;
