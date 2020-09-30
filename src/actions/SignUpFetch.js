const SignUpFetch = (username, email, password) => {  
  // return(dispatch) => {
  fetch("http://localhost:3000/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        email: email,
        password: password,
      }
    })
  })
  .then(response => response.json()) 
  .then(newUser => console.log(newUser))
  // .then(newUser => dispatch({
  //   type: 'ADD_USER',
  //   payload: newUser
  // }))  
  //}
}


export default SignUpFetch
