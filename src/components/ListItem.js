import styled from "styled-components";
import React from 'react'



const ListItemDiv = styled.div`
width: 100%;
font-family: Nunito;
font-size: 30px;
background: white
border-bottom: 3px solid rgba(210,188,229,1);
border-top: 3px solid rgba(0,0,0,0);
color: rgba(210,188,229,1);
margin: 10px;
display: flex;
flex: stretch;
flex-direction: row;
align-items: center;
text-align; center;


:hover{
  background: #9942E5
  color: white;
  
  border:  3px solid rgba(210,188,229,1);
}
`;

const InitialsCircle = styled.div`
  position: absolute;
  left: 27.5%;
  border-radius: 100%;
  border: 3px solid rgba(210,188,229,1);
  color: white;
  background: rgba(210,188,229,1);
  padding 30px;
  min-width: 50px;
  position: absolute;
`
const NameDiv = styled.div`
  align-self: right;
  text-align: right;
  flex: stretch;
  padding: 30px 20px 30px 0px;
  flex-grow: 1;
`

const ListItem = ({userObject, handleClick}) => (
<ListItemDiv onClick={() => handleClick(userObject)} >
<InitialsCircle>{userObject.firstName ? userObject.firstName.charAt(0): ''}{userObject.firstName ? userObject.lastName.charAt(0): ''}</InitialsCircle>
<NameDiv>{userObject.firstName} {userObject.lastName}</NameDiv>
</ListItemDiv>
)


export default ListItem

