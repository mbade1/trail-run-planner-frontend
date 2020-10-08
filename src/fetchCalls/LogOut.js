const logOutFetch = (id) => {
  localStorage.removeItem('id');
  debugger
  fetch(`http://localhost:3000/users/${id}`, {
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