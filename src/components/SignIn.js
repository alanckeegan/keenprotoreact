import React, { useState } from 'react';
import '../App.css';
import FormInput from './FormInput.js'
import FormBox from './FormBox.js'
import {useUser} from '../user-context'
import PrimaryButton from './PrimaryButton.js'
import ListContainer from './ListContainer.js';
import FormTitle from './FormTitle.js';
import FormSubmissionDiv from './FormSubmissionDiv.js'


const SignIn = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user, logInUser } = useUser()

    
    const handleSubmit = async(e) => {
      e.preventDefault()  
      await logInUser(email, password)
    }

    const updateEmail = (e) => {
      setEmail(e.target.value)
      console.log(email)
    }

    const updatePassword = (e) => {
      setPassword(e.target.value)
      console.log(password)
    }

    const whoAmI = () => { 
      user ? 
      console.log(user.email):
      console.log("signed out")
    }

  return(
    <ListContainer>
        <FormBox>      
            <form onSubmit={handleSubmit}>
            <FormTitle>
            <h3>Sign In</h3>
            </FormTitle>
            <FormInput inputLabel="email" text="Email" updateFunction={updateEmail}/>
            <FormInput inputLabel="password" text="Password" updateFunction={updatePassword}/>
            <FormSubmissionDiv>
            <PrimaryButton>Sign In</PrimaryButton>
            </FormSubmissionDiv>
            </form>
        </FormBox>
    </ListContainer>
  )
}


export default SignIn;
