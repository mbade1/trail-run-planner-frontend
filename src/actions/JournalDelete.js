const journalDelete = (userId, journal) => {
    debugger
    fetch(`http://localhost:3000/users/${userId}/journals/${journal}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        journal: journal
      })
    })
    debugger
  }
  
  export default journalDelete
