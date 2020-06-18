import React from 'react';
import styled from 'styled-components';

import readableDate from '../services/readableDate';

// Styles
const Div = styled.div`
	max-width: 58vw;
	margin: 2rem;

	img {
		max-width: 100%;
	}

	.previewBody {
		padding: 1rem;
		background: #ffe3fd;

		text-align: left;

		h3 {
			font-size: 1.8rem;
			margin-bottom: 1rem;
		}

		p {
			margin-top: 1rem;
		}
	}

	@media (max-width: 700px) {
		max-width: 100%;
		margin: 1rem;
	}
`;

type BlogPostPreviewProps = { title: string; description: string; imageURL: string; date: string };

function BlogPostPreview({ title, description, imageURL, date }: BlogPostPreviewProps) {
	return (
		<Div>
			<img src={imageURL} alt={title} />
			<div className="previewBody lightBox">
				<h3>{title}</h3>
				<p>{readableDate(date)}</p>
				<p>{description}</p>
			</div>
		</Div>
	);
}

export default BlogPostPreview;
