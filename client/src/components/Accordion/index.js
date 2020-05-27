import React, { useState }from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';

const AccordionContainer = styled.div `
	margin-top: 10px;
	color: black;
	background-color: white;
	z-index: 100000;
	max-width: 100%;
	height: auto;
	padding: 10px;
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
    
const AccordionContent = styled.div `
    width: 100%;
    height: auto;
	display: none;
	min-height: 20px;

    ${props => {
		if (props.open) return css`
			display: block;
		`;
	}};
`;

const Accordion = ( {header, children, icon} ) => {
	const [ toggle, setToggle ] = useState(false)
	// const context = useContext(AppContext)  

	return(
		<AccordionContainer 
			
		>
			<Gx col={10} breakpoint={100} onClick={ () => setToggle(!toggle)} open={toggle}>
				{header}
			</Gx>
			<span style={{ textAlign: "right" }}>
				<Gx col={2} breakpoint={100} >
					<FontAwesomeIcon icon={ 
					!icon ? faStar : icon						
				} 
						
						/>
				</Gx>
			</span>
			
			<AccordionContent open={toggle}>
				{children}
			</AccordionContent>

        </AccordionContainer>
    )
}
Accordion.propTypes = {
	props: PropTypes.any,
	header: PropTypes.string,
	children: PropTypes.any,
	icon: PropTypes.any
 };
export default Accordion;
