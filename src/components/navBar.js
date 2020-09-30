import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import JournalContainer from '../containers/JournalContainer'
import TrailsContainer from '../containers/TrailsContainer'
import Home from '../components/Home'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'


const NavBar = (props) => {

 return (
    <Router>
        
        <div>
        {isLoggedIn() ?
            <div className="nav">
                <Link to="/">Home</Link> | <Link to="/trails">Trails</Link> | <Link to="/users/:user/journals">Journals</Link>
            </div>    
            :
            <div className="nav">
                <Link to="/">Home</Link> | <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link>    
            </div>
        }
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/trails">
                    <TrailsContainer />
                </Route>
                <Route path="/users/:user/journals">
                    <JournalContainer />
                </Route>
                <Route exact path="/login">
                    <LogIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </div>
    </Router>
    )
}


function isLoggedIn() {
    return !!localStorage.getItem('token')
}

export default NavBar