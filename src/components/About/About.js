import React from 'react';
import './About.css';

function About() {
	return (
		<div id='about'>
			<div id='hello'>
				<h2>Hello there!</h2>
				<h1>I am Bojan</h1>
			</div>
			<h2>Relentless spirit, curious mind </h2>
			<div className='intro'>
				<div>
					<p>
						Inquisitive 26 year old civil engineer and full stack web developer
						coming from the Lake Placid area. At the crossroads between
						creativity and logic, I am fueled by inspirational designs,
						server-side architecture and integration of everything in one
						functional bond.
						<br />
						<hr />
					</p>
				</div>
				<div>
					<div className='profile-pic'>
						<img src='profile.jpeg' alt='profile' id='prof-pic' />
					</div>
				</div>
				<div>
					<p>
						Coming from the northern part of NY state, I enjoy hiking trails or
						camping during summer months. During the winter time, you will find
						me snowshoeing or cross-country skiing through the ADK. If I am not
						outside, I am playing PC games or working on my web development
						skills.
						<br />
						<hr />
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;
