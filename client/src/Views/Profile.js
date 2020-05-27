import React, { useEffect, useContext }from 'react';
import Container from '../components/Container';
import ContentBlock from '../components/ContentBlock';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Button from '../components/Button';
import { AppContext } from '../context/Context';

const AddNewButton = styled(Button) `
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
const Profile = () => {
	const context = useContext(AppContext)
	const history = useHistory()
	useEffect(() => {
		if(!context.userEmail)
			history.push('/signin')
	}, [])
	return(
			<Container>
				<h3>Oma sivu</h3>
			
				<ContentBlock 
					blockName="Ringit"
				/>
					
						<AddNewButton to="/addrinki">Luo uusi Rinki</AddNewButton>
					
			</Container>
	)
}


export default Profile
