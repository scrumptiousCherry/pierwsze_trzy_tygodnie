import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      temperaturaWC : '',
      temperaturaWF : '',
      komunikatBledu : ''
    }
  }
  pobraniePogody = (event) => {
    let odczytaneZInputa = event.target.value
    let poEnterze = event.key
    let apiKi = '2b439bf1629a76454f98375cce664c6f'
    let url = 
    `http://api.openweathermap.org/data/2.5/weather?q=${odczytaneZInputa}&APPID=${apiKi}`
    if(poEnterze === 'Enter'){ 
      fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
        if(data.cod === '404'){
          this.setState({
            temperaturaWC : '',
            temperaturaWF : '',
            komunikatBledu : 'podales zle miasto'
          })
        }else{
          // Kelvin
          let K = data.main.temp
          //Celsjusz
          let C = K - 273.15
          //Fahrenheit
          let F = ((K - 273.15)*1.8) + 32
          C = Math.round(C * 100) / 100
          F = Math.round(F *100) / 100
          this.setState({
            temperaturaWC : C,
            temperaturaWF : F,
            komunikatBledu : ''
          })
      }
      }, (error) => {
        console.log(error)
        this.setState({
          temperaturaWC : '',
          temperaturaWF : '',
          komunikatBledu : 'podales zle miasto'
        })
      })
    }
  }
  wyswietlStopnie = () => {
    if(this.state.temperaturaWC !== '' && this.state.temperaturaWF !== ''){
      return (
        <div>
          <div>{this.state.temperaturaWC}{'\xB0'} C</div>
          <div>{this.state.temperaturaWF}{'\xB0'} F</div>
        </div>
      );
    }
  }
  
  render(){
    return(
      <div>
        <input
          onKeyPress = {this.pobraniePogody}
        />
        {this.wyswietlStopnie()}
        {this.state.komunikatBledu}
      </div>
    );
  }
} 


export default App;
