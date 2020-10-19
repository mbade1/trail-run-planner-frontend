const REACT_APP_BACKEND_API = process.env['REACT_APP_BACKEND_API']

const journalPatch = (userId, journalId, data) => {
  fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals/${journalId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
  .then(response => response.json())
  .then(updatedJournal => console.log(updatedJournal))    
}
export default journalPatch