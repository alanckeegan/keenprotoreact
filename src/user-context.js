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
  const addUserToDataBase = (currentUser, userData) => {
    const usersRef = firebase.database().ref('users')
    usersRef.child(currentUser.uid).set({...userData, key: currentUser.uid})
  }


  // Make a function to create a user on sign up and sign in with that user
  const createUser = async(email, password, firstName, lastName) => {
    
    // add user to firebase and sign in
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    await firebase.auth().signInWithEmailAndPassword(email, password)
   

    // update user state
    const currentUser = firebase.auth().currentUser
    setUser(currentUser)

    // add user database object
    addUserToDataBase(currentUser, {firstName, lastName, email})
  }

  const logInUser = async(email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    // update user state
    const currentUser = firebase.auth().currentUser
    setUser(currentUser)
  }
 
  

  // A function that get get every user a particular user likes OR is liked by
  // first argument User ID, second argument optional "inbound" or "outbound"
  const getLikes = (uid, direction="outbound") => {
    const likesRef = firebase.database().ref('likes')
    let myLikes = [];
    likesRef.on('value', snapshot => {
      let likes = snapshot.val();

    
      switch (direction) {
      
        case "outbound" :
          for(let item in likes){
            if (likes[item].liker === uid) {
              let likedUserKey = likes[item].liked
              let likedUserRef = firebase.database().ref('users/' + likedUserKey)
              likedUserRef.on('value', snapshot => {
                let likedUser = snapshot.val();
                myLikes.push(likedUser)
              })
            }
          }
          break
        
        case "inbound" :
          for(let item in likes){
            if (likes[item].liked === uid) {
              let likedUserKey = likes[item].liker
              let likedUserRef = firebase.database().ref('users/' + likedUserKey)
              likedUserRef.on('value', snapshot => {
                let likedUser = snapshot.val();
                myLikes.push(likedUser)
              })
            }
          }
          break
      }
    })
    return myLikes
  }

  const likesCurrentUser = (userObject) => {
    // pull array of liked users
    let likesArray = getLikes(userObject.key)
    

    // replace user object with Keys
    likesArray = likesArray.map((item) => {
      return item.key
    })
    

    // check for current user
    return likesArray.includes(user.uid)
    
  }

  const currentUserLikes = (userObject) => {
    // pull array of current users liked users
    let likesArray = getLikes(user.uid)
 

    // replace user object with Keys
    likesArray = likesArray.map((item) => {
      return item.key
    })


    // check for current user
    const result = likesArray.includes(userObject.key)
    return result
    
  }

  // a function that returns a user's matches
  const getMatches = (uid) => {
    const matchesRef = firebase.database().ref('matches')
    let myMatches = [];
    matchesRef.on('value', snapshot => {
      let matches = snapshot.val();
        
          for(let item in matches){

            if (matches[item].firstLiker === uid) {
              let matchedUserKey = matches[item].secondLiker
              let matchedUserRef = firebase.database().ref('users/' + matchedUserKey)
              matchedUserRef.on('value', snapshot => {
                let matchedUser = snapshot.val();
                myMatches.push(matchedUser)
              })
            } else if (matches[item].secondLiker === uid) {
                let matchedUserKey = matches[item].firstLiker
                let matchedUserRef = firebase.database().ref('users/' + matchedUserKey)
                matchedUserRef.on('value', snapshot => {
                  let matchedUser = snapshot.val();
                  myMatches.push(matchedUser)
                })
            }
      }
    })
    return myMatches
  }

  const hasMatchedCurrentUser = (userObject) => {
        // pull array of matched users
        let matchesArray = getMatches(userObject.key)
    

        // replace user object with Keys
        matchesArray = matchesArray.map((item) => {
          return item.key
        })
        
    
        // check for current user
        return matchesArray.includes(user.uid)
        
  }


  const normalizedName = (userObject) => {
    const name = `${userObject.firstName}${userObject.lastName}`.toLowerCase()
    return name
  }
  // Set provider value with use-memo so it doenst rerun every render
  const value = useMemo(() => ({
    user, 
    setUser, 
    createUser, 
    logInUser, 
    getLikes, 
    likesCurrentUser, 
    currentUserLikes, 
    getMatches, 
    normalizedName, 
    hasMatchedCurrentUser
  }), [user])




  return <UserContext.Provider value={value} {...props} />
}

export {UserProvider, useUser}
