import React from 'react'
import SignUpFetch from '../actions/SignUpFetch'


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
        //if the name of the city has a space in it, split the city string into an array and join with +.
        SignUpFetch(this.state.username, this.state.email, this.state.password)
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

export default SignUp