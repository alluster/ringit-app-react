import React from 'react';
import styled from 'styled-components';
import CustomLink from '../CustomLink';
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

const Icon = styled(FontAwesomeIcon)`
    font-weight: 400;
    font-size: 16px;
    :hover {
        cursor: pointer;
	}
	
`;

const NavContainer = styled.div`
    text-align: center;
    line-height: 40px;
	min-width: 100%;
	height: 40px;
	top: 0;
	position: relative;
	margin-bottom: -40px;
	background-color: white;
	box-shadow:
	2.8px 0 2.2px rgba(0, 0, 0, 0.034),
	6.7px 0 5.3px rgba(0, 0, 0, 0.048),
	12.5px 0 10px rgba(0, 0, 0, 0.06),
	22.3px 0 17.9px rgba(0, 0, 0, 0.072),
	41.8px 0 33.4px rgba(0, 0, 0, 0.086),
	100px 0 80px rgba(0, 0, 0, 0.12)
;

`;



const Navigation = ({ className }) => {
	// const router = useRouter()
	// const context = useContext(AppContext)  
    return(
		<NavContainer className={className} >
			<Gx col={3} breakpoint={100}>
				<CustomLink to="/profile" >
					<Icon icon={faUser} />
				</CustomLink>                
			</Gx>
			<Gx col={3} breakpoint={100}>
				<CustomLink to="/search">
					<Icon icon={faSearch} />
				</CustomLink>                
			</Gx>
			<Gx col={3} breakpoint={100}>
				<CustomLink to="/addrinki">
					<Icon icon={faPlus} />
				</CustomLink>                
			</Gx>
			<Gx col={3} breakpoint={100}>
				<CustomLink to="/settings">
					<Icon icon={faCog} />
				</CustomLink>                
			</Gx>
		</NavContainer>        
    );
};
Navigation.propTypes = {
    className: PropTypes.string
};

export default Navigation;