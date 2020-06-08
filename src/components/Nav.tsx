import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styles
const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	display: flex;
	flex-direction: column;
	width: 60vw;

	padding: 1rem;
	justify-content: left;
	align-items: left;

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
			background: #ffb3fa;
		}
	}

	p {
		margin-right: auto;
		margin-top: 0.75rem;
	}
`;

function Nav() {
	return (
		<Div>
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
		</Div>
	);
}

export default Nav;
