const JournalFetch = (userId) => {
  return(dispatch) => {
    fetch(`http://localhost:3000/users/${userId}/journals`)
    .then(response => response.json())
    .then(journalTrails => dispatch({
      type: 'FETCH_JOURNALTRAILS', 
      payload: journalTrails
    }))
      
      // console.log(journalTrails))
  }
}
export default JournalFetch



// fetch(`http://localhost:3000/users/${id}/journals`)
// .then(resp => resp.json())
// .then(trails => console.log(trails))
