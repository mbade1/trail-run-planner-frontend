import React from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import JournalContainer from '../containers/JournalContainer'
import TrailsContainer from '../containers/TrailsContainer'
import Home from '../components/Home'
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import LogOut from '../components/LogOut'
import LogOutFetch from '../fetchCalls/LogOut'
 
class NavBar extends React.Component {

    handleChange = () => {
        isLoggedIn()
    }

    componentDidMount() {
        isLoggedIn()
    }

    render() {
        return (
            <Router>
                <div>
                {isLoggedIn() ?
                    <div className="nav" onChange={() => this.handleChange()}>
                        <Link to="/" >Home</Link> | <Link to="/trails">Trails</Link> | <Link to="/journals">Running Journal</Link> | <Link to="/logout"><span onClick={() => {
                            LogOutFetch();
                            // this.props.history.push('/');
                        }}>
                     Log Out
                </span></Link>
                    </div>    
                    :
                    <div className="nav" onChange={() => this.handleChange()}>
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
                        <Route path="/journals">
                            <JournalContainer />
                        </Route>
                        <Route exact path="/login">
                            <LogIn />
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/logout">
                            <LogOut />
                        </Route>
                    </Switch>
                </div>
            </Router>
            )
    }
}


function isLoggedIn() {
    let result = !!localStorage.getItem('id')
    return result  
}

export default NavBar