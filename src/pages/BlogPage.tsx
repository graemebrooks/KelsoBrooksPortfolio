import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import usePosts from '../custom-hooks/usePosts';

// Imported Components
import PageHeader from '../components/PageHeader';
import BlogPostPreview from '../components/BlogPostPreview';

// Styles
const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	margin-top: 2rem;

	width: 60vw;

	.postsContainer {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 700px) {
		width: 90vw;
	}
`;

function BlogPage() {
	const [ posts, isLoading ] = usePosts();

	const renderPosts = () => {
		if (isLoading) {
			return <p>Loading...</p>;
		}

		return posts.map((post) => (
			<Link
				key={post.fields.slug}
				to={`blog/${post.fields.slug}`}
				style={{ color: 'inherit', textDecoration: 'inherit' }}
			>
				<BlogPostPreview
					title={post.fields.title}
					description={post.fields.description}
					imageURL={post.fields.featuredImage.fields.file.url}
					date={post.fields.date}
				/>
			</Link>
		));
	};

	return (
		<Div>
			<PageHeader title="Blog" color="#ffb3fa" emoji="📓" />

			<div className="postsContainer">{renderPosts()}</div>
		</Div>
	);
}

export default BlogPage;
