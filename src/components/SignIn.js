import React, { useState } from 'react';
import '../App.css';
import {useUser} from '../user-context'


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
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={updateEmail}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={updatePassword}/>
          </div>
          <div className="input-field">
           <button>Sign In</button>
          </div>
        </form>
      </div>
  )
}


export default SignIn;
