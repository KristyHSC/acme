import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Users from './Users'
import newUser from './UserForm'

const App = () => {
    return(
        <Router>
        <div id='main'>
            <div className='header'>
                <h1>Acme Users With Rank</h1>
            </div>
            <Nav />
        </div>
        <Route exact path='/' component = {Home} />
        <Route exact path='/users' component = {Users} />
        <Route exact path='/users/create' component = {newUser} />
        </Router>
    )
}

export default App;