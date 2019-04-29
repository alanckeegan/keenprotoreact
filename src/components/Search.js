import React, { Component, useState } from 'react';
import ListItem from './ListItem.js'
import firebase from 'firebase';
import '../App.css';


// const contactList = ["Claire", "Jack", "Bob", "Kieran"]

const Search = props => {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(['bob', 'bill', 'harry']);
// populate list
  // useEffect(()=>{
  //   const likesRef = firebase.database().ref('list');
  //   listRef.on('value', snapshot => {
  //     let list = snapshot.val();
  //     let newState = [];
  //     // for(let item in list){
  //     //   newState.push({
  //     //     item
  //     //   })
  //     }
  //   }
  // })

  //will need to get original "everyone" results here later
  //contactList prop as plug


  function handleClick(e) {
    //
    // const likesRef = firebase.database().ref('likes')
    // const like = {
    //   liker: 'TestUser',
    //   liked: [e.target.props.firstName]
    // }
    //
    // likesRef.push(like)
    console.log("You CLICKED A THING");
  }


  const updateSearchTerm = e => {
    setSearchTerm(e.target.value)
  }


    return (
      <div className="App">
        <form>
          <label>
            <input type="text" name="name" onChange={updateSearchTerm}/>
            <div className="SearchListBox">

            {results.map(result => (
              <ListItem firstName={result}  onClick={handleClick}>
            </ListItem>
            ))}


            </div>
          </label>
          </form>
      </div>
    );

}

export default Search;
