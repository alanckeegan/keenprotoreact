import styled from "styled-components";
import React from 'react';
import { Link } from 'react-router-dom';




const NavBarDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #9942E5;
    height: 10vh;

`;

const NavLink = styled(Link) `
    color: white;
    font-size: 20px;
    padding: 20px;
    text-decoration: none;
    font-family: nunito;
    font-weight: bold;
    text-align: center;
    flex-grow: 1;
    :hover {
        font-size: 30px;
        flex-grow: 2;

    }
`;

const NavBar = ({user}) => {
    if (user) {
    return (
    <NavBarDiv>
    <NavLink to="/Search">Search</NavLink>
    <NavLink to="/Likes">Likes</NavLink>
    <NavLink to="/Matches">Matches</NavLink>
    </NavBarDiv>  
    )} else {
    return (
    <NavBarDiv>
    <NavLink to="/SignUp">SignUp</NavLink>
    <NavLink to="/SignIn">SignIn</NavLink>
    </NavBarDiv> 
    )}
}

export default NavBar

