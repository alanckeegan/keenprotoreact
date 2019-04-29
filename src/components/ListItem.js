import styled from "styled-components";
import React from 'react'

const ListItemDiv = styled.div`
width: 25%;
font-family: Nunito;
border-radius: 20px;
font-size: 30pxl;
background: #D2BCE5;
color: white;

:hover{
  background: #9942E5
}
`;

const ListItem = ({firstName, lastName, initials, photo, handleClick}) => (
<ListItemDiv onClick={handleClick}>
<h3>{firstName} {lastName}</h3>
</ListItemDiv>
)


export default ListItem
