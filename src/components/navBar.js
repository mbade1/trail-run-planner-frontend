import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import JournalContainer from '../containers/JournalContainer'
import TrailsContainer from '../containers/TrailsContainer'


const NavBar = (props) => {


 return (
     <div className="nav">
            <Router>
                <Link to="/">Home</Link> | <Link to="/trails">Trails</Link> | <Link to="/users/:user/journals">Journals</Link>
            <Switch>
                <Route exact path="/">
                    {/* <Home /> */}
                </Route>
                <Route path="/trails">
                    <TrailsContainer />
                </Route>
                <Route path="/users/:user/journals">
                    <JournalContainer />
                </Route>
            </Switch>
        </Router>
     </div>
    )
}

//component={trailsContainer}
//component={JournalContainer}
export default NavBar