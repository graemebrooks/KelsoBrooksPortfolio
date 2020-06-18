import React from 'react';
import styled from 'styled-components';

// Imported Components
import PageHeader from '../components/PageHeader';
import Project from '../components/Project';

// Styles
const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	margin-top: 2rem;

	width: 70vw;

	h2 {
		margin-top: 1.5rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: left;
	}

	@media (max-width: 1200px) {
		width: 90vw;
	}
`;

function ProjectsPage() {
	return (
		<Div>
			<PageHeader title="Projects" color="#00c2e5" emoji="🔧" />
			<Project
				name="WAFFL Archive"
				imageUrl="https://camo.githubusercontent.com/cb846720686b047c07f614339004db31c9f18aa4/68747470733a2f2f692e696d6775722e636f6d2f4f7042734357662e706e67"
				projectLink="https://github.com/graemebrooks/waffl-archive/tree/master/waffl-archive"
				description="WAFFL Archive is the digital home of the Westwood Affiliated Fantasy Football League, a dynasty league founded by my friends in 2013. My Friend and commissioner, Kyle Harris, has poured much of himself into maintaining an exhaustive list of statistics througout the league's history in a series of Google Sheets. It was my hope to allow him to continue to maintain his records there, while also using that data to produce an interactive frontend experience to browse that data. As a result I built a frontend Gatsby application that consumes a node API I use to extract the data from the Google Sheets containing league data."
				projectTags={[ 'React', 'Node', 'Gatsby', 'AWS', 'EC2', 'Javascript' ]}
			/>
			<Project
				name="Mygration"
				imageUrl="https://camo.githubusercontent.com/da934c0f7cbe14f57e309e0cdeda76d60c3cae52/68747470733a2f2f692e696d6775722e636f6d2f4a39484a4741322e706e67"
				description="Mygration is a Django application that allows users to create and access the address information for previous residences and workplaces and visualize them geographically. In addition to being a useful resource for organizational purposes, Mygration highlights your journey in an increasingly migrant America."
				projectLink="https://github.com/graemebrooks/Mygration"
				projectTags={[ 'Django', 'Python', 'PostgresQL' ]}
			/>
			<Project
				name="Tannhauser"
				imageUrl="https://camo.githubusercontent.com/e4a42f1271ae1b973a09e5e1aed54d2ea394e02d/68747470733a2f2f692e696d6775722e636f6d2f473153494264512e706e67"
				description="Tannhauser is an application that utilizes a Node backend and React frontend allowing users to track, rate, and share both the movies they've seen, and want to see, in one seamless single page application."
				projectLink="https://github.com/graemebrooks/tannhauser"
				projectTags={[ 'React', 'Node', 'MongoDB', 'JWT', 'BCrypt', 'Javascript' ]}
			/>
			<Project
				name="Oxbow"
				imageUrl="https://camo.githubusercontent.com/fe64aca0d55e923176e08471426bd5202b1f6a4b/68747470733a2f2f692e696d6775722e636f6d2f55694e55526b5a2e706e67"
				description="Oxbow is an application for aspiring art critics. Using a large collection of classical art from the Metroplitan Museum of Art's Collection API, users can hone their craft by reviewing classical works while reading and interacting with other user's critiques."
				projectLink="https://github.com/graemebrooks/Oxbow"
				projectTags={[ 'Node', 'Express', 'MongoDB', 'OAuth' ]}
			/>
			<Project
				name="Border Check"
				imageUrl="https://github.com/graemebrooks/Border-Check/raw/master/assets/exampleView.png"
				description="The year is 2124. After decades of sectarian violence, a tyrannical regime hell-bent on enforcing high standards of geographical eduction has consolidated power. Under its rule citizens are subject to on-the-spot geography questionnaires known as 'Border Checks.' Those who resist become prisoners of the state, those who fail are never heard from again. Rack your brain or be sent to the gulags in round after round of exhilerating Border Check!"
				projectLink="https://github.com/graemebrooks/Border-Check"
				projectTags={[ 'Javascript', 'HTML', 'CSS' ]}
			/>
		</Div>
	);
}

export default ProjectsPage;
