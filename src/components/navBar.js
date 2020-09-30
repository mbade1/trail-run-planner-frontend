import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import JournalContainer from '../containers/JournalContainer'
import TrailsContainer from '../containers/TrailsContainer'
import Home from '../components/Home'


const NavBar = (props) => {

 return (
    <Router>
        <div>
            <div className="nav">
                <Link to="/">Home</Link> | <Link to="/trails">Trails</Link> | <Link to="/users/:user/journals">Journals</Link>
            </div>    
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
            </Switch>
        </div>
    </Router>
    )
}

//component={trailsContainer}
//component={JournalContainer}
export default NavBar