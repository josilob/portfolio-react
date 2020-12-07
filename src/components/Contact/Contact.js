import './Contact.css';
import React, { useState } from 'react';
import { db } from '../../firebase';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		db.collection('contacts')
			.add({
				name: name,
				email: email,
				message: message,
			})
			.then(() => {
				alert('Message has been submitted!');
			})
			.catch((error) => {
				alert(error.message);
			});

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form id='contact' onSubmit={handleSubmit}>
			<h2>Everything begins with a "Hello"!</h2>
			<label>Name</label>
			<input
				placeholder='John Doe'
				value={name}
				type='text'
				onChange={(e) => setName(e.target.value)}
				required
			/>

			<label>Email</label>
			<input
				placeholder='John@mail.com'
				value={email}
				type='email'
				onChange={(e) => setEmail(e.target.value)}
				required
			/>

			<label>Message</label>
			<textarea
				placeholder='Message'
				value={message}
				type='text'
				onChange={(e) => setMessage(e.target.value)}
				required></textarea>

			<button type='submit'>Submit</button>
			<div className='contact-info'>
				<a href='https://github.com/josilob' target='_blank' rel='noreferrer'>
					<i className='fab fa-github'></i>
				</a>

				<a href='tel:518-304-3690' target='_blank' rel='noreferrer'>
					<i class='fas fa-phone'></i>
				</a>
				<a href='mailto:bjosilo@gmail.com' target='_blank' rel='noreferrer'>
					<i class='fas fa-envelope'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/josilo/'
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-linkedin'></i>
				</a>
			</div>
		</form>
	);
}
export default Contact;
