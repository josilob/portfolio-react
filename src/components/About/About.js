import React from 'react';
import './About.css';

const About = () => {
	return (
		<div id='about' className='intro'>
			<div className='about-skills'>
				<h2 className='subtitle--red'>As a web developer I can offer to:</h2>
				<ul>
					<li>1. Create responsive and mobile first designs</li>
					<li>2. Build Single Page Applications with React</li>
					<li>3. Make a Backend with Express.js and MongoDB</li>
					<li>4. Use functional components and React Hooks</li>
					<li>5. Route on the page with react-router-dom</li>
					<li>6. Style with CSS, SCSS or Styled Components</li>
					<li>7. Apply modern ES syntax and modularize the code</li>
					<li>8. Deploy on platforms like Netlify, Heroku or Vercel </li>
				</ul>
				<br />
				<hr></hr>
			</div>

			<div className='about-personal'>
				<div>
					<p className='subheading'>
						I'm a Web Developer with BSc in Civil Engineering, coming from the Lake
						Placid area. At the crossroads between creativity and logic, I am fueled
						by inspirational designs, server-side architecture and integration of
						everything in one functional bond. Relentless spirit and curious mind
						persuing big dreams.
					</p>
					<br />
					<hr />
				</div>
				<div>
					<p className='subheading'>
						Coming from the northern part of New York, I enjoy hiking trails or
						camping during summer months. During the winter time, you will find me
						snowshoeing or cross-country skiing through the ADK. If I am not outside,
						I enjoy playing PC games, solving sudoku or working on crossword puzzles.
					</p>
					<br />
					<hr />
				</div>
			</div>
		</div>
	);
};
export default About;
