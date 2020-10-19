const REACT_APP_BACKEND_API = process.env['REACT_APP_BACKEND_API']

const journalDelete = (userId, journal) => {
    fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals/${journal}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        journal: journal
      })
    })
    return fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals`)
    .then(r => r.json())
  }
  
  export default journalDelete
