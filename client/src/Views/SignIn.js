import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from  '../context/Context';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";



    


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

const SubmitButton = styled.button `
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


const SignUp = (props) => {
	const history = useHistory();

	const initialState = {
		email: "",
		password: ""
	}
	const [{ password, email }, setState] = useState(initialState);
	const context = useContext(AppContext)  
	const inputChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};
	const clearState = () => {
		setState({ ...initialState });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await context.login(email, password)
			clearState()
			history.push("/profile");

		}catch(error) {
			context.setError(error.message)
		}

		}
	
	useEffect(() => {
		if(context.user.email) history.push("/profile")
	},[context.user.email])
	return(

		<div >
			<h1>Kirjaudu sisään</h1>
			
				<form  onSubmit={e => handleSubmit(e)}>
					<Input placeholder="Email" name="email" value={email} onChange={inputChange} type="text" />
					<Input placeholder="Salasana" name="password" value={password} onChange={inputChange} type="text" />	
					<SubmitButton type="submit">Kirjaudu sisään</SubmitButton>
					<p>{context.error}</p>

				</form>
        </div>
    )
}

export default SignUp;
