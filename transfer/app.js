import React, { Component } from 'react';

// Components
import { StartingValue, RemainingDrivingHours } from './components/StartingValue/StartingValue';
import EndingValue from './components/EndingValue/EndingValue'


import './App.css';


class App extends Component {
  
  
   state = {
      workhours: 14,
      drivehours: 11,
      remainderworkhours: "",
      remainderdrivehours: "",
      startingvalue: "",
      endingstartingvalue: ""
    }
  
  
  

  calculateWorkHours = (e) => {
    
    this.setState({
      remainderworkhours:  14 - e.target.value 
    });
  }

  calculateDriveHours = (e) => {
    this.setState({
      remainderdrivehours: 11 - e.target.value
    });
  }; 


  render() {

    // const inputField = {
    //   textAlign: 'center'
    // }

    return (
      <div>
        <StartingValue 
        changed={this.calculateWorkHours.bind(this)}
        
        />

        <button
        onClick={event => console.log(this.state.remainderworkhours)}
        
        >Calculate Remaining Work Hours</button>

        <RemainingDrivingHours 
        drivechange={this.calculateDriveHours.bind(this)}
        />

        <button
        onClick={e => console.log(this.state.remainderdrivehours)}
        >Calculate Remaining Driving Hours</button>
        <EndingValue
        
        />

        
        

      </div>
    );
  } 
}

export default App;











































// Userinput/Out Assignment 


// import React, { Component } from 'react';

// import UserInput from './components/UserInput/UserInput';
// import UserOutput from './components/UserOutput/UserOutput';
// import './App.css';

// class App extends Component {

//   state = {
//     userName: "testing",
//   }

//   userNameChangedHandler = (event) => {
//     this.setState({userName: event.target.value})
//   };

  





//   render() {

    





//     return (
//       <div >

//         <UserInput 
//           changed={this.userNameChangedHandler}
//           currentName={this.state.userName}
          
//         />

//         <UserOutput 
//           userName={this.state.userName}
//         />

//         <UserOutput 
//           userName={this.state.userName}
//         />

//         <UserOutput 
//           userName="Jacob"
//         />

//         <button
//           // onClick={this.checkUserHandler}
//         >Submit</button>
//       </div>
//     );
//   }
// }

// export default App;
