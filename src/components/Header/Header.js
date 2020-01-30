import React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';

const HeaderWrapper = styled.div`
	background-color: #282c34;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Logo = styled.img`
	height: 64px;
	pointer-events: none;

	@media (prefers-reduced-motion: no-preference) {
		animation: App-logo-spin infinite 20s linear;
		height: 64px;
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Header = ({ logo }) => (
	<HeaderWrapper>
		<Logo src={logo} alt="logo" />
		<p>My Github Portfolio</p>
		<Link url="https://reactjs.org" title="Learn React" />
	</HeaderWrapper>
);

export default Header;
