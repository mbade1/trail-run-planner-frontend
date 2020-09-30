import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import TrailsContainer from './containers/TrailsContainer';
import JournalContainer from './containers/JournalContainer';
import Reducer from './reducers/reducer';
import LoginContainer from './containers/LoginContainer';
import Trail from './components/Trail';
import WelcomeImage from './images/trail-background.jpg'
import Home from './components/Home'


class App extends React.Component {r

  render() {
    debugger
  return (
     <div className="App">

      <NavBar props={this.props}/>
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
