import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setUser  from '../actions/actions';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', username: '', password: ''};
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {
              "Content-Type": 'application/json'
            },
            body: JSON.stringify(this.state)
          })
            .then(res => res.json())
            .then(newUser => {
              if (newUser.id) {
                localStorage.setItem('id', newUser.id);
                localStorage.setItem('user', newUser.username)
                this.state.username = newUser.username
                getUser()
                .then(user => {
                  setUser(user);
                })
                this.props.history.push("/trails");
            } else {
                alert('Username is not unique or password must be at least 6 characters.')
              }
            })
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
                        <b>Password</b>: <input type="text" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/> 
                        <br/><br/>
                        </p>
                        <input type="submit" value="Log In!"></input>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      setUser: (currentUser) => dispatch(setUser(currentUser)),
    }
  }

export default withRouter(connect(null, mapDispatchToProps)(LogIn));



function getUser() {
    let config = {
      method: 'GET',
        headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      }
    }
    return fetch('http://localhost:3000/users', config)
    .then(resp => resp.json())
    .then(users => {
      const id = localStorage.getItem('id')
      return users.find(user => user.id === id)
    })
  }