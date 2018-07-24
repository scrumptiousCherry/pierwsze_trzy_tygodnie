/*
STYLOWANIE 
ZLICZANIE KWOTY WYGRANEJ:
done done done ::: [DWA NOWE KLUCZE W STATE: WARTOSC Z INPUTA PO KLIKNIECIU START, KWOTA WYGRANEJ 
(ZMIENIA SIE PO KLIKNIECIU W NASTEPNY POZIOM)],
WYGLAD LISTY WYNIKOW
RILIS
KURS NA EGGHEAD ES6
zrobic nowy folder do testow
dev dependencies w package jason
src setuptests
zainstalowac skype
*/
import './App.css';
import moment from 'moment';
import React, { Component } from 'react';
moment.locale('pl');

class App extends Component {
  constructor(){
    super()
    let pudelkoPrzyciskow = []
    for(let i = 0; i <30; i++){ 
      pudelkoPrzyciskow.push({
        id: i,
        czyAktywny: false,
        tekstPrzycisku: '*',
      })
    }
    this.state= {
      czyGraRozpoczeta : 0,
      poziomAktywny : 0,
      czyWygrana: 0,
      listaPrzyciskow: pudelkoPrzyciskow,
      maxPoziom: 11,
      wersjaGry: 'v.0.5.0.[2018.24.07]',
      numerId: 10,
      listaWynikow: [
        {
          id: 1,
          poziomZakonczenia : 4,
          kwotaZagrana : 1.00,
          kwotaWygrana: 100.00,
          zysk: 100.00 - 1.00,
          czyWygrana: true,
          data: moment().format('LLLL')
        },
        {
          id: 2,
          poziomZakonczenia : 1,
          kwotaZagrana : 5.00,
          kwotaWygrana: 0.00,
          zysk: 0.00 - 5.00,
          czyWygrana: false,
          data: moment().format('LLLL')
        }
      ],
      komunikatBledu: '',
      wartoscInputa: '',
      przechowywanieZInputa : '',
      kwotaWygranej : 0,
      }
  }
  wyswietlPowitanie = () => {
    return(
      <div
      style = {{
        'width' : 450,
        'position' : 'absolute',
        'left' : 250,
        'top' : 10,
        'font-size' : 18,
        'fontFamily' : 'Lora',
        'textAlign' : 'justify'
      }}>
        Witaj w grze w jeża :) twoim zadaniem jest wybrac kwote, ktora chcesz zagrac,
        a nastepnie dotrzec na sam koniec wiezy, by zyskac jak najwiecej :)
        <br/>
        Powodzenia!
      </div>
    );
  }
  wyswietlListeWynikow = () => {
    return (
      <div
      style = {{
        'position' : 'absolute',
        'left' : 740,
        'top' : 10,
        'font-size' : 16,
        'fontFamily': 'Lora',
        'fontWeight' : 'normal',

      }}>
      <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"></link>
      Lista Wynikow:
      <br/>
        {this.state.listaWynikow.map((x, index) => {
          let czyWygranaTekst = ''
          if(x.czyWygrana === true){
            czyWygranaTekst = 'Tak'
          }
          if(x.czyWygrana === false){
            czyWygranaTekst = 'Nie'
          }
          return(
          <div style = {{
            'font-size' : 14,
            'fontFamily' : 'Lora',
            'fontWeight' : 'normal'
            // 'display' : 'flex',
            // 'msFlexDirection' : 'column',
            // 'justifyContent' : 'flex-end'
          }}>
            {/* Gracz nr {x.id}:
            <br/>
            Poziom zakonczenia gry : 
            <br/>
            {x.poziomZakonczenia},
            <br/>
            Wysokosc kwoty wygranej : 
            <br/>
            {x.kwotaWygrana},
            <br/>
            Wysokosc kwoty zagranej : 
            <br/>
            {x.kwotaZagrana},
            <br/>
            Wysokosc zysku : 
            <br/>
            {x.zysk},
            <br/>
            Czy gracz wygral? : 
            <br/>
            {czyWygranaTekst}
 */}

          <table
          style = {{
            // 'position' : 'relative',
            'width' : 590,
            'left' : 740,
            'top' : 10,
            'font-size' : 16,
            'fontFamily': 'Lora',
            'fontWeight' : 'normal'
          }}>
            <tr>
              <th>id</th>
              <th>poziom zakonczenia gry</th>
              <th>ile wygrano</th>
              <th>ile zagrano</th>
              <th>jaki zysk</th>
              <th>czy gracz wygral?</th>
            </tr>
            <tr>
              <th>{x.id}</th>
              <th>{x.poziomZakonczenia}</th>
              <th>{x.kwotaWygrana}</th>
              <th>{x.kwotaZagrana}</th>
              <th>{x.zysk}</th>
              <th>{czyWygranaTekst}</th>
            </tr>
          </table>
          </div>
        );
        })
        }
      </div>
    );
  }

  
  wyswietlListePrzycisow = () => {
    return(
      <div style = {{
        'width' : 450,
        'position' : 'absolute',
        'left' : 250,
        'top' : 100,
      }}>
        {this.state.listaPrzyciskow.map((x, index)=>  {
          let styleDisplay = {'display' : 'inline-block','width' : 150}
          if(index === 2 || index === 6 || index === 9){
            styleDisplay = {
              'display' : 'inline-block',
              'width' : 150
            }
          }
          return( 
            <div style = {styleDisplay} key = {x.id}>
              <button 
                disabled = {!x.czyAktywny}
                onClick = {() => this.nastepnyPoziom(index)}
                style = {{
                  'width': '100%',
                  'backgroundColor' : '#feee7d',
                  'border': 'none',
                  'padding' : 10,
                  'borderRadius' : 2,
                  'margin-top' : 10,      
                }}
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
        <button 
          onClick = {this.zakonczGre}
          style = {{
          'backgroundColor' : '#ffdb4d',
          'border': 'none',
          'color': '#6b6b6b',
          'padding': 10,
          'position' : 'absolute',
          'left' : 127,
          'top' : 230
        }}>KONIEC</button>
  
      );
    }
  }
  wyswietlPrzyciskStart = () => {
    if(this.state.czyGraRozpoczeta === 0){
      return(
        <button 
        onClick = {this.rozpocznijGre}
        style = {{
          'backgroundColor' : '#ffdb4d',
          'border': 'none',
          'color': '#6b6b6b',
          'padding': 10,
          'position' : 'absolute',
          'left' : 127,
          'top' : 230
        }}>START</button>
      );
    }
  }
  rozpocznijGre = () => {
    if(this.state.wartoscInputa === ''){
      this.setState({
        komunikatBledu: 'podaj wartosc',
        czyGraRozpoczeta: 0,
        poziomAktywny : 0
      })
    }else{
      // nowaListaPrzyciskow.forEach((item, index) => {
        // nowaListaPrzyciskow[index].tekstPrzycisku = '*'
      // })
      let nowaListaPrzyciskow = this.state.listaPrzyciskow.slice()
      nowaListaPrzyciskow.forEach((item, index) =>{
        if(index < 3){
          nowaListaPrzyciskow[index].czyAktywny=true
        }
      })
      this.setState({
        czyGraRozpoczeta : 1,
        poziomAktywny : 1,
        czyWygrana : 0,
        listaPrzyciskow : nowaListaPrzyciskow,
        wartoscInputa: '',
      })
    } 
  }
  zakonczGre = () => {
    let nowaListaPrzyciskow = this.state.listaPrzyciskow.slice()
    nowaListaPrzyciskow.forEach((item, index) => {
      nowaListaPrzyciskow[index].tekstPrzycisku = '*'
      nowaListaPrzyciskow[index].czyAktywny= false
    })
    let Idd = this.state.numerId + 1
    let nowaListaWynikow = this.state.listaWynikow.slice()
    let okreslenieWygranej = () => {
      if(this.state.czyWygrana === 1){
        return (
          false
        );
      }else{
        return (
          true
        );
      }
    }
    console.log(okreslenieWygranej())
    nowaListaWynikow.push({
          id: this.state.numerId,
          poziomZakonczenia : this.state.poziomAktywny,
          kwotaZagrana : parseFloat(this.state.przechowywanieZInputa),
          kwotaWygrana: this.state.kwotaWygranej,
          zysk: parseFloat(this.state.kwotaWygranej - 
          parseFloat(this.state.przechowywanieZInputa)),
          czyWygrana: okreslenieWygranej(),
          data: moment().format('LLLL')
    })
    this.setState({
      czyGraRozpoczeta: 0,
      poziomAktywny: 0,
      czyWygrana : 0,
      listaWynikow : nowaListaWynikow,
      listaPrzyciskow : nowaListaPrzyciskow,
      numerId : Idd
    })
  }
  nastepnyPoziom = (kliknietyIndex) => {
    console.log(kliknietyIndex)
    let czyPrzegrana = Math.random() < 0.25
    if(czyPrzegrana === true){
      let nowaListaPrzyciskow = this.state.listaPrzyciskow.slice()
      nowaListaPrzyciskow.forEach((item, index) => {
        nowaListaPrzyciskow[index].czyAktywny = false;
        // nowaListaPrzyciskow[index].tekstPrzycisku = '*'
      })
      nowaListaPrzyciskow[kliknietyIndex].tekstPrzycisku = '-'
      this.setState ({
        czyWygrana : 1,
        listaPrzyciskow : nowaListaPrzyciskow
      })
    }else{
      let nowyStan = this.state.poziomAktywny + 1
      let nowaListaPrzyciskow = this.state.listaPrzyciskow.slice()
      // nowaListaPrzyciskow[kliknietyIndex].tekstPrzycisku = '`'
      nowaListaPrzyciskow.forEach((item, index) => {
        let poczatek = 3*(nowyStan - 1)
        let koniec = poczatek + 2
        if(index >= poczatek && index <= koniec){
          nowaListaPrzyciskow[index].czyAktywny=true
          let nowaListaPrzyciskow2 = this.state.listaPrzyciskow.slice()
              nowaListaPrzyciskow2.forEach((item, index) => {
              let wartoscWygranej = nowaListaPrzyciskow2[kliknietyIndex].tekstPrzycisku
                this.setState({
                  kwotaWygranej : wartoscWygranej
                })
                })
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
  sprawdzenieInputa = (event) => {
    let wartoscZInupta = event.target.value
    if(wartoscZInupta === '' || isNaN(wartoscZInupta)){
      let nowyTekstNaPrzyciskach = this.state.listaPrzyciskow.slice()
      nowyTekstNaPrzyciskach.forEach((x, index) => {
        nowyTekstNaPrzyciskach[index].tekstPrzycisku = '*'
      })
      this.setState({
        komunikatBledu : 'musisz wprowadzic liczbe',
        listaPrzyciskow : nowyTekstNaPrzyciskach,
        wartoscInputa : wartoscZInupta
      })
    }else{
      let nowyTekstNaPrzyciskach = this.state.listaPrzyciskow.slice()
      nowyTekstNaPrzyciskach.forEach((x, index) => {
        let aktualnyPoziom = (parseInt(index / 3) + 1)
        let nowaLiczba = (aktualnyPoziom * (1.3 * parseFloat(wartoscZInupta)))
        let nowaLiczbaZaokraglona = Math.round(nowaLiczba * 100) / 100
        nowyTekstNaPrzyciskach[index].tekstPrzycisku = nowaLiczbaZaokraglona
      })
      this.setState ({
        komunikatBledu : '',
        listaPrzyciskow : nowyTekstNaPrzyciskach,
        wartoscInputa: wartoscZInupta
        
      })
    }
    if(this.state.czyGraRozpoczeta === 0){
      let wartoscInputaPoKliknieciuStart = event.target.value
      this.setState({
        przechowywanieZInputa : wartoscInputaPoKliknieciuStart
      })

    }
  }
  wyswietlKomunikatBledu = (event) => {
    return(
      <div>
      <input 
      onChange = {this.sprawdzenieInputa} 
      value = {this.state.wartoscInputa}
      style = {{
        'border' : 'none',
        'background-color' : '#feee7d',
        'color' : '#6b6b6b',
        // 'margin' : 10,
        'height' : 30,
        'text-align' : 'center',
        'position' : 'absolute',
        'left' : 20,
        'top' : 170
      }}
      placeholder = 'wprowadz liczbe :)'
      />
      {this.state.komunikatBledu}
      </div>
    );
  }
  render(){
    return(
      <div>
        {/* {this.wyswietlPrzyciski()} */}
        {this.wyswietlPowitanie()}
        {this.wyswietlKomunikatBledu()}
        {this.wyswietlPrzyciskStart()}
        {this.wyswietlPrzyciskKoniec()}
        {this.wyswietlKomunikatWygrana()}
        {this.wyswietlListePrzycisow()}
        {this.wyswietlListeWynikow()}
        <div style = 
        {{ 'font-size' : 10, 'position': 'absolute', 'right' : 5, 'bottom' :2, 'color': '#CCC'}}>
          {this.state.wersjaGry}
        </div>
      </div>
    );
  }
}

export default App;
