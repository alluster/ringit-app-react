import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from  '../context/Context';


const HomeContainer = styled.div`
	text-align: center;
	margin-top: 40px;
	padding-left: 10px;
	padding-right: 10px;


`;

const RegisterButton = styled.button `
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
	margin-top: 50px;
	width: 500px;
	@media (max-width: ${props => props.theme.screenSize.tablet}) {
		width: 100%;
    }
`;

const SignInButton = styled.button `
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
const About = () => {
	const context = useContext(AppContext)

	
		return(
				<HomeContainer>
			
						<a >
							<p style={{
							color: '#275EFE', 
							textAlign: 'center',
							textDecoration: 'underline',
							fontWeight: 'bold',
							marginTop: '20px;'
							}}>Takaisin etusivulle</p>
						</a>
		
					
					<h1 style={{
						textAlign: 'center'}}>
							Mikä on Ringit palvelun idea?
					</h1>
					<h4>Uudet palvelut mietityttävät aina. Tässä muutamia yleisiä käyttötapoja Ringit palvelulle</h4>
					<h2>Kerhohuone</h2>
					<p style={{
						textAlign: 'center',
						margin: '0px;'}}>
						
						1. Jos sinulla on tarve jakaa jokin tila, esimerkiksi kerhouone, voit luoda oman ringin ja ihmiset voivat liittyä siihen koodin avulla.<br />
						2. Voit laittaa koodin kerhohuoneen seinään. <br/>
						3. Koodin avulla käyttäjät voivat liittyä Rinkiin ja varata kalenterista tilaa.<br />
					</p>
					<h2>Sauna</h2>
					<p style={{
						textAlign: 'center',
						margin: '0px;'}}>
							1. Taloyhtiössänne on sauna mutta haluaisitte luopua vakiovuoroista.<br />
							2. Voit laittaa koodin saunan oveen. Koodin avulla asukkaat voivat liittyä Rinkiin ja varata kalenterista saunavuoron.<br />
					</p>
					<h2>Yogatunti</h2>
					<p style={{
						textAlign: 'center',
						margin: '0px;'}}>
							1. Haluat järjestää yogatunnin.<br />
							2. Voit luoda oman ringin ja kutsua ystäviäsi tunnille. He näkevät kalenterista Yoga -tunnin ajankohdan.<br />
							3. Voit pyytää kaikilta rinkiläisiltä Mobilepay maksun tunnin loputtua.<br />
					</p>
					<h2>Bändiharjoitukset</h2>
					<p style={{
						textAlign: 'center',
						margin: '0px;'}}>
							1. Bändillänne on bänditila. Tilassa harjoittelee 3 bändiä.<br />
							2. Voit luoda oman ringin ja varata bändillesi kalenterista soittovuoron.<br />
							3. Voit pyytää kaikilta bändien jäseniltä Mobilepay maksun kuun loputtua vuokranmaksua varten.<br />
					</p>
				
						<a >
							<p style={{
							color: '#275EFE', 
							textAlign: 'center',
							textDecoration: 'underline',
							fontWeight: 'bold',
							marginTop: '20px;'
							}}>Takaisin etusivulle</p>
						</a>
			
					<div>
						<RegisterButton onClick={() => context.login({ returnTo: process.env.AUTHO_REDIRECT_URI })}>Rekisteröidy </RegisterButton>
					</div>
					<div>
						<SignInButton onClick={() => context.login({ returnTo: process.env.AUTHO_REDIRECT_URI })}>Tai kirjaudu sisään</SignInButton>
					</div>

				</HomeContainer>
		)
}

export default About;
