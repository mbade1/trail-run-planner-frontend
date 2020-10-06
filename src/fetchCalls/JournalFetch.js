const JournalFetch = (userId) => {
  return(dispatch) => {
    fetch(`http://localhost:3000/users/${userId}/journals`)
    .then(response => response.json())
    .then(newJournalEntry => console.log(newJournalEntry))
  }
}
export default JournalFetch


