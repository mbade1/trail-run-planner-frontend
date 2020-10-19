const REACT_APP_BACKEND_API = process.env['REACT_APP_BACKEND_API']

const logOutFetch = (id) => {
  localStorage.removeItem('id');
  fetch(`${REACT_APP_BACKEND_API}/users/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id})
  })
  .then(response => response.json())
  .then(loggedOutUser => {
    localStorage.removeItem('id');
    dispatchEvent({ type: 'LOGOUT_USER', payload: loggedOutUser})
  })
}

export default logOutFetch 

//goes to users#destroy  