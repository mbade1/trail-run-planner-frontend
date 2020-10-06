// import setUser from '../actions/actions'

// export const editAccount = (data) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/api/v1/accounts/${data.id}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       method: 'PATCH',
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(account => dispatch({type: 'EDIT_ACCOUNT', payload: account}))
//   }
// }

// export const signUpFetch = (user, email, password) => {
//   debugger
//     fetch('http://localhost:3000/users', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify({
//       user: user,
//       email: email,
//       password: password
//     })
//   })
//   .then(response => response.json())
//   .then(user => console.log(user))

//   //dispatch({type: 'ADD_USER', payload: user})


// }


// export function fetchAstronauts() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
//     fetch('http://api.open-notify.org/astros.json')
//       .then(response => response.json())
//   };
// }



export const signUpFetch = (user, email, password) => {  
  debugger
  return(dispatch) => {
    debugger
  fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: {
        user: user,
        email: email,
        password: password,
      }
    })
  })
  .then(response => response.json()) 
  .then(newUser => {
    if (newUser.id) {
      debugger
      localStorage.setItem('id', newUser.id)
      getUser()
      .then(user => dispatch({ type: 'ADD_USER', payload: user }))
    }
    else {
      alert(newUser.errors)
    }
  })
  }
}
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

