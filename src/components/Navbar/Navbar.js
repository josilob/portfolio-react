import React, { useState } from 'react';
import './Navbar.css';

function Nav() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	const liData = [
		{ href: '#projects', name: 'My Work' },
		{ href: '#about', name: 'About' },
		{ href: '#skills', name: 'Techstack' },
		{ href: '#contact', name: 'Contact' }
	];

	const listedItems = liData.map((item, idx) => (
		<li className='nav-item' key={idx}>
			<a href={item.href} className='nav-link' onClick={closeBurger}>
				{item.name}
			</a>
		</li>
	));

	return (
		<React.Fragment>
			<nav id='navbar'>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>{listedItems}</ul>
			</nav>

			<div id='hello'>
				<h1>Hello there, I'm Bojan!</h1>

				<h2 className='sub-yellow--larger'>
					Civil engineer by degree, a web developer by choice, and a tech nerd by
					obsession. Curious and focused on learning in all aspects of life. Adept at
					acquiring new skills and building interactive web pages.
				</h2>
			</div>
		</React.Fragment>
	);
}

export default Nav;
