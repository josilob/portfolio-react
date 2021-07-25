import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
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
		<div className='contact' id='contact'>
			<h2 className='subtitle--red'>Everything begins with a "Hello"!</h2>

			<div className='form-and-social'>
				<form className='contact-form' onSubmit={sendEmail}>
					<input placeholder='Your name' type='text' name='name' required />
					<label id='name-label'>Name</label>
					<input placeholder='Your email' type='email' name='email' required />
					<label id='email-label'>Email</label>
					<textarea placeholder='Message' type='text' name='message' required />
					<label id='message-label'>Message</label>
					<input type='submit' value='Submit' />
				</form>

				<div className='social'>
					<a
						className='sub-yellow--larger'
						href='https://drive.google.com/file/d/1XI8ULo3X8ZIEZAUQsM0c9fd1c_41w8Ri/view?usp=sharing'
						target='_blank'
						rel='noreferrer'>
						<i class='fas fa-file-pdf'></i> Resume
					</a>

					<a
						className='sub-yellow--larger'
						href='https://github.com/josilob'
						target='_blank'
						rel='noreferrer'>
						<i className='fab fa-github'></i> GitHub
					</a>
					<a
						className='sub-yellow--larger'
						href='https://www.linkedin.com/in/josilo/'
						target='_blank'
						rel='noreferrer'>
						<i className='fab fa-linkedin'></i> Linkedin
					</a>
					<h2 className='sub-yellow--larger'>
						E-mail:
						<br />
						<i className='fas fa-envelope'></i> bjosilo@gmail.com
					</h2>
				</div>
			</div>
			<a href='#navbar' style={{ textDecoration: 'none' }}>
				<h2 className='home-top'>Back to top</h2>
			</a>
		</div>
	);
};
export default Contact;
