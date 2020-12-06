import React from 'react';
import './Projects.css';

function Projects() {
	return (
		<div id='projects'>
			<h2>Below, I will share some of my previously made projects</h2>
			<div className='projects-div'>
				<div className='card'>
					<img src='cineprime.png' alt='project' />
					<p className='title'>Cineprime</p>
					<div className='overlay'></div>
					<div className='button-wrap'>
						<a
							href='https://github.com/josilob/cineprime-frontend'
							target='_blank'>
							<button className='btn'>GitHub</button>
						</a>
						<a href='https://cineprime.netlify.app/' target='_blank'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>
				<div className='card'>
					<img src='MDL.png' alt='project' />
					<p className='title'>Mixed Drinks Library</p>
					<div className='overlay'></div>
					<div className='button-wrap'>
						<a
							href='https://github.com/josilob/Mixed-Drinks-Library'
							target='_blank'>
							<button className='btn'>GitHub</button>
						</a>
						<a href='https://mixed-drinks-josilob.netlify.app/' target='_blank'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>
				<div className='card'>
					<img src='Hops.png' alt='project' />
					<p className='title'>Hops Revolution</p>
					<div className='overlay'></div>
					<div className='button-wrap'>
						<a href='https://github.com/josilob/Project4' target='_blank'>
							<button className='btn'>GitHub</button>
						</a>
						<a href='https://brewery-cap.netlify.app/' target='_blank'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>

				<div className='card'>
					<img src='tunr.png' alt='project' />
					<p className='title'>TUNR</p>
					<div className='overlay'></div>
					<div className='button-wrap'>
						<a href='https://github.com/josilob/TUNR-front' target='_blank'>
							<button className='btn'>GitHub</button>
						</a>
						<a href='https://boj-tunr.netlify.app/' target='_blank'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>
				{/* <div className='project-card'>
					<div className='btn-wrap'>
						<a
							href='https://github.com/josilob/cineprime-frontend'
							target='_blank'>
							<button className='btn'>GitHub</button>
						</a>
						<a href='https://cineprime.netlify.app/' target='_blank'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>

				<div className='project-card'>
					<div className='btn-wrap'>
						<a
							href='https://github.com/josilob/Mixed-Drinks-Library'
							target='_blank'>
							<button className='btn'>GitHub</button>
						</a>
						<a href='https://mixed-drinks-josilob.netlify.app/' target='_blank'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>

				<div className='container'>
					<div className='btn-wrap'>
						<a href='https://github.com/josilob/Project4' target='_blank'>
							<button className='btn'>GitHub</button>
						</a>
						<a href='https://brewery-cap.netlify.app/' target='_blank'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div>
				<div className='project-card'>
					<div className='btn-wrap'>
						<a href='https://github.com/josilob/TUNR-front' target='_blank'>
							<button className='btn'>GitHub</button>
						</a>
						<a href='https://boj-tunr.netlify.app/' target='_blank'>
							<button className='btn'>Live</button>
						</a>
					</div>
				</div> */}
			</div>
		</div>
	);
}
export default Projects;
