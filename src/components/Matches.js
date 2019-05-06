import React, { Component, useState, useEffect } from 'react';
import ListItem from './ListItem.js'
import firebase from '../firebase.js';
import { useUser} from '../user-context'
import '../App.css';


const Matches = props => {

  const [results, setResults] = useState([]);
  const { user, getMatches, normalizedName } = useUser()

// populate list
  useEffect( () => {
    if(user){
    const myMatches = getMatches(user.uid)
    setResults(myMatches)
    console.log(getMatches(user.uid))
  }}, [])

  const handleClick = (userObject) => {
    normalizedName(userObject)
  }


  return (
    <div className="App">
      

        
          {results.map(result => (
            <ListItem userObject={result}  handleClick={handleClick} >
          </ListItem>
          ))}
        
    
    </div>
  );

}

export default Matches;