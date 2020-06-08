import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';

// Imported Components
import PageHeader from '../components/PageHeader';

const Div = styled.div`
	font-family: 'Roboto Mono', monospace;
	margin-top: 2rem;

	width: 60vw;

	h2 {
		margin-top: 1rem;
	}

	p {
		padding-top: 1rem;
		max-width: 100%;
		text-align: left;
		line-height: 2;
	}

	.intro {
		display: flex;
		flex-direction: row;
		margin-top: 1rem;

		img {
			max-height: 30vh;
			margin-right: 1rem;
			max-width: 20vw;
			float: left;
		}
	}

	.sectionHeader {
		text-align: left;
		border-left: 3px solid #58d613;
		padding-left: 0.5rem;
		margin-top: 1.5rem;
	}

	.contactInfo {
		display: flex;
		justify-content: right;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;

		a {
			margin-right: 1.5rem;
			padding: 0.15rem;
		}

		a:hover {
			background: #58d613;
		}
	}

	.buddhismInfo {
		margin-top: 1.5rem;
		display: flex;

		img {
			max-height: 30vh;
			float: right;
			margin-left: 1rem;
			max-width: 20vw;
		}
	}

	.buddhismQuote {
		margin: 2rem auto;
		padding: 1.5rem;
		background: #58d613;
		max-width: 40vw;
	}

	.codingInfo {
		margin-top: 1.5rem;
		display: flex;

		img {
			max-height: 30vh;
			float: right;
			margin-right: 1rem;
			max-width: 20vw;
		}

		p {
			padding-top: 1rem;
			max-width: 100%;
			text-align: left;
			line-height: 2;
		}
	}

	#codingSecond {
		margin-bottom: 1.5rem;
	}

	.sportsInfo {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		display: flex;
		flex-direction: column;
	}

	.photographyInfo {
		margin-bottom: 1.5rem;

		p {
			margin: 1.5rem auto;
		}

		.imageGallery {
			display: flex;
			flex-wrap: wrap;

			img {
				max-height: 15rem;
				padding: 0.25rem 0.25rem;
			}
		}
	}

	#sportsLogos {
		background: #f5f5f5;
		padding: 1.5rem;
		display: flex;
		justify-content: space-around;

		img {
			max-height: 15rem;
		}
	}

	@media (max-width: 700px) {
		width: 90vw;

		.intro {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 1rem;

			img {
				margin-right: 1rem;
				max-width: 70%;
			}
		}

		.buddhismInfo {
			margin-top: 1.5rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			img {
				margin-right: 1rem;
				max-width: 80%;
			}
		}

		.buddhismQuote {
			max-width: 80%;
		}

		.codingInfo {
			margin-top: 1.5rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			img {
				margin-right: 1rem;
				max-width: 80%;
			}

			p {
				padding-top: 1rem;
				max-width: 100%;
				text-align: left;
				line-height: 2;
			}
		}

		#sportsLogos {
			background: #f5f5f5;
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			img {
				max-width: 10rem;
				padding: 1rem;
			}
		}
	}
`;

const photos = [
	{
		src: 'https://i.imgur.com/bMX9hgz.jpg',
		width: 14,
		height: 9
	},
	{
		src: 'https://i.imgur.com/qsBFVD4.jpg',
		width: 0.76,
		height: 1
	},
	{
		src: 'https://i.imgur.com/rBHRF5u.jpg',
		width: 1.61,
		height: 1
	},
	{
		src: 'https://i.imgur.com/Uvfb4yX.jpg',
		width: 1.61,
		height: 1
	},
	{
		src: 'https://i.imgur.com/ngNisuu.jpg',
		width: 2,
		height: 1
	},
	{
		src: 'https://i.imgur.com/Cz3gX8O.jpg',
		width: 1.4,
		height: 1
	},
	{
		src: 'https://i.imgur.com/m8SwkB5.jpg',
		width: 1.5,
		height: 1
	},
	{
		src: 'https://i.imgur.com/6qTuzmv.jpg',
		width: 1.58,
		height: 1
	},
	{
		src: 'https://i.imgur.com/8NFCfH5.jpg',
		width: 1.64,
		height: 1
	},
	{
		src: 'https://i.imgur.com/ebYkaVj.jpg',
		width: 0.84,
		height: 1
	},
	{
		src: 'https://i.imgur.com/kjK26Sq.jpg',
		width: 1.5,
		height: 1
	},
	{
		src: 'https://i.imgur.com/sqMQmUd.jpg',
		width: 0.74,
		height: 1
	}
];

