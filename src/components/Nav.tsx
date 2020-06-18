import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Switch from '../components/Switch';

// Styles
const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	display: flex;
	width: 70vw;

	padding: 1rem;

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;

		a:active {
			color: black;
		}

		li {
			margin: auto 0.5rem;
			padding: 0.4rem;

			a:link {
				color: #173823;
				text-decoration: none;
			}
		}

		.aboutLink:hover {
			background: #58d613;
		}

		.skillsLink:hover {
			background: #ff9d00;
		}

		.backgroundLink:hover {
			background: #fffeb8;
		}

		.projectsLink:hover {
			background: #00c2e5;
		}

		.blogLink:hover {
			background: #ffe3fd;
		}
	}

	p {
		margin-right: auto;
		margin-top: 0.75rem;
	}

	.navContainer {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media (max-width: 700px) {
		width: 100vw;
		padding: 0;

		.navContainer {
			display: flex;
			flex-direction: column;
		}

		ul {
			width: 100%;
			flex-direction: column;
			font-size: 1.5rem;
			margin: 0;

			li {
				margin: 0;
				width: 100%;
			}
		}
	}
`;

interface navProps {
	toggleTheme: () => void;
}

function Nav(props: navProps) {
	return (
		<Div>
			<div className="navContainer">
				<ul>
					<li className="aboutLink">
						<Link to="/">About</Link>
					</li>
					<li className="skillsLink">
						<Link to="/skills">Skills</Link>
					</li>
					<li className="backgroundLink">
						<Link to="/background">Background</Link>
					</li>
					<li className="projectsLink">
						<Link to="/projects">Projects</Link>
					</li>
					<li className="blogLink">
						<Link to="/blog">Blog</Link>
					</li>
				</ul>

				<Switch toggleTheme={props.toggleTheme} />
			</div>
		</Div>
	);
}

export default Nav;
