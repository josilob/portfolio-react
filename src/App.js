import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skillset/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
