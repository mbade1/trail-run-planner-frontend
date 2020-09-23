import React from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
//step 1 test the fetch req to the db
  // componentDidMount() {
  //   //fetch to get trails from db is: url/trails. This console.logs the first index of the journals array for user 1
  //   fetch('http://localhost:3000/users/2/journals', {
  //     method: 'GET'
  //   })
  //   .then(resp => resp.json())
  //   .then(db => console.log(db[0]))

  //   //fetch to convert zip code or City, STATE(2-letter abbreviation) into long/lat
  //     //Option to send JUST Zip Code: 
  //       //https://api.geocod.io/v1.6/geocode?q=22201&api_key=YOUR_API_KEY
  //   //Option to send City+State:
  //   fetch('https://api.geocod.io/v1.6/geocode?q=San+Marcos%2c+TX&api_key=fc2c5a56d555f92a9adc9526f2a5daa15a6a53a')
  //   .then(resp => resp.json())
  //   .then(data => console.log(data['results'][0]['location']))

  //   //fetch to get trails with converted long/lat fetch from above. 
  //   //Below example maps over array of trails from SM and console.logs the name of each trail
  //   fetch('https://www.hikingproject.com/data/get-trails?lat=29.972907&lon=-97.997166&maxDistance=10&key=200922216-abc9f3b851d5d8ddadbd0acb2322cefe')
  //   .then(resp => resp.json())
  //   .then(trails => console.log(trails['trails'].map(trail => trail.name)))
  // }

  render() {
  return (
     <div className="App">
       App
     </div>
   );
  }
}

//used to see what is IN our store.
const mapStateToProps = (state) => {
  return {
    example: state.example
  }
}

//used to add something to our store or dispatch new actions to our store directly from this comp.
const mapDispatchToProps = (state) => {

}

//below can also take mapDispatchToProps
//passing in the mapStateToProps func. The return val of that func is coming from our store. 
export default connect(mapStateToProps, mapDispatchToProps)(App);
