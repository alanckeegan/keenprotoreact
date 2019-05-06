import styled from "styled-components";
import { Link } from 'react-router-dom';



const NavLink = styled(Link) `
    color: white;
    font-size: 20px;
    padding: 20px;
    text-decoration: none;
    font-family: nunito;
    font-weight: bold;
    .hover {
        font-size: 25px;
        padding: 15px;
    }
`;


export default NavLink

