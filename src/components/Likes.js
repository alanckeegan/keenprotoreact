import React, { Component, useState, useEffect } from 'react';
import ListItem from './ListItem.js'
import firebase from '../firebase.js';
import { useUser} from '../user-context'
import ListContainer from './ListContainer.js'
import ListBox from './ListBox.js'
import SearchInput from './SearchInput.js'
import '../App.css';


// const contactList = ["Claire", "Jack", "Bob", "Kieran"]

const Likes = props => {

  const [results, setResults] = useState([]);
  const { user, getLikes } = useUser()

// populate list
  useEffect( () => {
    if(user){
    const myLikes = getLikes(user.uid)
    console.log(myLikes)
    setResults(myLikes)
  }}, [])

  const handleClick = (userObject) => {

    console.log(userObject)
    console.log(user)
  }


  return (
    <div className="App">
      <ListContainer>
      <ListBox>
        {(results).map(result => (
          <ListItem userObject={result}  handleClick={handleClick} ></ListItem>))}
        </ListBox>
      </ListContainer>
     </div>
  );

}

export default Likes;