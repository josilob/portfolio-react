import React, { useState } from 'react';
import './Navbar.css';

function Nav() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<nav id='navbar'>
			<div className='menu-icon' onClick={handleClick}>
				<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
			</div>
			{/* <a
				href='#navbar'
				onClick={closeBurger}
				style={{ textDecoration: 'none' }}>
				<h2 className='nav-dev'>dev-b</h2>
			</a> */}
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item'>
					<a href='#projects' className='nav-links' onClick={closeBurger}>
						My Work
					</a>
				</li>
				<li className='nav-item dev'>
					<a href='#about' className='nav-links' onClick={closeBurger}>
						About
					</a>
				</li>
				<li className='nav-item'>
					<a href='#skills' className='nav-links' onClick={closeBurger}>
						Techstack
					</a>
				</li>

				<li className='nav-item'>
					<a href='#contact' className='nav-links' onClick={closeBurger}>
						Contact
					</a>
				</li>
			</ul>
			{/* <div className='social-icons'>
				<a href='https://github.com/josilob' target='_blank' rel='noreferrer'>
					<i className='fab fa-github'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/josilo/'
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-linkedin'></i>
				</a>
			</div> */}
		</nav>
	);
}

export default Nav;
