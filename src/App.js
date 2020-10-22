import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Reducer from './reducers/reducer';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
     <div className="App">
      <NavBar props={this.props}/>
      <Footer />

     </div>
   );
  }
}

//used to see what is IN our store.
const mapStateToProps = (state) => {
  return {
    user: state.user,
    trails: state.trails,
    journals: state.journals
  }
}

function mapDispatchToProps(dispatch){
  return {     
    signUpFetch: () => dispatch(Reducer()),
    fetchTrails: () => dispatch(Reducer()),
    journalFetch: () => dispatch(Reducer()),
    logInFetch: () => dispatch(Reducer()),
    logOutFetch: () => dispatch(Reducer())
  }
}

//below can also take mapDispatchToProps. Passing in the mapStateToProps func. The return val of that func is coming from our store. 
export default connect(mapStateToProps, mapDispatchToProps)(App);
