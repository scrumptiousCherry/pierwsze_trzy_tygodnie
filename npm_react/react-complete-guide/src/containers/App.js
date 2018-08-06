import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
 

class App extends Component {
  state = {
    persons: [
      {id: 'gakraw', name : 'Max', age: 28},
      {id: 'fdfhjgh', name: 'Manu', age: 26},
      {id: 'safgy', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons : false
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnKlasa = '';
    if(this.state.showPersons){
      persons = (
        <div>
            {this.state.persons.map((person, index) =>{
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name = {person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
            })}
            </div>
      );

      btnKlasa = classes.Pink
    }

    const klasy = [];
    if(this.state.persons.length <=2){
      klasy.push(classes.pink)
    }
    if(this.state.persons.length <=1){
      klasy.push(classes.color)
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={klasy.join(' ')}>This is really working!</p>
        <button
        className = {btnKlasa}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;