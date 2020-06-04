import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

// Component imports
import Nav from './components/Nav';

function App() {
	return (
		<div className="App">
			<Nav />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/skills">
					<Skills />
				</Route>
				<Route path="/background">
					<Background />
				</Route>
			</Switch>
		</div>
	);
}

function Home() {
	return (
		<div>
			<h2>Homehome</h2>
		</div>
	);
}

function Skills() {
	return (
		<div>
			<h2>Skills</h2>
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
