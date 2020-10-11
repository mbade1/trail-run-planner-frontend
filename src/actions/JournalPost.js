const journalPost = (userId, hiker_project_id, dateOfRun) => {
  fetch(`http://localhost:3000/users/${userId}/journals`, {
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

