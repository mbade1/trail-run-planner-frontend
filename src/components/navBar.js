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
              <Link to="/trail-run-planner-frontend">Home</Link> | <Link to="/trail-run-planner-frontend/trails">Trails</Link> |{" "}
              <Link to="/trail-run-planner-frontend/journals">Running Journal</Link> |{" "}
              <Link to="/trail-run-planner-frontend/logout">Log Out</Link>
            </nav>
          ) : (
            <nav>
              <Link to="/trail-run-planner-frontend">Home</Link> | <Link to="/trail-run-planner-frontend/trails">Trails</Link> |{" "}
              <Link to="/trail-run-planner-frontend/login">Log In</Link> |{" "}
              <Link to="/trail-run-planner-frontend/signup">Sign Up</Link>
            </nav>
          )}
          <Switch>
            <Route exact path="/trail-run-planner-frontend">
              <Home />
            </Route>
            <Route path="/trail-run-planner-frontend/trails">
              <TrailsContainer />
            </Route>
            <Route path="/trail-run-planner-frontend/journals">
              <JournalContainer />
            </Route>
            <Route exact path="/trail-run-planner-frontend/login">
              <LogIn />
            </Route>
            <Route exact path="/trail-run-planner-frontend/signup">
              <SignUp />
            </Route>
            <Route exact path="/trail-run-planner-frontend/logout">
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