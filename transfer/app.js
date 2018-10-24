import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name : 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }


  switchNameHandler = (newName) => {
    // console.log('This was clicked!');
    // DON'T DO This - this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name : 'Jacob', age: 29 },
        { name: 'Stephanie', age: 23 }
      ],
      otherStates: 'some other value',
      showPersons: false
    })
  };


  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name : event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };


  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };



    return(
      <div className='App'>
        <h1>Hi, I'm a React App too!</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        { 
          this.state.showPersons === true ? 
          <div >
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            />

            <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'OMG Steve')} 
            changed={this.nameChangedHandler} >My Hobbies: Racing</Person>

            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            />
        </div> : null
        }

      </div>
    );


    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App')); it's the same thing 




   
  }
}

export default App;


