const REACT_APP_BACKEND_API = process.env['REACT_APP_BACKEND_API']

const signUpFetch = (user, password) => {  
  return(dispatch) => {
    fetch(`${REACT_APP_BACKEND_API}/users`, {
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
        localStorage.setItem('id', newUser.id)
        dispatch({ type: 'ADD_USER', payload: newUser })
      }
      else {
        alert(newUser.message)
      }
    })
  }
}

export default signUpFetch