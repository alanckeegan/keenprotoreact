import React, { Component } from 'react';
import '../App.css';
import {UserProvider, useUser} from '../user-context'



const Profile = (props) => {

  const { user } = useUser()

  
    return (
      <UserProvider>
        <div>{user ? user.email : "signed out"}</div>
      </UserProvider>
    );
}

export default Profile;
