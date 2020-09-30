import setUser from './actions'

const LogInFetch = (username, password) => {
      fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ username, password})
      })
      .then(response => response.json())
      .then(loggedInUser => {
        if (loggedInUser) {
          localStorage.setItem('id', loggedInUser.id);
          localStorage.setItem('token', loggedInUser.token);
          getUser()
          .then(user => {
          setUser(user)
        })
        } else {
          alert(loggedInUser.errors)
        }
      })
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
export default LogInFetch



// login(username, password) {
//   return fetch(`http://localhost:3000/api/v1/sessions/`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": 'application/json'
//     },
//     body: JSON.stringify({ username, password })
//   });
// }