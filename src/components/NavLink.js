import styled from "styled-components";
import { Link } from 'react-router-dom';



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


export default NavLink

