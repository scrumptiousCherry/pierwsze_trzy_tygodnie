import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {
      czyGraRozpoczeta : 0,
      poziomAktywny : 3,
      czyWygrana: 0,
    }
  }
  wyswietlKomunikatWygrana = () => {
    if(this.state.czyWygrana === 1){
      return(
        <div>Przegrana</div>
      );
    }
    if(this.state.czyWygrana === 2){
      return(
        <div>Wygrana</div>
      );
    }
  }
  przyciski = () => {
    return(
      <div>
        <div 
        style = {{'display' : 'block'}}>
        to jest poziom czwarty
          <button disabled = {this.state.poziomAktywny !== 4}
          onClick = {this.nastepnyPoziom}>*</button>
          <button disabled = {this.state.poziomAktywny !== 4}
          onClick = {this.nastepnyPoziom}>*</button>
          <button disabled = {this.state.poziomAktywny !== 4}
          onClick = {this.nastepnyPoziom}>*</button>
        </div>
        <div 
        style = {{'display' : 'block'}}>
        to jest poziom trzeci
          <button disabled = {this.state.poziomAktywny !== 3}
          onClick = {this.nastepnyPoziom}>*</button>
          <button disabled = {this.state.poziomAktywny !== 3}
          onClick = {this.nastepnyPoziom}>*</button>
          <button disabled = {this.state.poziomAktywny !== 3}
          onClick = {this.nastepnyPoziom}>*</button>
        </div>
        <div
        style = {{'display' : 'block'}}>
          to jest poziom drugi
          <button disabled = {this.state.poziomAktywny !== 2}
          onClick = {this.nastepnyPoziom}>*</button>
          <button disabled = {this.state.poziomAktywny !== 2}
          onClick = {this.nastepnyPoziom}>*</button>
          <button disabled = {this.state.poziomAktywny !== 2}
          onClick = {this.nastepnyPoziom}>*</button>
        </div>
        <div 
        style = {{'display' : 'block'}}>
          to jest poziom pierwszy
          <button disabled = {this.state.poziomAktywny !== 1}
          onClick = {this.nastepnyPoziom}>*</button>
          <button disabled = {this.state.poziomAktywny !== 1}
          onClick = {this.nastepnyPoziom}>*</button>
          <button disabled = {this.state.poziomAktywny !== 1}
          onClick = {this.nastepnyPoziom}>*</button>
        </div>
      </div>
    );
  }
  wyswietlPrzyciskKoniec = () =>{
    if(this.state.czyGraRozpoczeta === 1){
      return(
        <button onClick = {this.zakonczGre}>KONIEC</button>
  
      );
    }
  }
  wyswietlPrzyciskStart = () => {
    if(this.state.czyGraRozpoczeta === 0){
      return(
        <button onClick = {this.rozpocznijGre}>START</button>
      );
    }
  }
  rozpocznijGre = () => {
    this.setState({
      czyGraRozpoczeta : 1,
      poziomAktywny : 1,
      czyWygrana : 0
    })
  }
  zakonczGre = () => {
    this.setState({
      czyGraRozpoczeta: 0,
      poziomAktywny: 0,
      czyWygrana : 0
    })
  }
  nastepnyPoziom = (event) => {
    let nowyStan = this.state.poziomAktywny + 1
    if(nowyStan === 5){
      this.setState({
        czyWygrana: 2
      })
    }else{
      this.setState({
      poziomAktywny : nowyStan
      })
    }
  }
  render(){
    return(
      <div>
        {this.przyciski()}
        {this.wyswietlPrzyciskStart()}
        {this.wyswietlPrzyciskKoniec()}
        {this.wyswietlKomunikatWygrana()}
      </div>
    );
  }
}

export default App;
