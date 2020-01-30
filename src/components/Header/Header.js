import React from 'react';
import './Header.css';
import Link from '../Link/Link';

const Header = ({ logo }) => (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>My Github Portfolio</p>
		<Link url="https://reactjs.org" title="Learn React" />
	</header>
);

export default Header;
