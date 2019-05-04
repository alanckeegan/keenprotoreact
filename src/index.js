import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Search from './components/Search'
import Setup from './components/Setup'
import {UserProvider} from './user-context'


const routing = (
  <Router>
    <UserProvider>
      <div>
        <Link to="/">Search</Link>
        <Link to="/Setup">Setup</Link>
        <Link to="/SignUp">SignUp</Link>
        <Link to="/Profile">Profile</Link>
        <Route exact path="/" component={Search} />
        <Route path="/Setup" component={Setup} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Profile" component={Profile} />
      </div>
    </UserProvider>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
