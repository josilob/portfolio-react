import './Skills.css';

function Skills() {
	return (
		<div id='skills'>
			<div>
				<h2>My Skillset</h2>
				<h3>Continuously improving</h3>
			</div>
			<div className='techstack'>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/html.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>HTML</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/css.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>CSS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/JavaScript.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>JavaScript</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/React.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>React</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/bootstrap.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Bootstrap</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/materialize.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>MaterializeCSS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/materialui.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Material UI</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/styled-components.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Styled Components</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/restAPI.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>RESTful API</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/node.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>NodeJS</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/express.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Express</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/mongo.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>MongoDB</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/mongoose.jpeg'}
						alt='skills-icon'
					/>
					<p className='skillName'>Mongoose</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/ruby.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Ruby</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/rails.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Rails</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/psql.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Postgress</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/postman.png'}
						alt='skills-icon'
					/>
					<p className='skillName'>Postman</p>
				</div>
				<div className='tech-icons'>
					<img
						className='skill-icons'
						src={process.env.PUBLIC_URL + '/imgs/git.png'}
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
