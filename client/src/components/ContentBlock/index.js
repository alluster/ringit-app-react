import React, { useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from  '../../context/Context'
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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

const NameLink = styled.h5 `
	font-weight: bold;
	margin-top: 20px;
`


const AccordionBox = styled.div `
	border-bottom: 0.2px solid #EEEEEE

`

const ContentBlock = (props) => {
	const context = useContext(AppContext)  
	useEffect(() => {
		context.GetRingitByOwner(context.userEmail);
	}, [])
	const AccordionContent = context.ringit.map((item) => 
			<AccordionBox key={item.id}>
				<Gx col={10} breakpoint={100}>
						<a href={`/rinki/${item.id}`}>
							<NameLink>{item.name ? item.name : "Taisit unohtaa antaa ringille nimen"} </NameLink>
						</a>
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
	

	

	return(
		<div>
			<h4>{props.blockName || ""}</h4>
			<Block >
	
{AccordionContent}

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
