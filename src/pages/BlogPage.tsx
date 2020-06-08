import React from 'react';
import styled from 'styled-components';

// Imported Components
import PageHeader from '../components/PageHeader';

// Styles
const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	margin-top: 2rem;

	width: 60vw;
`;

function BlogPage() {
	return (
		<Div>
			<PageHeader title="Blog" color="#ffb3fa" emoji="📜" />
			<h2>
				Under Contruction{' '}
				<span role="img" aria-label="hammer and wrench">
					🛠
				</span>
			</h2>
		</Div>
	);
}

export default BlogPage;
