import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {

	Link
  } from "react-router-dom";
const StyledButton = styled.button `
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
	margin-top: 20px;
	width: 500px;
		@media (max-width: ${props => props.theme.screenSize.tablet}) {
			width: 100%;
		}
`;

const Button = ({onClick, children, to}) => {
    return(
        <Link to={to}><StyledButton onClick={onClick} >{children}</StyledButton></Link>
    );
};

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any
 };

export default Button;