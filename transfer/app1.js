import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name : 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState:'some other value',
    showPersons: false
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
      otherState: 'some other value',
      showPersons: false
    })
  };


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    // const person = Object.assign({}, this.state.persons[personIndex]) alt way

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); method 1
    const persons = [...this.state.persons]; //modern method
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  };


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

// Method 2, using an if outside of jsx (after the ender function but before return), and utilizing the re-rendering process from a state change we do with togglePersonsHandler function
    let persons = null;

    if (this.state.showPersons ) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })}
            {/* <Person 
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
            /> */}
        </div> 
      );
    }






    return(
      <div className='App'>
        <h1>Hi, I'm a React App too!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons} 
      </div>
    );

        // Ternary Method to utilize the toggle handler 
    // return(
    //   <div className='App'>
    //     <h1>Hi, I'm a React App too!</h1>
    //     <button 
    //     style={style}
    //     onClick={this.togglePersonsHandler}>Toggle Persons</button>
    //     { 
    //       this.state.showPersons === true ? 
    //       <div >
    //         <Person 
    //         name={this.state.persons[0].name} 
    //         age={this.state.persons[0].age} 
    //         />
    //         <Person 
    //         name={this.state.persons[1].name} 
    //         age={this.state.persons[1].age}
    //         click={this.switchNameHandler.bind(this, 'OMG Steve')} 
    //         changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
    //         <Person 
    //         name={this.state.persons[2].name} 
    //         age={this.state.persons[2].age}
    //         />
    //     </div> : null
    //     }
    //   </div>
    // );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App')); it's the same thing 
   
  }
}
export default App;
