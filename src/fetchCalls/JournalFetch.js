export const journalFetch = (userId) => {
  debugger
  return(dispatch) => {
    fetch(`http://localhost:3000/users/${userId}/journals`)
    .then(response => response.json())
    .then(journalTrails => {
      console.log(journalTrails)
      dispatch({
      type: 'FETCH_JOURNALTRAILS', 
      payload: journalTrails
    })})
      
      // console.log(journalTrails))
  }
}



// fetch(`http://localhost:3000/users/${id}/journals`)
// .then(resp => resp.json())
// .then(trails => console.log(trails))

// function setJournalState(journalTrails) {
//   console.log(journalTrails)
// }