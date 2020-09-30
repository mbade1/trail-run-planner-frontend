export const journalPost = (hiker_project_id) => {
    return(dispatch) => {
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
        .then(newUser => console.log(newUser))
    }
}