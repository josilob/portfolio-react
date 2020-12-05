import './Skills.css';

function Skills() {
	return (
		<div className='skills'>
			<div>
				<h2>My Skills</h2>
				<h3>Expanding the list with each new opportunity</h3>
			</div>
			<div className='techstack'>
				<div className='tech-icons'>
					<span
						className='iconify'
						data-icon='logos:javascript'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						className='iconify'
						data-icon='logos:html-5'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						className='iconify'
						data-icon='logos:css-3'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						className='iconify'
						data-icon='logos:ruby'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						className='iconify'
						data-icon='logos:react'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						class='iconify'
						data-icon='vscode-icons:file-type-rails'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						className='iconify'
						data-icon='logos:bootstrap'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						class='iconify'
						data-icon='logos:materializecss'
						data-inline='false'></span>
				</div>
				<br />
				<div className='tech-icons'>
					<span
						class='iconify'
						data-icon='vscode-icons:file-type-node'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						className='iconify'
						data-icon='logos:node-sass'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						class='iconify'
						data-icon='vscode-icons:folder-type-mongodb-opened'
						data-inline='false'></span>
				</div>
				<div className='tech-icons'>
					<span
						className='iconify'
						data-icon='logos:postgresql'
						data-inline='false'></span>
				</div>
				<div className='tech-containers'>
					<span
						class='iconify'
						data-icon='logos:github-icon'
						data-inline='false'></span>
				</div>
			</div>
			<div className='skillset'></div>
		</div>
	);
}
export default Skills;
