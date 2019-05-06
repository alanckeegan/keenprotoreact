import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Search from './components/Search'
import Likes from './components/Likes'
import SignIn from './components/SignIn'
import Matches from './components/Matches'
import NavBar from './components/NavBar'
import NavLink from './components/NavLink'
import {UserProvider} from './user-context'


const routing = (
  <Router>
    <UserProvider>
      <div>
        <NavBar>
        <NavLink to="/">Search</NavLink>
        <NavLink to="/Likes">Likes</NavLink>
        <NavLink to="/SignUp">SignUp</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
        <NavLink to="/SignIn">SignIn</NavLink>
        <NavLink to="/Matches">Matches</NavLink>
        </NavBar>  
        <Route exact path="/" component={Search} />
        <Route path="/Likes" component={Likes} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Profile" component={Profile} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Matches" component={Matches} />
      </div>
    </UserProvider>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
