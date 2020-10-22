const REACT_APP_BACKEND_API = process.env['REACT_APP_BACKEND_API']

const logInFetch = (username, password) => {
  return(dispatch) => {
    fetch(`${REACT_APP_BACKEND_API}/sessions`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ 
        username,  
        password
      })
    })
    .then(response => response.json())
    .then(loggedInUser => {
      if (loggedInUser.id) {
        localStorage.setItem('id', loggedInUser.id);
        dispatch({ type: 'SET_USER', payload: loggedInUser})
      } else {
        alert(loggedInUser.message)
      }
    })
  }
}
export default logInFetch
