const REACT_APP_BACKEND_API = process.env['REACT_APP_BACKEND_API']

export const journalFetch = (userId) => {
  debugger
  return(dispatch) => {
    fetch(`${REACT_APP_BACKEND_API}/users/${userId}/journals`)
    .then(response => response.json())
    .then(journalTrails => {
      console.log(journalTrails)
      dispatch({
      type: 'FETCH_JOURNALTRAILS', 
      payload: journalTrails
    })})
  }
}
