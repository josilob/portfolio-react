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
						src={process.env.PUBLIC_URL + '/icons/html.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>HTML</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/css.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>CSS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/JavaScript.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>JavaScript</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/React.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>React</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/bootstrap.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Bootstrap</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/materialize.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>MaterializeCSS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/materialui.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Material UI</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/styled-components.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Styled Components</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/restAPI.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>RESTful API</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/node.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>NodeJS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/express.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Express</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/mongo.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>MongoDB</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/mongoose.jpeg'}
						alt='skills-icon'
					/>
					<p className='skillName'>Mongoose</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/ruby.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Ruby</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/rails.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Rails</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/psql.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Postgress</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/postman.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Postman</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/icons/git.png'}
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
