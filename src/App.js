import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Reducer from './reducers/reducer';

class App extends React.Component {r

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
    example: state.example
  }
}

function mapDispatchToProps(dispatch){
  return { fetchTrails: () => dispatch(Reducer()),
    SignUpFetch: () => dispatch(Reducer()),
    LogInFetch: () => dispatch(Reducer())
  }
}

//used to add something to our store or dispatch new actions to our store directly from this comp.


//below can also take mapDispatchToProps
//passing in the mapStateToProps func. The return val of that func is coming from our store. 
export default connect(mapStateToProps, mapDispatchToProps)(App);
