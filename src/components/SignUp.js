import React, { Component, useState } from 'react';
import '../App.css';
import firebase from '../firebase.js'
import firebaseui from 'firebaseui'

const handleSubmit = () => {
  console.log("submitted")
}

const SignUp = props => {
    // const [searchTerm, setSearchTerm] = useState('');


  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
      </form>
    </div>
  )
}



// class SignUp extends Component {
//   render() {
//     return (
//       <div className="App">
//       FIREBASE SIGN UP
//       </div>
//     );
//   }
// }

export default SignUp;
