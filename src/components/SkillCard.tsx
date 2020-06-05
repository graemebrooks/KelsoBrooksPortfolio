import React from 'react';
import styled from 'styled-components';

// Styles
const Div = styled.div`
	width: 12rem;
	height: 14rem;
	margin: 1rem;

	.skillImage {
		width: 12rem;
		height: 12rem;
		background: #ff9d00;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.skillTitle {
		margin-bottom: 0.5rem;
	}

	img {
		width: 90%;
	}
`;

type SkillsCardProps = { imageUrl: string; skill: string };

function SkillsCard({ imageUrl, skill }: SkillsCardProps) {
	return (
		<Div>
			<div className="skillTitle">
				<p>{skill}</p>
			</div>
			<div className="skillImage">
				<img src={imageUrl} alt={skill} />
			</div>
		</Div>
	);
}

export default SkillsCard;
