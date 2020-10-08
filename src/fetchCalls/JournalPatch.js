const journalPatch = (userId, journalId, data) => {
    debugger
      fetch(`http://localhost:3000/users/${userId}/journals/${journalId}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data })
      })
      .then(response => response.json())
      .then(updatedJournal => console.log(updatedJournal))
        
        // console.log(journalTrails))
    
  }
  export default journalPatch