const REACT_APP_BACKEND_API = process.env['REACT_APP_BACKEND_API']

const journalPost = (userId, hiker_project_id, dateOfRun) => {
  fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      journal: {
        hiker_project_id: hiker_project_id,
        dateOfRun: dateOfRun
      }
    })
  })
  .then(response => response.json())
  .then(newJournalEntry => console.log(newJournalEntry))
}

export default journalPost

