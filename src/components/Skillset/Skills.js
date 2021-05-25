import './Skills.css';

function Skills() {
	return (
		<div id='skills'>
			<div>
				<h2>My Skillset</h2>
				<h3>Expanding the list with each new project</h3>
			</div>
			<div className='techstack'>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png'
						alt='skills-icon'
					/>
					<p className='skillName'>HTML</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
						alt='skills-icon'
					/>
					<p className='skillName'>CSS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png'
						alt='skills-icon'
					/>
					<p className='skillName'>JavaScript</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png'
						alt='skills-icon'
					/>
					<p className='skillName'>React</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://p.kindpng.com/picc/s/27-278320_bootstrap-logo-logo-png-bootstrap-logo-transparent-png.png'
						alt='skills-icon'
					/>
					<p className='skillName'>Bootstrap</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://colinstodd.com/images/posts/matcss-min.png'
						alt='skills-icon'
					/>
					<p className='skillName'>MaterializeCSS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://material-ui.com/static/logo.png'
						alt='skills-icon'
					/>
					<p className='skillName'>Material UI</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://avatars.githubusercontent.com/u/20658825?s=200&v=4'
						alt='skills-icon'
					/>
					<p className='skillName'>Styled Components</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png'
						alt='skills-icon'
					/>
					<p className='skillName'>RESTful API</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://i.dlpng.com/static/png/7199018_preview.png'
						alt='skills-icon'
					/>
					<p className='skillName'>NodeJS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://images.tute.io/tute/topic/express-js.png'
						alt='skills-icon'
					/>
					<p className='skillName'>Express</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png'
						alt='skills-icon'
					/>
					<p className='skillName'>MongoDB</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src='https://pbs.twimg.com/profile_images/946432748276740096/0TXzZU7W_400x400.jpg'
						alt='skills-icon'
					/>
					<p className='skillName'>Mongoose</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={require('../../icons/ruby.png')}
						alt='skills-icon'
					/>
					<p className='skillName'>Ruby</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={require('../../icons/rails.png')}
						alt='skills-icon'
					/>
					<p className='skillName'>Rails</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={require('../../icons/psql.png')}
						alt='skills-icon'
					/>
					<p className='skillName'>Postgress</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={require('../../icons/postman.png')}
						alt='skills-icon'
					/>
					<p className='skillName'>Postman</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={require('../../icons/git.png')}
						alt='skills-icon'
					/>
					<p className='skillName'>Git</p>
				</div>

				<div className='tech-containers'></div>
			</div>
			<div className='skillset'></div>
		</div>
	);
}
export default Skills;
