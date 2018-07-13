import React, { Component } from 'react';
import './App.css';
import getRandomInt from './losowa_liczba';  
/**
potrzebuje klasy ktora:
    1 wylosuje losowa liczbe z zakresu 0-10
    2 wyswietli input
    3 odczyta wartosc z inputa
    4 sprawdzi wartosc inputa 
        a) jesli wartosc inputa jest pusta to wyswietl komunikat "wpisz wartosc" (czyPustaWartosc)
        b) jesli wartosc inputa jest wieksza od wylosowanej liczby to wyswietli 
        komunikat "wprowadzona liczba jest wieksza od wylosowanej liczby" (czyLiczbaJestWieksza)
        c) jesli wartosc inputa jest mniejsza od wylosowanej liczby to wyswietli
        komunikat "wprowadzona liczba jest mniejsza od wylosowanej liczby" (czyLiczbaJestMniejsza)
        d) jesli wartosc inputa nie jest liczba wyswietli komunikat "zla wartosc" (czyToNieLiczba)
        e) jesli wartosc inputa jest rowna liczbie wyswietli komunikat "wygrana" (czyRowna)

    + potrzebuje zmiennej ktora przechowa losowa liczbe (losowaLiczba)
    + potrzebuje htmla (<input/>)
    + potrzebuje podpiac zdarzenie onChange na tagu input (PoZmianieInputa)
    + potrzebuje napisac funkcje ktora sprawdzi warunki 4(a-e) (uzywam flag:)
    + potrzebuje napisac funkcje ktora zajmie sie wyswietlaniem komunikatow (renderText)
*/
class App extends React.Component{
  constructor(){
      super()
      this.state = {
         losowaLiczba : getRandomInt(11),
         czyPustaWartosc : true,
         czyLiczbaJestWieksza : false,
         czyLiczbaJestMniejsza : false,
         czyToNieLiczba : false,
         czyRowna : false
      }
  }
  
  
  PoZmianieInputa = (event) => {
      let wartoscZInputa = event.target.value
      if(wartoscZInputa == ""){
          this.setState({
              czyPustaWartosc : true,
              czyLiczbaJestMniejsza : false,
              czyLiczbaJestWieksza : false,
              czyToNieLiczba : false,
              czyRowna : false
          })
      }else{
          if(isNaN(wartoscZInputa) == true){
          this.setState({
              czyPustaWartosc :false,
              czyLiczbaJestMniejsza : false,
              czyLiczbaJestWieksza : false,
              czyRowna : false,
              czyToNieLiczba : true,
          })
          }
          if(wartoscZInputa > this.state.losowaLiczba){
              this.setState({
                  czyPustaWartosc : false,
                  czyLiczbaJestMniejsza : false,
                  czyLiczbaJestWieksza : true,
                  czyToNieLiczba : false,
                  czyRowna : false
          })
          }
          if(wartoscZInputa < this.state.losowaLiczba){
              this.setState({
                  czyPustaWartosc : false,
                  czyLiczbaJestMniejsza: true,
                  czyLiczbaJestWieksza : false,
                  czyToNieLiczba : false,
                  czyRowna : false
          })
          }
          if(wartoscZInputa == this.state.losowaLiczba){
              this.setState({
                  czyPustaWartosc : false,
                  czyLiczbaJestMniejsza : false,
                  czyLiczbaJestWieksza : false,
                  czyRowna : true,
                  czyToNieLiczba : false
          })
          }
      }
  }
  renderText = () => {
      if(this.state.czyPustaWartosc == true){
          return(
              <div>podaj wartosc</div>
          );
      }
      if(this.state.czyToNieLiczba == true){
          return(
              <div>podales zla wartosc</div>
          );
      }
      if(this.state.czyLiczbaJestMniejsza == true){
          return(
              <div>podana przez Ciebie liczba jest mniejsza od wylosowanej</div>
          );
      }
      if(this.state.czyLiczbaJestWieksza == true){
          return(
              <div>podana przez Ciebie liczba jest wieksza od wylosowanej</div>
          );
      }
      if(this.state.czyRowna == true){
          return(
              <div>wygrales</div>
          );
      }
      
  }
  render(){
      return (
          <div>
          <input onChange={this.PoZmianieInputa}/>{this.renderText()}
          </div>
      );
  }
}



export default App;
