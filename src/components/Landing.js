import React, { Component, useState, useEffect } from 'react';
import logo from '../assets/keenlogotransparent.png';
import styled from "styled-components";
import LandingButton from './LandingButton.js'
import FormSubmissionDiv from './FormSubmissionDiv.js'

import '../App.css';

const Filler = styled.div`
height: 1000px;
width: 100%;
background-color: #9942E5;
margin-top: 30px;
padding-top: 30px;
`;

const TopFiller = styled.div`
height: 100px;
width: 100%;
background-color: #9942E5;
margin-top: 30px;
padding-top: 30px;
`;

const Tagline = styled.h3`
font-family: Nunito;
color: #666363;
`;


const Landing = props => {



  return (
    <div className="App">
          <div className="App">
        <TopFiller></TopFiller>
        <img src={logo} alt="logo" />
        <Tagline>find out if they like you back</Tagline>
        <Filler>
        <FormSubmissionDiv> 
        <LandingButton route="/SignUp" text="Sign Up"/> 
        <LandingButton route="/SignIn" text="Sign In"/>
        </FormSubmissionDiv> 
        </Filler>
      </div>
    </div>
  );

}

export default Landing;