import React, { useState } from 'react';
import './Navbar.css';

function Nav() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<nav className='navbar'>
			<div className='menu-icon' onClick={handleClick}>
				<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
			</div>
			<h2 className='nav-links nav-item'>dev-b</h2>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item dev'>
					<a to='/drinks' className='nav-links' onClick={closeBurger}>
						About
					</a>
				</li>
				<li className='nav-item'>
					<a to='/about' className='nav-links' onClick={closeBurger}>
						Techstack
					</a>
				</li>
				<li className='nav-item'>
					<a to='/about' className='nav-links' onClick={closeBurger}>
						My Work
					</a>
				</li>
				<li className='nav-item'>
					<a to='/about' className='nav-links' onClick={closeBurger}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
