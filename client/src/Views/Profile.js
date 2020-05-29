import React, { useEffect, useContext, useState }from 'react';
import Container from '../components/Container';
import ContentBlock from '../components/ContentBlock';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import Button from '../components/Button';
import { AppContext } from '../context/Context';
import axios from 'axios'
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const NameLink = styled.h5 `
	font-weight: bold;
	margin-top: 20px;
`

const AccordionBox = styled.div `
	border-bottom: 0.2px solid #EEEEEE

`

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
	 
	
	const HandleData = () => {
		if(!context.ringit) return null
		return (
			context.ringit.map((item, i) => {
				return (
					<AccordionBox key={i}>
						<Gx col={10} breakpoint={100}>
								<Link to={`/rinki/${item.id}`}>
									<NameLink>{item.name ? item.name : "Taisit unohtaa antaa ringille nimen"} </NameLink>
								</Link>
						</Gx>
						<span style={{ textAlign: "right" }}>
							<Gx col={2} breakpoint={100} >
								<NameLink>
									<FontAwesomeIcon icon={ 
										item.owner === context.user ? faStar : faBookmark
										} 
											
									/>
								</NameLink>
							</Gx>
						</span>
					</AccordionBox>
				)
				
			})
		)

	}
	
	let AccordionContent = HandleData()


	useEffect(() => {
		
		if(!context.user.email)
			history.push('/signin')
	}, [])
	return(
			<div>
				<h3>Oma sivu</h3>
			{
				context.isLoading ? 
					<p>Loading...</p> :
					<ContentBlock blockName="Ringit">
						{AccordionContent }
					</ContentBlock>
			}
				
					
						<AddNewButton to="/addrinki">Luo uusi Rinki</AddNewButton>
					
			</div>
	)
}


export default Profile
