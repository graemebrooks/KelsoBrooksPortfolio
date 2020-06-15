import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import usePosts from '../custom-hooks/usePosts';

// Imported Components
import PageHeader from '../components/PageHeader';

// Styles
const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	margin-top: 2rem;

	width: 60vw;
`;

function BlogPage() {
	const [ posts, isLoading ] = usePosts();

	const renderPosts = () => {
		if (isLoading) {
			return <p>Loading...</p>;
		}

		return posts.map((post) => (
			<Link key={post.fields.slug} to={`blog/${post.fields.slug}`}>
				<div>
					{/* <img src={post.fields.featuredImage.fields.file.url} alt={post.fields.title} /> */}
					{/* <small>{readableDate(post.fields.date)}</small> */}
					<h3>{post.fields.title}</h3>
					<p>{post.fields.description}</p>
				</div>
			</Link>
		));
	};

	return (
		<div className="posts__container">
			<h2>Articles</h2>

			<div className="posts">{renderPosts()}</div>
		</div>
	);
}

export default BlogPage;
