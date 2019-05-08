import React, { useState } from 'react';
import '../App.css';
import {useUser} from '../user-context';
import PrimaryButton from './PrimaryButton.js';
import ListContainer from './ListContainer.js';
import FormTitle from './FormTitle.js';
import { Redirect } from 'react-router-dom';
import FormSubmissionDiv from './FormSubmissionDiv.js';
import FormInput from './FormInput.js';
import FormBox from './FormBox.js';
import NavBar from './NavBar.js';

const SignUp = props => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [redirectTrigger, setRedirectTrigger] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { createUser, user, setUser} = useUser()

 
    
    const handleSubmit = async(e) => {
      e.preventDefault()  
      await createUser(email, password, firstName, lastName)
      setRedirectTrigger(true)
    }

    const updateFirstName = (e) => {
      setFirstName(e.target.value)
      console.log(firstName)
    }

    const updateLastName = (e) => {
      setLastName(e.target.value)
      console.log(lastName)
    }

    const updateEmail = (e) => {
      setEmail(e.target.value)
      console.log(email)
    }

    const updatePassword = (e) => {
      setPassword(e.target.value)
      console.log(password)
    }

  return(
    <div className="App">
    <NavBar user={user}/>
    <ListContainer>
      <FormBox>      
        <form onSubmit={handleSubmit}>
          <FormTitle>
          <h3>Sign Up</h3>
          </FormTitle>
          <FormInput inputLabel="firstName" text="First Name" updateFunction={updateFirstName}/>
          <FormInput inputLabel="lastName" text="Last Name" updateFunction={updateLastName}/>
          <FormInput inputLabel="email" text="Email" updateFunction={updateEmail}/>
          <FormInput inputLabel="password" text="Password" updateFunction={updatePassword}/>
          <FormSubmissionDiv>
            <PrimaryButton>Sign Up</PrimaryButton>
          </FormSubmissionDiv>
        </form>
       {(redirectTrigger) ? (<Redirect to='/Search' />) : ''}
      </FormBox>
    </ListContainer>
    </div>
  )
}


export default SignUp;
