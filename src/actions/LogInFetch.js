const LogInFetch = (username, password) => {
  
      fetch("http://localhost:3000/users/:id")
      .then(response => response.json())
      .then(loggedUser => console.log(loggedUser))
  
  }

export default LogInFetch