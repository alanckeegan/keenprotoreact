import styled from "styled-components";
import React from 'react';



const FormInputField = styled.input`
    font-family: Nunito;
    border-radius: 10px;
    width: 70%;
    font-size: 30px;
    min-height: 40px;
    background: white
    border-bottom: 1px solid rgb(214, 214, 214);
    color: rgba(90, 90, 90); 
    
`;

const FormInputLabel = styled.label`
    flex-grow: 1;
    font-family: Nunito;
    font-size: 30px;
    min-height: 30px;
    margin-right: 20px;
`

const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3vh;
`


const FormInput = ({inputLabel, text, updateFunction}) => (

    <InputDiv>
    <FormInputLabel htmlFor={inputLabel}>{text}</FormInputLabel>
    <FormInputField type={inputLabel} id={inputLabel} onChange={updateFunction}/>
    </InputDiv>
    )
    
export default FormInput
    