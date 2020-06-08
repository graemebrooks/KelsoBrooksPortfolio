import React from 'react';
import styled from 'styled-components';

// Styles
const Div = styled.div`
	width: 100%;
	margin: 1.5rem 0;

	.projectBody {
		display: grid;
		grid-template-columns: 1fr 4fr;
	}

	.projectTags {
		ul {
			display: flex;
		}
		p {
			margin-right: 0.5rem;
			color: #bdbdbd;
		}
	}

	.firstColumn {
		display: flex;
		flex-direction: column;

		a {
			margin-top: 1rem;
			margin-right: auto;
			padding: 0.5rem;
			text-align: left;
		}

		a:hover {
			background: #00c2e5;
		}
	}

	h3 {
		display: flex;
		align-items: left;
		font-size: 1.2rem;
		margin-bottom: 1rem;
		background: #00c2e5;
		padding: 0.2rem;
	}

	p {
		display: flex;
		align-items: left;
		margin-bottom: 0.8rem;

		text-align: left;
		line-height: 1.5;
	}

	img {
		max-width: 26rem;
		margin-right: 1rem;
	}

	@media (max-width: 700px) {
		.projectBody {
			display: flex;
			flex-direction: column;
		}

		.firstColumn {
			margin-bottom: 1rem;
		}

		img {
			max-height: 10rem;
			margin-right: 1rem;
		}
	}

	.projectTags {
		margin-bottom: 2rem;

		ul {
			display: flex;
			flex-wrap: wrap;
		}
		p {
			margin-right: 0.5rem;
			color: #bdbdbd;
		}
	}
`;

type ProjectProps = {
	name: string;
	imageUrl: string;
	description: string;
	projectLink: string;
	projectTags: Array<string>;
};

function Project({ name, imageUrl, description, projectLink, projectTags }: ProjectProps) {
	return (
		<Div>
			<div className="projectBody">
				<div className="firstColumn">
					<img src={imageUrl} alt="project screenshot" />
					<a href={projectLink} target="_blank" rel="noopener noreferrer">
						Github Repo Link
					</a>
				</div>
				<div className="secondColumn">
					<h3>{name}</h3>
					<p>{description}</p>
				</div>
			</div>
			<div className="projectTags">
				<ul>
					{projectTags.map((tag) => {
						return <p>#{tag}</p>;
					})}
				</ul>
			</div>
		</Div>
	);
}

export default Project;
