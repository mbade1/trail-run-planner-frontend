const JournalPost = (userId, hiker_project_id) => {
  debugger
    return(dispatch) => {
      debugger
        fetch(`http://localhost:3000/users/${userId}/journals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        journal: {
          hiker_project_id: hiker_project_id
          }
        })
        })
        .then(response => response.json())
        .then(newJournalEntry => console.log(newJournalEntry))
    }
}

export default JournalPost