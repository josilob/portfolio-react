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
		<form className='contact' onSubmit={handleSubmit}>
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
		</form>
	);
}
export default Contact;
