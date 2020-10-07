import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux' 
import setUser from '../actions/actions'

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {user: '', password: ''};
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();    
        fetch(`http://localhost:3000/users`, {
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
              this.setState({
                  user: newUser.username
              })
              debugger
              getUser()
              .then(user => {
                setUser(user);
              })
              this.props.history.push("/trails");
            } else {
              alert('Username must be unique.')
            }
          })
      }

    
    render() {
        return (
            <div className="SignUp">              
                <div className="sign-up-form-container">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                        <b>Username</b>: <input type="text" name="user" onChange={(event) => this.handleChange(event)} value={this.state.user} />
                        <br/><br/>
                        <b>Password</b>: <input type="password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/> 
                        <br/><br/>
                        </p>
                        <input type="submit" value="Sign Up!"></input>
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
function mapDispatchToProps(dispatch) {
    return {
        user: () => { dispatch(setUser()) }
      }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))


//getUser function, to get the new user from the db
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











// const mapStateToProps = state => {
//     return {
//       trails: state.trails
//     }
//   }

// export default connect(mapStateToProps, {fetchCityAndTrails})(TrailsContainer)









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