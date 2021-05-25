import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_8efxgg6',
				'template_rzr3ccv',
				e.target,
				'user_jcj2ooQw7Cczqu4j9nt4b'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			)
			.then(() => {
				alert('Message has been submitted! Thank you.');
			});
		e.target.reset();
	};

	return (
		<form id='contact' onSubmit={sendEmail}>
			<h2>Everything begins with a "Hello"!</h2>

			<label>Name</label>
			<input placeholder='Your name' type='text' name='name' required />
			<label>Email</label>
			<input placeholder='Your email' type='email' name='email' required />
			<label>Message</label>
			<textarea placeholder='Message' type='text' name='message' required />
			<input type='submit' value='Submit' />

			<div className='contact-info'>
				<a href='https://github.com/josilob' target='_blank' rel='noreferrer'>
					<i className='fab fa-github'></i>
				</a>
				<a href='mailto:bjosilo@gmail.com' target='_blank' rel='noreferrer'>
					<i className='fas fa-envelope'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/josilo/'
					target='_blank'
					rel='noreferrer'>
					<i className='fab fa-linkedin'></i>
				</a>
			</div>
			<a href='#navbar' style={{ textDecoration: 'none' }}>
				<h2 className='home-top'>Back to top</h2>
			</a>
		</form>
	);
}
export default Contact;
