import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledLinkButton = styled(Link) `
    background: rgba(210,188,229,1);
    text-decoration: none;
    font-family: Nunito;
    color: white;
    margin: 0 10vw;
    font-size: 50px;
    font-weight: bold;
    flex-grow: 1;
    border: 3px solid rgba(210,188,229,1);
    border-radius: 20px;
    padding: 10px;
    :hover{
        border: 3px solid rgba(210,188,229,1);
        background: white;
        color: #9942E5;
    }
    :active{
        border: 3px solid #9942E5;
    }
`;

const LandingButton = ({route, text}) => (
    <StyledLinkButton to={route}> {text} </StyledLinkButton>
)







export default LandingButton