import React from 'react';
import { useParams } from 'react-router-dom';
import MD from 'react-markdown';
import styled from 'styled-components';

import useSinglePost from '../custom-hooks/useSinglePost';

// Styles
const Div =
	styled.div <
	{ imageSrc: string } >
	`
	font-family: 'Roboto Mono', monospace;
	max-width: 70vw;

	

	.imageBox {
		width: 70vw;
		height: 30rem;
		background: url(${(props) => props.imageSrc});
		background-size: cover;
		background-position: center;
	}

	h1 {
		font-size: 3rem;
		text-align: left;
		margin: 1rem auto;
		padding-bottom: 1rem;
		border-bottom: 3px solid #ffb3fa;
		max-width: 90vw;
	}

	h2 {
		font-size: 1.5rem;
		text-align: left;
		margin: 1rem auto;
	}

	.postBody {
		max-width: 100%;
		text-align: justify;
		margin-bottom: 3rem;
		line-height: 1.5;
		
		p {
			margin: 1.5rem auto;
			display: flex;

			img {
				max-width: 100%;
				max-height: 30rem;
				margin: 1rem auto;
			}
		}

		li {
			list-style-type: disc;
			margin-left: 3rem;
		}

		pre {
			background: #ffe3fd;
			padding: 2rem;
			overflow-y: auto;
			color: black;
		}

		blockquote {
			font-size: 1.5rem;
			font-weight: bold;
			background: #ffe3fd;
			padding: 1rem;
			color: black;
		}

	}

	@media (max-width: 700px) {
		max-width: 90vw;
		margin: 1rem;

		.imageBox {
			width: 90vw;
		}

		h1 {
			font-size: 2rem;
		}
	}
`;

function BlogPost() {
	let { id } = useParams();
	const [ post, isLoading ] = useSinglePost(id);

	const renderPost = () => {
		if (isLoading) return <p>Loading...</p>;

		return (
			<Div imageSrc={post.featuredImage.fields.file.url}>
				<div>
					<div className="imageBox" />
					<h1>{post.title}</h1>
				</div>
				<div className="postBody">
					<MD source={post.body} />
				</div>
			</Div>
		);
	};

	return <div>{renderPost()}</div>;
}

export default BlogPost;
