import React from 'react'
import SignUpFetch from '../fetchCalls/SignUpFetch'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux' 
import setUser  from '../actions/actions'

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', username: '', email: '', password: ''};
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        SignUpFetch(this.state.username, this.state.email, this.state.password)
        this.setState({
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="SignUp">              
                <div className="sign-up-form-container">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                        <b>Username</b>: <input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username} />
                        <br/><br/>
                        <b>Email</b>: <input type="text" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email} />
                        <br/><br/>
                        <b>Password</b>: <input type="text" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/> 
                        <br/><br/>
                        </p>
                        <input type="submit" value="Sign Up!"></input>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
function mapDispatchToProps(dispatch) {
      return {
          setUser: (currentUser) => dispatch(setUser(currentUser))
      }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
