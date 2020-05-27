import React from 'react';
import Layout from '../layouts/layout';
import Container from '../components/Container';
import styled from 'styled-components';

// import { withAuth, withLoginRequired } from 'use-auth0-hooks';
// import { AppContext } from  '../context/Context'
// import ContentBlock from '../components/ContentBlock';
const Input = styled.input`
	padding: 10px; 
	width: 90%;
	margin-top: 20px;
	border: 1px solid ${props => props.theme.colors.brand.border}; 
	-webkit-border-radius: 5px;
	border-radius: 5px;
	background-color: white;
	:focus {
		border-color:#333;
	}
	::placeholder {
		color: ${props => props.theme.colors.brand.disabled}
		font-size: 10px;
		font-weight: 400;
	}
	
		
	}`

const SearchButton = styled.button `
	background-color: ${props => props.theme.colors.brand.primary};
	color: white;
	-webkit-text-fill-color: white;
	height: 40px; border-radius: 20px;
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
const Search = () => {


	return(
		<Layout title="Haku" >
			<Container>
				<h3>Etsi rinkejä koodilla:</h3>
				<Input placeholder="Anna koodi" name="search" type="text" />
				<SearchButton>Etsi koodilla</SearchButton>
			</Container>
		</Layout>
	)
}
export default Search
