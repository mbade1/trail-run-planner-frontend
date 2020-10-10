import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logInFetch from '../actions/LogInFetch'

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: ''};
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.logInFetch(this.state.username, this.state.password)
    this.setState({
      user: '',
      password: ''
    })
    this.props.history.push('/trails')
  }

  render() {
    return (
      <div className="SignUp">              
        <div className="sign-up-form-container">
          <h1>Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <p>
            <b>Username</b>: <input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username} />
            <br/><br/>
            <b>Password</b>: <input type="password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/> 
            <br/><br/>
            </p>
            <input type="submit" value="Log In!"></input>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps, {logInFetch})(LogIn));