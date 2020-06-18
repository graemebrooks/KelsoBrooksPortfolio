import React, { useState } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globalStyles.js';

// Component imports
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import BackgroundPage from './pages/BackgroundPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './components/BlogPost';

function App() {
	const [ theme, setTheme ] = useState('light');
	const toggleTheme = () => {
		console.log('toggle');
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<div className="App">
				<GlobalStyles />
				<Nav toggleTheme={toggleTheme} />

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
					<Route path="/blog/:id" component={BlogPost} />
					<Route path="/blog">
						<BlogPage />
					</Route>
				</Switch>
			</div>
		</ThemeProvider>
	);
}

export default withRouter(App);
