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
			<a href={item.href} className='nav-links' onClick={closeBurger}>
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
				<h2 className='subheading'>
					I am a Full Stack Developer fueled by unconventional solutions,
					relentlessly pursuing designs focused on capturing the user's attention and
					thoughtful navigation.
				</h2>
			</div>
		</React.Fragment>
	);
}

export default Nav;

{
	// replaced with mapped data
	/* <li className='nav-item'>
						<a href='#projects' className='nav-links' onClick={closeBurger}>
							My Work
						</a>
					</li>
					<li className='nav-item '>
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
					</li> */
}
