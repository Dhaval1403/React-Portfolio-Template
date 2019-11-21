import React, { Component } from 'react';
import PersistentDrawerRight from './components/Navigation/Navigation';
import ProjectCardList from './components/ProjectCardList/ProjectCardList';
import Experience from './components/Experience/Experience';
import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<PersistentDrawerRight />
				<ProjectCardList />
				<Experience />
			</React.Fragment>
		);
	}
}

export default App;
