const REACT_APP_BACKEND_API = process.env['REACT_APP_BACKEND_API']

const journalPost = (userId, hiker_project_id, dateOfRun, body) => {
  debugger
  return(dispatch)=> {
    debugger
  fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      journal: {
        hiker_project_id: hiker_project_id,
        dateOfRun: dateOfRun,
        body: body
      }
    })
  })
  .then(response => response.json())
  .then(newJournalEntry => {
    console.log(newJournalEntry)
    dispatch({ type: 'ADD_JOURNAL', payload: newJournalEntry})
  })
  }
}

export default journalPost

