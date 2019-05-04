import React, {useState, useContext, createContext, useMemo} from 'react';
import firebase from './firebase.js'

const UserContext = createContext()

const useUser = () => {
  const context = useContext(UserContext)
  if (!context){
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

const UserProvider = (props) => {
  
  // start custom hook with firebase auth object listener
  const [user, setUser] = useState(firebase.auth().currentUser)


  // funciton add new user to DB with additional information (firstName lastName)
  // use UID from auth as key
  const addUserToDataBase = (firstName, lastName, email) => {
    const usersRef = firebase.database().ref('users')
    usersRef.child(user.uid).set({ email, firstName, lastName})
    console.log(user)
  }


  // Make a function to create a user on sign up and sign in with that userReducer
  const createUser = async(email, password, firstName, lastName) => {
    
    // add user to firebase and sign in
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    await firebase.auth().signInWithEmailAndPassword(email, password)
    
    setUser(firebase.auth().currentUser)
    addUserToDataBase(firstName, lastName, email)
  }


 
  // Set provider value with use-memo so it doenst rerun every render
  const value = useMemo(() => ({user, setUser, createUser}), [user])


  return <UserContext.Provider value={value} {...props} />
}

export {UserProvider, useUser}
