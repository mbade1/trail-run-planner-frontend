import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'

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

//below can also take mapDispatchToProps. Passing in the mapStateToProps func. The return val of that func is coming from our store. 
export default App;
