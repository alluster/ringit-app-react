import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { ThemeProvider } from 'styled-components';
import Home from './Views/Home';
import About from './Views/About';
import Profile from './Views/Profile';
import AddRinki from './Views/AddRinki';
import Rinki from './Views/Rinki';
import Settings from './Views/Settings';
import Search from './Views/Settings';
import Navigation from './components/Navigation';
import Provider from './context/Provider';
import Container from './components/Container';

import SignUp from './Views/SignUp';
import SignIn from './Views/SignIn';



const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
		max-width: 100% ;
		height: 100%;
		font-family: 'Open Sans', sans-serif;
		font-display: swap;
		color: ${props => props.theme.colors.brand.text}
		background-color: ${props => props.theme.colors.brand.background}

    }
    h1 {

        margin-left: 0;
		margin-right: 0;
		font-family: 'Roboto Slab', serif;
		font-weight: 500;
    }
    h2 {

        margin-left: 0;
		margin-right: 0;
		font-family: 'Roboto Slab', serif;
    }
    h3 {
  
        margin-left: 0;
		margin-right: 0;
		font-family: 'Roboto Slab', serif;
    }
    h4 {
        margin-left: 0;
		margin-right: 0;
		font-family: 'Roboto Slab', serif;
    }
    h5 {
      
        margin-left: 0;
		margin-right: 0;
		font-family: 'Roboto Slab', serif;
    }
    h6 {
  
        margin-left: 0;
		margin-right: 0;
		font-family: 'Roboto Slab', serif;
	}
	p {
		font-family: 'Open Sans', sans-serif;

	}
    img {
        max-width: 100%;
    }
    a {
		all: unset;
		font-family: 'Open Sans', sans-serif;
		color: ${props => props.theme.colors.brand.primary};
    }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
		cursor: pointer !important;
		all: unset;
    }
    button {
		all: unset;
		font-family: 'Open Sans', sans-serif;
		

	}
	button:hover {
		cursor: pointer !important;
	}





    input {
		all: unset;
		font-family: 'Open Sans', sans-serif;

        ::-webkit-input-placeholder {
    }
    :-moz-placeholder {
        /* FF 4-18 */
        opacity: 1;
    }
    ::-moz-placeholder {
        /* FF 19+ */
        opacity: 1;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
    }
    ::-ms-input-placeholder {
        /* Microsoft Edge */
    }
    ::placeholder {
        /* modern browser */
    }
    }
    
`;


function App() {
	
  return (
	<ThemeProvider theme={theme}>
		<Provider>

		<Router>
			<Navigation />
			<Container>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signin" component={SignIn} />

				<Route path="/profile" component={Profile} />
				<Route path="/rinki/:id" component={Rinki} />
				<Route path="/addrinki" component={AddRinki} />
				<Route path="/settings" component={Settings} />
				<Route path="/search" component={Search} />
			</Switch>

			</Container>

		</Router>
		<GlobalStyle />

		</Provider>
	</ThemeProvider>

  );
}
export default App