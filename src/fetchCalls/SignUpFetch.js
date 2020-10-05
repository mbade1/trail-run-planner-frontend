// import setUser from '../actions/actions'

export const SignUpFetch = (username, email, password) => {  
  debugger
  return (dispatch) => {
    debugger
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
      localStorage.setItem('id', newUser.id)
      getUser()
      .then(user => console.log(user))  
      
      //dispatch({
      //   type: 'ADD_USER', 
      //   payload: user
      // })
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
    return users.find(user => user.id === id)
  })
}

