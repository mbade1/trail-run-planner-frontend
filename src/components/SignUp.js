import React from 'react'
import { SignUpFetch } from '../fetchCalls/SignUpFetch'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux' 
import Reducer from '../reducers/reducer'

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user: '', email: '', password: ''};
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
            username: '', 
            email: '', 
            password: ''
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




// option 1:
const mapStateToProps = state => {
      return {
          user: state.user
      }
  }

export default withRouter(connect(mapStateToProps, {SignUpFetch})(SignUp))

// option 2:
// function mapDispatchToProps(dispatch) {
//     return {
//         SignUpFetch: () => dispatch(Reducer())
//     }
// }

// const mapStateToProps = (state) => {
//     debugger
//     return {
//       user: state.user,
//       trails: state.trails,
//       journals: state.journals
//     }
//   }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))






//option 3?

// import setUser  from '../actions/actions'

// function mapStateToProps(state) {
//     return {
//       username: state.username,
//       email: state.email
//     }
//   }

// const mapStateToProps = state => {
//     return {
//       trails: state.trails
//     }
//   }

// export default connect(mapStateToProps, {fetchCityAndTrails})(TrailsContainer)