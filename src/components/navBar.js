import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import JournalContainer from "../containers/JournalContainer";
import TrailsContainer from "../containers/TrailsContainer";
import Home from "../components/Home";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import LogOut from "../components/LogOut";

class NavBar extends React.Component {
  componentDidMount() {
    isLoggedIn();
  }

  render() {
    return (
      <Router>
        <div>
          {isLoggedIn() ? (
            <nav>
              <Link to="/">Home</Link> | <Link to="/trails">Trails</Link> |{" "}
              <Link to="/journals">Running Journal</Link> |{" "}
              <Link to="/logout">Log Out</Link>
            </nav>
          ) : (
            <nav>
              <Link to="/">Home</Link> | <Link to="/trails">Trails</Link> |{" "}
              <Link to="/login">Log In</Link> |{" "}
              <Link to="/signup">Sign Up</Link>
            </nav>
          )}
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
    );
  }
}

function isLoggedIn() {
  let result = !!window.localStorage.getItem("id");
  return result;
}

export default NavBar;