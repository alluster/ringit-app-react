import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/Context';
import Button from '../components/Button'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
const image = './intro.svg'


const HomeContainer = styled.div`
	text-align: center;
	margin-top: 60px;
	padding-left: 10px;
	padding-right: 10px;
`;

const ImageContainer = styled.div`
    max-width: 800px;
    margin: auto;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
		max-width: 100%;
    }
`;
	const Image = styled.img`
		max-height: 300px;
	`;


const RegisterButton = styled(Button) `
	background-color: ${props => props.theme.colors.brand.primary};
	color: white;
	-webkit-text-fill-color: white;
	height: 40px; 
	border-radius: 20px;
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	font-size: 20px;
	padding-left: auto;
	padding-right: auto;
	margin-top: 10px;
	width: 500px;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
    }
`;

const SignInButton = styled(Button) `
	background-color: transparent;
	color: ${props => props.theme.colors.brand.primary};
	-webkit-text-fill-color: ${props => props.theme.colors.brand.primary};
	height: 40px; 
	border-radius: 20px;
	// border: 2px solid ${props => props.theme.colors.brand.primary};
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	font-size: 14px;
	padding-left: auto;
	padding-right: auto;
	width: 500px;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
    }
`;


const Home = () => {
	const context = useContext(AppContext)
	return(
			<HomeContainer>
				<ImageContainer>
						<Image src={image} alt="Welcome to Ringit" /> 
				</ImageContainer>
				<h1 style={{
					textAlign: 'center'}}>
						Ringit.fi
				</h1>
					
						<div>
							<RegisterButton to="/signup">Rekisteröidy</RegisterButton>
							<SignInButton to="/signin" >Tai kirjaudu sisään</SignInButton>
						</div>
						
						
					
				
				
			</HomeContainer>
	)
}

export default Home;
