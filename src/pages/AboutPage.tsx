import React from 'react';
import styled from 'styled-components';

// Imported Components
import PageHeader from '../components/PageHeader';

// Styles
const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	margin-top: 2rem;

	width: 60vw;

	.intro {
		display: flex;
		flex-direction: row;
		margin-top: 1.5rem;

		p {
			padding-top: 1rem;
			width: 40vw;
		}
	}

	img {
		max-height: 30vh;
		float: left;
		max-width: 20vw;
	}
`;

function AboutPage() {
	return (
		<Div>
			<PageHeader title="About" color="#58d613" emoji="👋" />
			<div className="intro">
				<img src="https://i.imgur.com/971Cff2.png" alt="Kelso Brooks" />
				<p>
					Hello! I'm Kelso Brooks. I'm a software developer from Austin, Texas. Consider this my digital
					handshake
					<span role="img" aria-label="handshake">
						{' '}
						🤝
					</span>.
				</p>
			</div>
		</Div>
	);
}

export default AboutPage;
