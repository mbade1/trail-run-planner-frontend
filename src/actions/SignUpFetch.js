const signUpFetch = (user, password) => {  
  return(dispatch) => {
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