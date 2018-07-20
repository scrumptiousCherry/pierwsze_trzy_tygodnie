import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    let pudelkoPrzyciskow = []
    for(let i = 0; i <30; i++){ 
      pudelkoPrzyciskow.push({
        id: i,
        czyAktywny: false,
        tekstPrzycisku: '*'
      })
    }
    this.state= {
      czyGraRozpoczeta : 0,
      poziomAktywny : 0,
      czyWygrana: 0,
      listaPrzyciskow: pudelkoPrzyciskow,
      maxPoziom: 11
      
    }
  }
  wyswietlListePrzycisow = () => {
    return(
      <div style = {{'width' : 64}}>
        {this.state.listaPrzyciskow.map((x, index)=>  {
          let styleDisplay = {'display' : 'inline-block'}
          if(index === 2 || index === 6 || index === 9){
            styleDisplay = {
              'display' : 'inline-block'
            }
          }
          return( 
            <div style = {styleDisplay} key = {x.id}>
              <button 
                disabled = {!x.czyAktywny}
                onClick = {() => this.nastepnyPoziom(index)}
              >{x.tekstPrzycisku}</button>
            </div>
          );
        })}
      </div>
    );
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
  wyswietlPrzyciski = () => {
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
    let nowaListaPrzyciskow = this.state.listaPrzyciskow.slice()
    nowaListaPrzyciskow.forEach((item, index) =>{
      if(index < 3){
        nowaListaPrzyciskow[index].czyAktywny=true
      }
    })
    nowaListaPrzyciskow.forEach((item, index) => {
      nowaListaPrzyciskow[index].tekstPrzycisku = '*'
    })
    this.setState({
      czyGraRozpoczeta : 1,
      poziomAktywny : 1,
      czyWygrana : 0,
      listaPrzyciskow : nowaListaPrzyciskow
    }) 
  }
  zakonczGre = () => {
    let nowaListaPrzyciskow = this.state.listaPrzyciskow.slice()
    nowaListaPrzyciskow.forEach((item, index) => {
      nowaListaPrzyciskow[index].tekstPrzycisku = '*'
    })
    this.setState({
      czyGraRozpoczeta: 0,
      poziomAktywny: 0,
      czyWygrana : 0
    })
  }
  nastepnyPoziom = (kliknietyIndex) => {
    console.log(kliknietyIndex)
    let czyPrzegrana = Math.random() < 0.1
    if(czyPrzegrana === true){
      let nowaListaPrzyciskow = this.state.listaPrzyciskow.slice()
      nowaListaPrzyciskow.forEach((item, index) => {
        nowaListaPrzyciskow[index].czyAktywny = false;
        nowaListaPrzyciskow[index].tekstPrzycisku = '*'
      })
      nowaListaPrzyciskow[kliknietyIndex].tekstPrzycisku = '-'
      this.setState ({
        czyWygrana : 1,
        listaPrzyciskow : nowaListaPrzyciskow
      })
    }else{
      let nowyStan = this.state.poziomAktywny + 1
      let nowaListaPrzyciskow = this.state.listaPrzyciskow.slice()
      nowaListaPrzyciskow[kliknietyIndex].tekstPrzycisku = '`'
      nowaListaPrzyciskow.forEach((item, index) => {
        let poczatek = 3*(nowyStan - 1)
        let koniec = poczatek + 2
        if(index >= poczatek && index <= koniec){
          nowaListaPrzyciskow[index].czyAktywny=true
        }else{
          nowaListaPrzyciskow[index].czyAktywny=false
        }
      })
      if(nowyStan === this.state.maxPoziom){
        this.setState({
          czyWygrana: 2
        })
      }else{
        this.setState({
        poziomAktywny : nowyStan,
        listaPrzyciskow: nowaListaPrzyciskow
        })
      }
    }
  }
  render(){
    return(
      <div>
        {/* {this.wyswietlPrzyciski()} */}
        {this.wyswietlPrzyciskStart()}
        {this.wyswietlPrzyciskKoniec()}
        {this.wyswietlKomunikatWygrana()}
        {this.wyswietlListePrzycisow()}
      </div>
    );
  }
}

export default App;
