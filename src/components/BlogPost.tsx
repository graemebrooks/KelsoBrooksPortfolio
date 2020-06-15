import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MD from 'react-markdown';
import styled from 'styled-components';

// Imported Components
import PageHeader from '../components/PageHeader';

// Styles
const Div = styled.div``;

function BlogPost() {
	let { id } = useParams();

	return (
		<Div>
			<PageHeader title="About" color="#58d613" emoji="👋" />
			<p>This is a blog post! ID is {id}</p>
		</Div>
	);
}

export default BlogPost;
