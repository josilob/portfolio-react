import React, { useState } from 'react';
import './Navbar.css';

function Nav() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<React.Fragment>
			<nav id='navbar'>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>

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
			</nav>

			<div id='hello'>
				<h2>Hello there!</h2>
				<h1>I am Bojan</h1>
				<h2>
					I am a Full Stack Developer fueled by unconventional solutions,
					relentlessly pursuing designs focused on capturing the user's attention and
					thoughtful navigation.
				</h2>
			</div>
		</React.Fragment>
	);
}

export default Nav;
