import React, { Component } from 'react';
import classes from './Button.css'
import './App.css'
import styl from './StyleDlaReszty.css'


class App extends Component {
  state = {
    yourRider : ''
  }


  pickARiderHandler = () => {
    let riders = ['Andrea Dovizioso','Johann Zarco', 'Danilo Petrucci', 'Xavier Simeon',
      'Thomas Luthi','Karel Abraham','Alvaro Bautista', 'Franco Morbidelli',
      'Maverick Vinales', 'Dani Pedrosa', 'Andrea Iannone', 'Takaaki Nakagami',
      'Cal Crutchlow', 'Bradley Smith', 'Aleix Espargaro', 'Alex Rins', 'Jack Miller',
      'Pol Espargaro', 'Scott Reddding', 'Valentino Rossi', 'Tito Rabat', 'Hafizh Syahrin',
      'Marc Marquez', 'Jorge Lorenzo']
      let randomIndex = Math.floor(Math.random() * riders.length); 
      let randomElement = riders[randomIndex];
      this.setState({
        yourRider : randomElement
      })
  }

  render() {
    return (
      <div>
      <div className={styl.Tekst}>Wylosuj motocyklistę:</div>
        <button
          className={classes.Button}
          onClick={this.pickARiderHandler}
          >LOSUJĘ!</button>
        <div className={styl.Divv}>
          {this.state.yourRider}
        </div>
      </div>
    );
  }
}

export default App;
