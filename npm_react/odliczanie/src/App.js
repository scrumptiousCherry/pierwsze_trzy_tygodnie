import React, { Component } from 'react';
var moment = require('moment');
moment().format();


class App extends Component {
  constructor(){
    super()
    this.state ={
      czasFinalny : moment().add(15,'minutes'),
      pozostaloTekst : ''
    }
  }
  odliczanie = () =>{
    // tworzenie obecnego czasu
    let czasTeraz = moment()
    // odejmowanie od czasu ostatecznego czasu obecnego
    let ileGodzinZostalo = this.state.czasFinalny.diff(czasTeraz, 'hours')
    let ileMinutZostalo = this.state.czasFinalny.diff(czasTeraz, 'minutes')
    let ileSekundZostalo = this.state.czasFinalny.diff(czasTeraz, 'seconds')
    let ileMilisekundZostalo = this.state.czasFinalny.diff(czasTeraz,)
    // console.log(ileGodzinZostalo, ileMinutZostalo, ileSekundZostalo, ileMilisekundZostalo) 
    // zamiana liczb na jednostki czasu
    let pozostaloGodzin = ileGodzinZostalo
    let pozostaloMinut = ileMinutZostalo - ileGodzinZostalo *60
    let pozostaloSekund = ileSekundZostalo - ileMinutZostalo *60
    let pozostaloMiliSekund = ileMilisekundZostalo - ileSekundZostalo *1000
    let sumaCzasuPozostalego = ''
    if(pozostaloGodzin >1){
      sumaCzasuPozostalego += `${pozostaloGodzin}h:`
    }
    if(pozostaloMinut >1){
      sumaCzasuPozostalego += `${pozostaloMinut}m:`
    }
    if(pozostaloSekund >1){
      sumaCzasuPozostalego += `${pozostaloSekund}s:`
    }
    if(pozostaloMiliSekund >1){
      sumaCzasuPozostalego += `${pozostaloMiliSekund}ms`
    }
    // let sumaCzasuPozostalego = `${pozostaloGodzin}h : ${pozostaloMinut}m: 
    // ${pozostaloSekund}s: ${pozostaloMiliSekund}ms`
    // console.log(pozostaloGodzin, pozostaloMinut, pozostaloSekund, pozostaloMiliSekund)  
    this.setState({
      pozostaloTekst : sumaCzasuPozostalego
    }) 
  }
  componentDidMount(){
    this.odpalenieIntervala()
  }
  odpalenieIntervala = () => {
    setInterval(this.odliczanie, 100)
  }
  render() {
    return (
      <div>
        {/* {this.state.czasFinalny.format('h:mm:ss:ms')} */}
        Pozostalo czasu: <br/>
        {this.state.pozostaloTekst} 
        <br/> do konca
        {/* {this.odpalenieIntervala()} */}
      </div>
    );
  }
}

export default App;
