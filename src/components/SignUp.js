import React, { useState } from 'react';
import '../App.css';
import {UserProvider, useUser} from '../user-context'
import firebase from 'firebase'

const SignUp = props => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { createUser, user, setUser} = useUser()

    
    const handleSubmit = async(e) => {
      e.preventDefault()  
      await createUser(email, password, firstName, lastName)
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

    const whoAmI = () => { 
      user ? 
      console.log(user.email):
      console.log("signed out")
    }

  return(
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" id="firstName" onChange={updateFirstName}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" id="lastName" onChange={updateLastName}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={updateEmail}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={updatePassword}/>
          </div>
          <div className="input-field">
           <button>Sign Up</button>
          </div>
        </form>
        <button onClick={whoAmI}>WHO AM I?</button> 
      </div>
  )
}


export default SignUp;
