import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Reducer from './reducers/reducer';

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  //   if (localStorage.getItem('id')) {
  //     this.props.loggedIn()
  //   }
  // }

  render() {
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
    user: state.user,
    trails: state.trails,
    journals: state.journals
  }
}

function mapDispatchToProps(dispatch){
  return {     signUpFetch: () => dispatch(Reducer()),
    fetchTrails: () => dispatch(Reducer()),
    LogInFetch: () => dispatch(Reducer())
  }
}

//below can also take mapDispatchToProps
//passing in the mapStateToProps func. The return val of that func is coming from our store. 
export default connect(mapStateToProps, mapDispatchToProps)(App);
