import React, { Component } from 'react';
import './App.css';
import wynik from './dane';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listaWszystkichTablic : wynik,
      listaNaEkranie : []
    }
  }
  renderInput = () => {
    return(
      <div
      style = {{
        'position' : 'absolute',
        'top' : 75,
        'left' : 100,
      }}>
      <div>Wprowadz pierwsze litery tablicy:</div>
        <input
          onChange = {this.przefiltrowanieWynikow}
          style = {{
            'backgroundColor' : '#640a67',
            'color' : 'white',
            'fontsize' : 16
          }}

        />
      </div>
    );
  }
  przefiltrowanieWynikow = (event) => {
    let wartoscZInputa = event.target.value.toUpperCase()
    let wynik = this.state.listaWszystkichTablic
      .filter(x => x.tablicaRejestracyjna.startsWith(wartoscZInputa)
    )
    this.setState({
      listaNaEkranie : wynik
    })
  }


  render(){
    return (
      <div>
        {this.renderInput()}
        {this.state.listaNaEkranie.map(x => {
          return (
            <div
            style = {{
              'position' : 'relative',
              'top' : 100,
              'left' : 100,
              'width' : 250
            }}
            key = {x.tablicaRejestracyjna}
            >
              <h3
              style = {{
                'text-align' : 'left',
                'width' : '50%',
                'display' : 'inline-block'
              }}>{x.tablicaRejestracyjna}</h3>
              <h3
              style = {{
                'text-align' : 'right',
                'width' : '50%',
                'display' : 'inline-block'
              }}>{x.miasto}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
