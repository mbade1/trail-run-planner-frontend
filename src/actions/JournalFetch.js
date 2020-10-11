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
  }
}
