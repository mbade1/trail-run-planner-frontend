import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import signUpFetch from "../actions/SignUpFetch";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = { user: "", password: "" };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUpFetch(this.state.user, this.state.password);
    this.props.history.push("/trails");
  };

  render() {
    return (
      <div className="SignUp">
        <div className="sign-up-form-container">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <p>
              <b>Username</b>:{" "}
              <input
                type="text"
                name="user"
                onChange={(event) => this.handleChange(event)}
                value={this.state.user}
              />
              <br />
              <br />
              <b>Password</b>:{" "}
              <input
                type="password"
                name="password"
                onChange={(event) => this.handleChange(event)}
                value={this.state.password}
              />
              <br />
              <br />
            </p>
            <input type="submit" value="Sign Up!"></input>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps, { signUpFetch })(SignUp));
