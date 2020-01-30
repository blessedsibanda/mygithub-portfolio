import React from 'react';
import logo from '../GitHub-Mark-Light-64px.png';
import Header from '../components/Header/Header';
import Profile from './Profile';
import styled, { createGlobalStyle } from 'styled-components';

const AppWrapper = styled.div`text-align: center;`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<AppWrapper>
				<Header logo={logo} />
				<Profile />
			</AppWrapper>
		</React.Fragment>
	);
}

export default App;
