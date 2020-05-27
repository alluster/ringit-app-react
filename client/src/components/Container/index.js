import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
	padding-right: 10px;
	margin-top: 30px;
	padding-bottom: 200px;
	padding-top: 30px;

`;



const Container = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    );
};

 Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
 }

export default Container;