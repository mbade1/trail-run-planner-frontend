import React from 'react'
import LogInFetch from '../fetchCalls/LogInFetch'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setUser  from '../actions/actions';




class LogIn extends React.Component {
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
        LogInFetch(this.state.username, this.state.password)
        this.props.history.push('/');
        this.setState({
            username: '', 
            email: '', 
            password: ''
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
