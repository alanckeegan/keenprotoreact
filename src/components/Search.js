import React, { Component, useState, useEffect } from 'react';
import ListItem from './ListItem.js'
import firebase from '../firebase.js';
import '../App.css';


// const contactList = ["Claire", "Jack", "Bob", "Kieran"]

const Search = props => {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

// populate list
  useEffect( () => {



    const usersRef = firebase.database().ref('users');
    usersRef.on('value', snapshot => {
      let list = snapshot.val();
      console.log(list);
      let results = [];
      for(let item in list){
        results.push(list[item])
      }
      setResults(results)
      console.log(results)
    })

  }, [])

  //will need to get original "everyone" results here later
  //contactList prop as plug

// button so seed database
  // const seedList = () => {
  //   const usersRef = firebase.database().ref('users')
  //   const seedUsers = [
  //     {
  //       firstName: 'John',
  //       lastName: 'Mulaney'
  //     },
  //     {
  //       firstName: 'Charlie',
  //       lastName: 'McCharles'
  //     },
  //     {
  //       firstName: 'Theodore',
  //       lastName: 'Roosevelt'
  //     }
  //   ]
  //   console.log(seedUsers)
  //   seedUsers.forEach(function (user) {
  //     usersRef.push(user)
  //   })
  // }
  // then render this
  //  <h3 onClick={seedList}>SEED DATABASE</h3>

  const handleClick = (firstName, key) => {

    // const likesRef = firebase.database().ref('likes')
    // const like = {
    //   liker: 'TestUser',
    //   liked: [e.target].toString()
    // }
    //
    // likesRef.push(like)

    console.log(firstName)
    console.log(key)
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
              <ListItem firstName={result.firstName}  lastName={result.lastName}  handleClick={handleClick} key={result.key}>
            </ListItem>
            ))}
            </div>
          </label>
          </form>
      </div>
    );

}

export default Search;
