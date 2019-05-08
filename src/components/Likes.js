import React, { Component, useState, useEffect } from 'react';
import ListItem from './ListItem.js'
import { useUser} from '../user-context'
import ListContainer from './ListContainer.js'
import ListBox from './ListBox.js'
import '../App.css';
import NavBar from './NavBar.js'
import PageTitle from './PageTitle.js'



// const contactList = ["Claire", "Jack", "Bob", "Kieran"]

const Likes = props => {

  const [results, setResults] = useState([]);
  const { user, getLikes } = useUser();

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
      <NavBar user={user}/>
      <ListContainer>
      
      <ListBox>
      <PageTitle>{user ? `Your Likes` : "Please Log In"}</PageTitle>
        {(results).map(result => (
          <ListItem userObject={result}  handleClick={handleClick} ></ListItem>))}
        </ListBox>
      </ListContainer>
     </div>
  );

}

export default Likes;