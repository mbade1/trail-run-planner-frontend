import React from 'react';
import {connect} from 'react-redux'
import TrailsContainer from './TrailsContainer'
import JournalContainer from './JournalContainer'


class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', username: '', email: '', password: ''};
    }

    render() {
        return (
            <div className="login-container">
            {/* Navbar that leads to trails Container and Journal Container */}
                {/* <TrailsContainer/>
                <JournalContainer/> */}

                <h1>Trail Running Planner</h1>
                <form onSubmit={this.handleSubmit}>
                    <b>Username</b>: <input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username} />
                    &nbsp;
                    <b>Email</b>: <input type="text" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email} />
                    &nbsp;
                    <b>Password</b>: <input type="text" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/> 
                    &nbsp;
                    <input type="submit" value="Sign Up!"></input>
                </form>
            </div>
        )
    }
}

export default LoginContainer