import './Contact.css';
import React, { useState } from 'react';
import { db } from '../../firebase';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [loader, setLoader] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoader(true);
		db.collection('contacts')
			.add({
				name: name,
				email: email,
				message: message,
			})
			.then(() => {
				alert('Message has been submitted!');
				setLoader(false);
			})
			.catch((error) => {
				alert(error.message);
				setLoader(false);
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
				onChange={(e) => setName(e.target.value)}
				required
			/>

			<label>Email</label>
			<input
				placeholder='John@mail.com'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>

			<label>Message</label>
			<textarea
				placeholder='Message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				required></textarea>

			<button
				type='submit'
				// style={{ background: loader ? '#1f2235' : 'rgb(2, 2, 110)' , color: loader ? '#1f2235' : 'rgb(2, 2, 110)'}}
			>
				Submit
			</button>
		</form>
	);
}
export default Contact;
