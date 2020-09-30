import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import TrailsContainer from './containers/trailsContainer'
import JournalContainer from './containers/journalContainer'
import Reducer from './reducers/reducer'
import LoginContainer from './containers/loginContainer';

class App extends React.Component {
//step 1 test the fetch req to the db
  // componentDidMount() {
  //   //fetch to get trails from db is: url/trails. This console.logs the first index of the journals array for user 1
  //   fetch('http://localhost:3000/users/2/journals', {
  //     method: 'GET'
  //   })
  //   .then(resp => resp.json())
  //   .then(db => console.log(db[0]))


  render() {
  return (
     <div className="App">
        {/* After creating login functionality, add <WelcomeContainer/> with name of user inside.*/}
        <JournalContainer/>
        <TrailsContainer/>
        {/* <LoginContainer/> */}
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

function mapDispatchToProps(dispatch){
  return { fetchTrails: () => dispatch(Reducer()) }
}

//used to add something to our store or dispatch new actions to our store directly from this comp.


//below can also take mapDispatchToProps
//passing in the mapStateToProps func. The return val of that func is coming from our store. 
export default connect(mapStateToProps, mapDispatchToProps)(App);
