import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {id: 'gakraw', name : 'Max', age: 28},
        {id: 'fdfhjgh', name: 'Manu', age: 26},
        {id: 'safgy', name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons : false,
      buttonClicked: 0
    }
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        buttonClicked: prevState.buttonClicked + 1}
      
    });
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = 
        <Persons 
        persons = {this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        />;
    }

    

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
         {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
