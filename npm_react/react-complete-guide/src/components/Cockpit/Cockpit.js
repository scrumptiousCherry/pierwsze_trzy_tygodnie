import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    const klasy = [];
    let btnKlasa = '';
    if(props.showPersons){
        btnKlasa = classes.Pink
    }
    if(props.persons.length <=2){
      klasy.push(classes.pink)
    }
    if(props.persons.length <=1){
      klasy.push(classes.color)
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className={klasy.join(' ')}>This is really working!</p>
        <button
        className = {btnKlasa}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
    );
    
};

export default cockpit;