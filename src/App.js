import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skills from './components/Skillset/Skills';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<About />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
