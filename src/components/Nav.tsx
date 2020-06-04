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

		li {
			margin: auto 0.5rem;
			padding: 0.4rem;
		}

		li:hover {
			background: orange;
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
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/skills">Skills</Link>
				</li>
				<li>
					<Link to="/background">Background</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
			</ul>
		</Div>
	);
}

export default Nav;
