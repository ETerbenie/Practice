import React, { Component } from 'react';

// Components
import StartingValue from './components/StartingValue/StartingValue';
import EndingValue from './components/EndingValue/EndingValue'


import './App.css';


class App extends Component {
  
  
   state = {
      workhours: 14,
      drivehours: 11,
      remainderworkhours: "",
      startingvalue: "",
      endingstartingvalue: ""
    }
  


  calculateWorkHours = (event) => {
    
    this.setState({
      remainderworkhours:  event.target.value
      
      
    });

  };


  render() {

    const inputField = {
      textAlign: 'center'
    }

    return (
      <div>
        <StartingValue 
        startingvalue={this.state.startingvalue}
        changed={this.calculateWorkHours.bind(this)}
        
        />

        <button
        onClick={this.calculateWorkHours}
        >Calculate Remaining Work Hours</button>

        <EndingValue
        
        />

        
        

      </div>
    );
  }
}

export default App;
