import setUser from '../actions/actions'
const SignUpFetch = (username, email, password) => {  
  return(dispatch) => {
  fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        email: email,
        password: password,
      }
    })
  })
  .then(response => response.json()) 
  .then(newUser => {
    if (newUser) {
      localStorage.setItem('id', newUser.id);
      localStorage.setItem('token', newUser.token);
      getUser()
      .then(user => {
        dispatch({type: 'ADD_USER', payload: user})
      })
    }
    else {
      alert(newUser.errors)
    }
  })
}
}
function getUser() {
  let token = localStorage.getItem('token')
  let config = {
    method: 'GET',
      headers: {
      "Authorization": token,
      "Content-Type": 'application/json',
    }
  }
  return fetch('http://localhost:3000/users', config)
  .then(resp => resp.json())
  .then(users => {
    const id = localStorage.getItem('id')
    return users.find(user => user.id == id)
  })
}

export default SignUpFetch
