import styled from "styled-components";


const PrimaryButton = styled.button`
    background: #9942E5;
    height: 10vh;
    font-family: Nunito;
    color: white;
    font-size: 30px;
    flex-grow: 1;
    border: 3px solid #740B93;
    border-radius: 20px;
    padding: 10px;
    :hover{
        border: 3px solid rgba(210,188,229,1);
    }
    :active{
        background: rgba(210,188,229,1);
        color: white;
        border: 3px solid #9942E5;
    }
`;


export default PrimaryButton

