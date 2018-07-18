import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AppPurpleRain extends Component {
  constructor(){
    super();
    this.state = {
      krople: []
    }
  }

  componentDidMount() {
    let losoweKrople = [];

    // losowanie kropli oraz ich pozycji
    for(let i = 0; i < 100; i++){
      let left = (i * 12) + Math.random() * 10;
      let top = Math.random() * 500;
      losoweKrople.push({
        top: top,
        left: left 
      })
    }

    this.setState({
      krople: losoweKrople
    });

    window.setInterval( () => {
      console.log('minelo 1000ms')
      // tutaj mozna bylo by zmienic pozycje kropel w czasie
    }, 1000)
  }



  render() {
    return (
      <div className="App">
        <h1>Purple rain</h1>
        <div className={'lista-kropli'}>
        {
          this.state.krople.map( (elementZListy) => {
            return (
              <div className={'kropla'}
              style={{
                'position': 'absolute',
                'top': elementZListy.top,
                'left': elementZListy.left,
                'background': "blue",
                'height': 40,
                'width': 2
              }}></div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

class AppListaZakupow extends Component {
  constructor(){
    super();
    this.state = {
      tektsZInputa: "",
      listaZakupow: [
        {
          czyZaznaczone: true,
          tekst: "Skrobia ziemniaczana"
        },
        {
          czyZaznaczone: true,
          tekst: "Twarog 400g"
        },
        {
          czyZaznaczone: false,
          tekst: "worki na smieci"
        },
      ]
    }
  }

  dodajDoListy = () => {
    let tekstOdczytanyZInputa = this.state.tektsZInputa
    let nowaLista = [
      ...this.state.listaZakupow,
      {
        czyZaznaczone: false,
        tekst: tekstOdczytanyZInputa
      }
    ]
    this.setState({
      listaZakupow: nowaLista 
    })
  }

  zmianaWInpucie = (event) => {
    let odczytanyTektsZInputa = event.target.value;
    this.setState({
      tektsZInputa: odczytanyTektsZInputa
    })
  }


  render() {
    return (
      <div className="App">

        <h1>LISTA ZAKUPOW</h1>

        <div className={'dodawanie'}>
          <input 
            type={'text'} 
            onChange={this.zmianaWInpucie}
            placeholder={"Napisz tutaj tekst aby dodac do listy zakupow"}/>
          <button onClick={this.dodajDoListy}>Dodaj do listy</button>
        </div>

        <div className={'lista-wrapper'}> 
        {
          this.state.listaZakupow.map( (elementZListy) => {
            let styleDlaH2 = {
              'display': 'inline-block'
            };
            if(elementZListy.czyZaznaczone){
              styleDlaH2['text-decoration'] = 'line-through';
            }
            return (
              <div className={'lista-item'}>
              <input
                style={{ 'display': 'inline-block' }} 
                type={"checkbox"}/>
              <h2 style={styleDlaH2}>
                {elementZListy.tekst}
              </h2>
              <button>X</button>
            </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default AppListaZakupow;
