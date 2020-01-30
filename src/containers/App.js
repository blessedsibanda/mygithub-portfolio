import React from 'react';
import './App.css';
import logo from '../GitHub-Mark-Light-64px.png';
import Header from '../components/Header/Header';
import Profile from './Profile';

function App() {
	return (
		<div className="App">
			<Header logo={logo} />
			<Profile />
		</div>
	);
}

export default App;
