const logInFetch = (username, password) => {
  return(dispatch) => {
    fetch("http://localhost:3000/sessions", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ username, password})
    })
    .then(response => response.json())
    .then(loggedInUser => {
      if (loggedInUser.id) {
        localStorage.setItem('id', loggedInUser.id);
        dispatch({ type: 'SET_USER', payload: loggedInUser})
      } else {
        alert(loggedInUser.errors)
      }
    })
  }
}
export default logInFetch
