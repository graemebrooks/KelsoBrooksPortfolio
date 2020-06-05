import React from 'react';
import styled from 'styled-components';

// Styles
const Div = styled.div`
	header {
		font-family: 'Roboto Mono', monospace;
		display: flex;
		justify-content: left;

		border-bottom: 2px solid black;

		h2 {
			padding: 0.5rem;
			background: ${(props) => props.color};
			margin-bottom: 1rem;
		}
	}
`;

type PageHeaderProps = { title: string; color: string; emoji: string };

function PageHeader({ title, color, emoji }: PageHeaderProps) {
	return (
		<Div color={color}>
			<header>
				<h2>
					{title}
					{emoji}
				</h2>
			</header>
		</Div>
	);
}

export default PageHeader;
