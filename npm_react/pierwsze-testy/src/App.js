import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tekstTestowy: "",
      listeZakupow: [],
      wartoscInputa: ""
    }
  }
  dodajDoListy = () => {
    // this.setState({
    //   listeZakupow: ["Produkt"]
    // })
  }
  zmienTekst = () => {
    this.setState({
      tekstTestowy: "Nowy tekst"
    })
  }
  dodajDoListyZakupow = () => {
    if(this.state.wartoscInputa !== ""){
      let nowyStan = [...this.state.listeZakupow];
      nowyStan.push(this.state.wartoscInputa)
      this.setState({
        listeZakupow: nowyStan 
      })  
    }
  }
  zmianaInputa = (event) => {
    this.setState({
      wartoscInputa: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className="przycisk-testowy" 
            onClick={this.zmienTekst}>
            Przycisk
          </div>
          <h2>{this.state.tekstTestowy}</h2>
        </div>

        <div className="lista-zakupow">
          <input onChange={this.zmianaInputa} placeholder="podaj tresc produktu do zakup" />
          <button onClick={this.dodajDoListyZakupow}>Dodaj</button>
          <h3>LISTA ZAKUPOW:</h3>
          <div className="lista-zakupow-tekst">{
            this.state.listeZakupow.join(', ')
          }</div>
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
