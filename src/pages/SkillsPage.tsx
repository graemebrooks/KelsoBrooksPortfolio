import React from 'react';
import styled from 'styled-components';

// Imported Components
import PageHeader from '../components/PageHeader';
import SkillCard from '../components/SkillCard';

// Styles
const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	margin-top: 2rem;

	width: 70vw;

	.skillsContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 4rem;
	}

	@media (max-width: 700px) {
		width: 90vw;

		.skillsContainer {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin-bottom: 4rem;
		}
	}
`;

function SkillsPage() {
	return (
		<Div>
			<PageHeader title="Skills" color="#ff9d00" emoji="💻" />
			<div className="skillsContainer">
				<SkillCard imageUrl="https://i.imgur.com/JPPvvpe.png" skill="Javascript" />
				<SkillCard imageUrl="https://i.imgur.com/qUbmPcC.png" skill="Python" />
				<SkillCard imageUrl="https://i.imgur.com/fY9c7c7.png" skill="Java" />
				<SkillCard imageUrl="https://i.imgur.com/NZAw8BV.png" skill="React" />
				<SkillCard imageUrl="https://i.imgur.com/X0zavgE.png" skill="Node" />
				<SkillCard imageUrl="https://i.imgur.com/xLI0Ltn.png" skill="MongoDB" />
				<SkillCard imageUrl="https://i.imgur.com/TVZk8BO.png" skill="PostgreSQL" />
				<SkillCard imageUrl="https://i.imgur.com/ijMJKTb.png" skill="Django" />
				<SkillCard imageUrl="https://i.imgur.com/ZpGsiSl.png" skill="Spring Boot" />
				<SkillCard imageUrl="https://i.imgur.com/EAGTrXn.png" skill="GraphQL" />
				<SkillCard imageUrl="https://i.imgur.com/lnUnkDl.png" skill="HTML5" />
				<SkillCard imageUrl="https://i.imgur.com/kcQmJ0n.png" skill="CSS3" />
				<SkillCard imageUrl="https://i.imgur.com/vpy08mM.png" skill="Gatsby" />
				<SkillCard imageUrl="https://i.imgur.com/cjQf4aZ.png" skill="AWS EC2" />
				<SkillCard imageUrl="https://i.imgur.com/wk3RV9X.png" skill="Git" />
				<SkillCard imageUrl="https://i.imgur.com/egatImc.png" skill="Flask" />
				<SkillCard imageUrl="https://i.imgur.com/xXdelzo.png" skill="TypeScript" />
				<SkillCard imageUrl="https://i.imgur.com/aCd76qO.png" skill="Docker" />
				<SkillCard imageUrl="https://i.imgur.com/zGfNVp9.png" skill="Nginx" />
			</div>
		</Div>
	);
}

export default SkillsPage;
