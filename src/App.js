import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/navBar';
import TrailsContainer from './containers/trailsContainer';
import JournalContainer from './containers/journalContainer';
import Reducer from './reducers/reducer';
import LoginContainer from './containers/loginContainer';
import Trail from './components/trail';


class App extends React.Component {r

  render() {
  return (
     <div className="App">
       <NavBar/>
          {/* <Route path="/" component={NavBar} /> */}
          <Route exact path="/trails" component={TrailsContainer}>Trails</Route>
          <Route exact path="/users/:user/journals" component={JournalContainer}/>

        {/* After creating login functionality, add <WelcomeContainer/> with name of user inside.*/}
        <TrailsContainer/>

        <JournalContainer/>
        {/* <LoginContainer */}
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
