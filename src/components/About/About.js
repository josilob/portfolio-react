import React from 'react';
import './About.css';

function About() {
	return (
		<div id='about'>
			<div id='hello'>
				<h2>Hello there!</h2>
				<h1>I am Bojan</h1>
			</div>
			<h2>Everlearning inquisitor of technical sciences</h2>
			<div className='intro'>
				<div>
					<p>
						I'm a full stack developer from NY. At the crossroads between
						creativity and logic, I am fueled by inspirational designs,
						server-side architecture and integration of everything in one
						functional bond.
						<br />
					</p>
				</div>
				<div>
					<div className='profile-pic'>
						<img src='profile.jpeg' alt='profile' id='prof-pic' />
					</div>
				</div>
				<div className='dev'>
					<h2>
						Full stack <br />
						<br />
						developer
					</h2>
				</div>
			</div>
		</div>
	);
}
export default About;
