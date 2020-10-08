const signUpFetch = (user, password) => {  
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
        password: password,
      }
    })
  })
  .then(response => response.json()) 
  .then(newUser => {
    if (newUser.id) {
      debugger
      localStorage.setItem('id', newUser.id)
      dispatch({ type: 'ADD_USER', payload: newUser })
    }
    else {
      alert(newUser.errors)
    }
  })
  }
}
function getUser(id) {

  fetch(`http://localhost:3000/user/${id}`)
  .then(resp => resp.json())
  .then(users => {
    debugger
    let found = users.find(user => user.id === id)
    return found
  })
}


export default signUpFetch







// import setUser from '../actions/actions'

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