import React, { Component, useState, useEffect } from 'react';
import ListItem from './ListItem.js'
import firebase from '../firebase.js';
import { useUser} from '../user-context'
import ListContainer from './ListContainer.js'
import ListBox from './ListBox.js'
import SearchInput from './SearchInput.js'
import '../App.css';


// const contactList = ["Claire", "Jack", "Bob", "Kieran"]

const Search = props => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([results])
  const { user, currentUserLikes, likesCurrentUser, normalizedName, hasMatchedCurrentUser} = useUser()
  
  // populate list
  useEffect( () => { if(user){
    const usersRef = firebase.database().ref('users');
    usersRef.on('value', snapshot => {
      let list = snapshot.val();
      let results = [];
      for(let item in list){
        // Make sure not listing self, not listing likes, and not listing matched users
        if (
          !currentUserLikes(list[item]) 
          && !hasMatchedCurrentUser(list[item])
          && list[item].key != user.uid)  
          {
            results.push(list[item]) 
          }
        }
        setResults(results)
      })
      
    }}, [results])
    
    const handleClick = (userObject) => {
      
      if (likesCurrentUser(userObject)) {
        
        const matchesRef = firebase.database().ref('matches')
        const match = {
          secondLiker: user.uid,
          firstLiker: userObject.key
        } 
        matchesRef.push(match)
        
      } else {
        
        const likesRef = firebase.database().ref('likes')
        const like = {
          liker: user.uid,
          liked: userObject.key
        } 
        likesRef.push(like)
        
      }
    }
    
    
    const updateSearchTerm = e => {
      const newSearchTerm = e.target.value.replace(/\s/g,'')
      setSearchTerm(newSearchTerm)
      console.log(results)
      const newFilteredResults = results.filter(result => normalizedName(result).includes(newSearchTerm))
      setFilteredResults(newFilteredResults)
    }
    
    
    return (
      <div className="App">
      
      <ListContainer>
        <ListBox>
          <form>
            <label>
              <SearchInput type="text" name="name" onChange={updateSearchTerm}/>
            </label>
          </form>
          {(searchTerm ? filteredResults : results).map(result => (
            <ListItem userObject={result}  handleClick={handleClick} ></ListItem>))}
          </ListBox>
        </ListContainer>
        </div>
        );
        
      }
      
      export default Search;