import React from 'react';
import './Projects.css';

function Projects() {
	return (
		<div id='projects'>
			<h2>Below, I will share some of my previously made projects</h2>
			<div className='projects-div'>
				<div className='project-card'>
					<div className='btn-wrap'>
						<button className='btn'>GitHub</button>
						<button className='btn'>Live Link</button>
					</div>
				</div>
				<div className='project-card'>
					<div className='btn-wrap'>
						<button className='btn'>GitHub</button>
						<button className='btn'>Live Link</button>
					</div>
				</div>
				<div className='project-card'>
					<div className='btn-wrap'>
						<button className='btn'>GitHub</button>
						<button className='btn'>Live Link</button>
					</div>
				</div>
				<div className='project-card'>
					<div className='btn-wrap'>
						<button className='btn'>GitHub</button>
						<button className='btn'>Live Link</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Projects;
