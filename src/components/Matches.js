import React, { Component, useState, useEffect } from 'react';
import ListItem from './ListItem.js'
import ListContainer from './ListContainer.js'
import ListBox from './ListBox.js'
import SearchInput from './SearchInput.js'
import firebase from '../firebase.js';
import { useUser} from '../user-context'
import '../App.css';


const Matches = props => {

  const [results, setResults] = useState([]);
  const { user, getMatches } = useUser()

// populate list
  useEffect( () => {
    if(user){
    const myMatches = getMatches(user.uid)
    setResults(myMatches)
    console.log(getMatches(user.uid))
  }}, [])

  const handleClick = (userObject) => {
    console.log("this shoudl do something, huh?")
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

export default Matches;