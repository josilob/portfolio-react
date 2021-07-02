import './Skills.css';
import html from '../../assets/imgs/html.png';
import bootstrap from '../../assets/imgs/bootstrap.png';
import css from '../../assets/imgs/css.png';
import express from '../../assets/imgs/express.png';
import git from '../../assets/imgs/git.png';
import javascript from '../../assets/imgs/JavaScript.png';
import materialUI from '../../assets/imgs/materialui.png';
import mongo from '../../assets/imgs/mongo.png';
import mongoose from '../../assets/imgs/mongoose.jpeg';
import node from '../../assets/imgs/node.png';
import postman from '../../assets/imgs/postman.png';
import psql from '../../assets/imgs/psql.png';
import rails from '../../assets/imgs/rails.png';
import react from '../../assets/imgs/React.png';
import restApi from '../../assets/imgs/restAPI.png';
import ruby from '../../assets/imgs/ruby.png';
import styledComponents from '../../assets/imgs/styled-components.png';

function Skills() {
	return (
		<div id='skills'>
			<div>
				<h2 className='subtitle--red'>My Skillset</h2>
				<h3 className='sub-yellow'>Continuously improving</h3>
			</div>
			<div className='techstack'>
				<div className='tech-icons'>
					<img className='skill-icons' src={html} alt='skills-icon' />
					<p className='skillName'>HTML</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={css} alt='skills-icon' />
					<p className='skillName'>CSS</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={javascript} alt='skills-icon' />
					<p className='skillName'>JavaScript</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={react} alt='skills-icon' />
					<p className='skillName'>React</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={bootstrap} alt='skills-icon' />
					<p className='skillName'>Bootstrap</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={materialUI} alt='skills-icon' />
					<p className='skillName'>Material UI</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={styledComponents} alt='skills-icon' />
					<p className='skillName'>Styled Components</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={restApi} alt='skills-icon' />
					<p className='skillName'>RESTful API</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={node} alt='skills-icon' />
					<p className='skillName'>NodeJS</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={express} alt='skills-icon' />
					<p className='skillName'>Express</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={mongo} alt='skills-icon' />
					<p className='skillName'>MongoDB</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={mongoose} alt='skills-icon' />
					<p className='skillName'>Mongoose</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={ruby} alt='skills-icon' />
					<p className='skillName'>Ruby</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={rails} alt='skills-icon' />
					<p className='skillName'>Rails</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={psql} alt='skills-icon' />
					<p className='skillName'>Postgress</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={postman} alt='skills-icon' />
					<p className='skillName'>Postman</p>
				</div>
				<div className='tech-icons'>
					<img className='skill-icons' src={git} alt='skills-icon' />
					<p className='skillName'>Git</p>
				</div>
			</div>
			<div className='skillset'></div>
		</div>
	);
}
export default Skills;
