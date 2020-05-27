import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";


function CustomLink({ children, to }) {
	const Styled = styled.div`
		margin-right: 10px;
		color: ${props => props.theme.colors.brand.disabled};
		${props => {
			if (props.pathName === to) return css`
				color: ${props => props.theme.colors.brand.primary};
			`;
		}};

	`

 
	const handleClick = e => {
		e.preventDefault()
	}

	return (
		<Link to={to} >
			<Styled >
				{children}
			</Styled>
		</Link>
	
	)
}

CustomLink.propTypes = {
	children: PropTypes.any,
	to: PropTypes.string,
	theme: PropTypes.any,
	pathName: PropTypes.string

};
export default CustomLink;