function AboutPage() {
	return (
		<Div>
			<PageHeader title="About" color="#58d613" emoji="👋" />
			<h2>G. Kelso Brooks</h2>
			<div className="intro">
				<img src="https://i.imgur.com/971Cff2.png" alt="Kelso Brooks" />
				<p>
					Hello! I'm Kelso Brooks. I'm a software developer from Austin, Texas. Consider this my digital
					handshake
					<span role="img" aria-label="handshake">
						{' '}
						🤝
					</span>. If you're a prospective employer or just one of those people who get some strange kick out
					of portfolios, I hope this site provides you with a better idea of who I am! The links above will
					illustrate who I am as a developer, below I hope to give a sense of who I am as a person. Don't be a
					stranger and feel free to reach out with any questions!
					<span className="contactInfo">
						<a href="https://github.com/graemebrooks" target="_blank" rel="noopener noreferrer">
							Github Profile{' '}
							<span role="img" aria-label="laptop">
								💻
							</span>
						</a>
						<a
							href="https://www.linkedin.com/in/graeme-kelso-brooks/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn Profile{' '}
							<span role="img" aria-label="laptop">
								📠
							</span>
						</a>
					</span>
				</p>
			</div>
			<hr />
			<h2 className="sectionHeader">Buddhism</h2>
			<div className="buddhismInfo">
				<p>
					Buddhism has played an integral role in developing my worldview. The pragmatism, introspection and
					emphasis on self-improvement as a means to serve others were what first appealed to me. What I've
					just begun to scratch at is the power of joy and the cultivation of inner peace. Like many people, I
					struggle everyday to live up to the ideals I advocate, but everyday provides me fresh opportunities
					to learn, grow, and serve. Step by step, I'm getting there.
				</p>
				<img src="https://i.imgur.com/9Ftcb0j.png" alt="buddha statue" />
			</div>
			<div className="buddhismQuote">
				<p>
					“Suffering is not enough. Life is both dreadful and wonderful… How can I smile when I am filled with
					so much sorrow? It is natural–you need to smile to your sorrow because you are more than your
					sorrow.” - Thich Nhat Hanh
				</p>
			</div>
			<hr />
			<h2 className="sectionHeader">Coding</h2>
			<div className="codingInfo">
				<img src="https://i.imgur.com/EYGRJpC.png" alt="laptop" />
				<p>
					I have been interested in coding since high school, but only after I had graduated college with a
					degree in microbiology did I actually give it a try. As a hobbyist, I really enjoyed fiddling with
					python and building my first static websites with HTML/JS/CSS. I never considered attempting a
					wholesale career change into software engineering. I am fortunate, however, to have a bunch of
					friends and family who are either developers themselves or work in IT in some fashion. Without them
					I never would have had the courage to take the plunge into a software engineering bootcamp. I cannot
					mention my journey into software without thanking a close friend, Cody Simms, for spending countless
					hours patiently discussing and teaching me much of what he's learned as a developer.
				</p>
			</div>
			<p id="codingSecond">
				My bootcamp did an excellent job of laying a great foundation in both technical skills and professional
				skills. Most importantly, it demonstrated to me that I have the aptitude and genuine passion to become a
				software engineer. I continue my education everyday. I love tackling new languages, tools, and
				frameworks for the joy of coding. There's rarely a stretch where I'm not thinking about, or actively
				tinkering on a project. I am grateful to have found this path and am excited to follow where it leads.
			</p>
			<hr />
			<h2 className="sectionHeader">Sports</h2>
			<div className="sportsInfo">
				<div id="sportsLogos">
					<img src="https://i.imgur.com/yGd2FUl.png" alt="new england patriots logo" />
					<img src="https://i.imgur.com/w1D6RIl.png" alt="texas tech logo" />
					<img src="https://i.imgur.com/fXfBDdY.png" alt="dallas mavericks logo" />
				</div>
				<p>
					I am an avid football and basketball fan. Before I get lambasted for being a patriots fan in Texas,
					I'll explain. I spent much of my childhood in New Hampshire, where my father's side of the family is
					from, and have inherited the unhealthy obsession from him. I am a part of long-running dynasty
					fantasy football league which keeps me in touch with my friends from college and high school. So if
					you're ever looking to engage in a lengthy conversation about either sport, I'm happy to oblige!
				</p>
			</div>
			<hr />
			<h2 className="sectionHeader">Photography</h2>
			<div className="photographyInfo">
				<p>
					I enjoy photography. In particular, I love to take pictures of my friends and the places we go
					together. They mean the world to me. So I hope you'll indulge some of our memories here.
				</p>
				<Gallery photos={photos} />
			</div>
		</Div>
	);
}

export default AboutPage;
