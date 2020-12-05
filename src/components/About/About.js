import React from 'react';
import './About.css';

function About() {
	return (
		<div className='about'>
			<div id='hello'>
				<h2>Hello there!</h2>
				<h1>I am Bojan</h1>
				<h2>Find out more about me below</h2>
			</div>
			<div className='intro'>
				<div>
					<p>
						A civil engineer and a full stack developer from New York. At the
						crossroads between creativity and logic, I am fueled by
						inspirational designs, server-side architecture and integration of
						everything in one functional bond. Evelearning inquisitor, looking
						to improve with each given opportunity.
						<br />
					</p>
				</div>
				<div>
					<div className='profile-pic'>
						<img src='profile.jpeg' alt='profile' id='prof-pic' />
					</div>
				</div>
				<div>
					<h2>
						Full <br />
						stack <br />
						developer <br />
					</h2>
				</div>
			</div>
		</div>
	);
}
export default About;
