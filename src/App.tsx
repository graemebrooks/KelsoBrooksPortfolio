import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

// Component imports
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';

function App() {
	return (
		<div className="App">
			<Nav />

			<Switch>
				<Route exact path="/">
					<AboutPage />
				</Route>
				<Route path="/skills">
					<SkillsPage />
				</Route>
				<Route path="/background">
					<Background />
				</Route>
			</Switch>
		</div>
	);
}

function Background() {
	return (
		<div>
			<h2>Background</h2>
		</div>
	);
}

export default withRouter(App);
