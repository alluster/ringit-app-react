import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Block = styled.div `
	color: black;
	background-color: white;
	z-index: 100000;
    max-width: 100%;
    height: auto;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 4px;
    border-radius: 6px;
    transition: box-shadow 0.1s ease 0s, transform 0.1s ease 0s;
    transition-property: box-shadow, transform;
    transition-duration: 0.1s, 0.1s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;
	box-shadow: rgb(226, 226, 226) 0px 0px 0px 1px, rgba(34, 36, 38, 0.15) 0px 2px 8px 0px;
	:hover {
	}
    ${props => {
		if (props.open) return css`
			height: auto;
		`;
	}};
	
`;

const ContentBlock = ({blockName, children}) => {
	return(
		<div>
			<h4>{blockName || ""}</h4>
			<Block >
				{children}			
			</Block>
		</div>
		
	)
}
ContentBlock.propTypes = {
	props: PropTypes.any,
	blockName: PropTypes.string,
	ringit: PropTypes.any
 };

export default ContentBlock;
