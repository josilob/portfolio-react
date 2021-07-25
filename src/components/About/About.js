import React from 'react';
import './About.css';

const About = () => {
	return (
		<div id='about' className='about'>
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
					<p className='sub-yellow'>
						I'm a Web Developer that's currently located in the Northern NY State. At
						the crossroads between creativity and logic, I am fueled by inspirational
						designs, server-side architecture and integration of everything in one
						functional bond. Relentless spirit and curious mind pursuing full time job
						opportunity. If I am not outside, I enjoy playing PC games, solving sudoku
						or crossword puzzles.
					</p>
					<br />
					<hr />
				</div>
			</div>
		</div>
	);
};
export default About;
