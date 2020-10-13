import React from 'react';
import styled from 'styled-components';

// Imported Components
import PageHeader from '../components/PageHeader';

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

	.backgroundUnit {
		margin-top: 1.5rem;
		margin-bottom: 5rem;

		display: grid;
		grid-template-columns: 1fr 4fr;

		img {
			max-height: 10rem;
			margin-right: 1rem;
		}

		h3 {
			display: flex;
			align-items: left;
			font-size: 1.2rem;
			margin-bottom: 1rem;
			background: #fffeb8;
			padding: 0.2rem;
		}

		p {
			display: flex;
			align-items: left;
			margin-bottom: 0.8rem;

			text-align: left;
		}
	}

	@media (max-width: 1200px) {
		width: 90vw;

		.backgroundUnit {
			margin-top: 1.5rem;
			margin-bottom: 5rem;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			img {
				max-width: 10rem;
				margin-bottom: 1.5rem;
			}

			h3 {
				display: flex;
				align-items: left;
				font-size: 1.2rem;
				margin-bottom: 1rem;
				background: #fffeb8;
				padding: 0.2rem;
			}

			p {
				display: flex;
				align-items: left;
				margin-bottom: 0.8rem;

				text-align: left;
			}
		}
	}
`;

function BackgroundPage() {
	return (
		<Div>
			<PageHeader title="Background" color="#fffeb8" emoji="🎓" />

			<h2>
				Experience {' '}
				<span role="img" aria-label="office">
					🏢
				</span>
			</h2>
			<div className="experience">
				<div className="backgroundUnit">
					<img
						src="https://ga-core.s3.amazonaws.com/cms/files/files/000/000/886/original/ga-logo-gear.png"
						alt="general assembly logo"
					/>
					<div>
						<h3 className="lightBox">Software Engineering Fellow</h3>
						<p>
							Three-month, full-time, and full-stack software engineering Bootcamp. Multi-campus connected
							setting providing experience with the latest front- and back-end programming languages,
							tools, and methodologies including HTML, CSS, SASS, Javascript, Jquery, PostgreSQL, MongoDB,
							Python, AngularJS, NodeJS, ReactJS, Git, Agile/Scrum.
						</p>
					</div>
				</div>
				<div className="backgroundUnit">
					<img
						src="https://www.pinclipart.com/picdir/big/350-3504140_office-icon-office-icon-png-clipart.png"
						alt="open conjecture logo"
					/>
					<div>
						<h3 className="lightBox">Software Business Development - Open Conjecture</h3>
						<p>
							- Drove SAAS sales pipeline via outreach to executives at Digital Marketing Agencies across
							North America.
						</p>
						<p>- Reported on the results of sales and marketing initiatives.</p>
						<p>- Established cold sales process for prospective Digital Marketing partners.</p>
					</div>
				</div>
				<div className="backgroundUnit">
					<img src="https://www.finsmes.com/wp-content/uploads/2017/10/verve.jpg" alt="verve logo" />
					<div>
						<h3 className="lightBox">Software Sales Representative - Pollen (formerly Verve)</h3>
						<p>
							- Drove SAAS sales pipeline through outreach to marketing directors for large scale live
							events and music festivals in North America.
						</p>
						<p>
							- Helped establish Verve's Austin sales office and Sales Development process in a lean
							startup environment.
						</p>
					</div>
				</div>
			</div>
			<h2 className="sectionHeader">
				Education {' '}
				<span role="img" aria-label="dna">
					🔬
				</span>
			</h2>
			<div className="backgroundUnit">
				<img src="https://i.imgur.com/w1D6RIl.png" alt="texas tech logo" />
				<div>
					<h3 className="lightBox">B.S. Microbiology, minor in Chemistry - Texas Tech University</h3>
					<p>
						I studied microorganisms because I had hoped to someday work as an epidemiologist and reduce the
						spread of diseases throughout the world. Towards the end of my degree I assisted in a research
						lab studying the role T cells play in autoimmune disease.
					</p>
				</div>
			</div>
		</Div>
	);
}

export default BackgroundPage;
