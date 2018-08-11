import React, { Component } from 'react';
import './App.css';

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
      <div className="App">
        <button 
          onClick={this.pickARiderHandler}
          style={{
            backgroundColor : '#abdf6f',
            border :'0.16em solid rgba(255,255,255,0)',
            display: 'block',
            padding:'10px',
            
            borderRadius: '3px',
            boxSizing: 'border-box',
            textDecoration:'none',
            fontFamily:'Roboto',
            fontWeight: 300,
            fontSize: '20px',
            color: '#FFFFFF',
            textShadow: '0 0.04em 0.04em rgba(0,0,0,0.35)',
            transition: 'all 0.2'
          }}
          >PICK A RIDER</button>
        <div>
          {this.state.yourRider}
        </div>
      </div>
    );
  }
}

export default App;
