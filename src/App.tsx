import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

// Component imports
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import BackgroundPage from './pages/BackgroundPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';

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
					<BackgroundPage />
				</Route>
				<Route path="/projects">
					<ProjectsPage />
				</Route>
				<Route path="/blog">
					<BlogPage />
				</Route>
			</Switch>
		</div>
	);
}

export default withRouter(App);
