import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';
import { shallow } from 'enzyme'

// it('pierwszy test', () => {
//   let zmienna = 10;
//   expect(zmienna).to.equal(10)
// });

// it("Aplikacja ma sie uruchomic bez bledow", () => {
//   shallow(<App />)
// })

// it("Sprawdzam czy aplikacja ma h2", () => {
//   let app = shallow(<App />)
//   let h1_tekst = app.find('.App-title').text();
//   expect(h1_tekst).to.equal("Welcome to React")
// })

// it('po kliknieciu powinnien byc inny stan', () => {
//   let app = shallow(<App />)
//   expect(app.state('tekstTestowy')).to.equal("")

//   let przycisk = app.find('.przycisk-testowy').first()
//   przycisk.simulate('click')
//   expect(app.state('tekstTestowy')).to.equal("Nowy tekst")
  
//   let naglowekh2 = app.find('h2').first()
//   expect(naglowekh2.text()).to.equal("Nowy tekst")
// })

// it("POMOC: zmiana w tablicy", () => {
//   let listeZakupowStart = [];
//   let listeZakupowKoniec = [
//     { nazwaProduktu: "abc", cena: 100 }
//   ]
//   listeZakupowStart.push({
//     nazwaProduktu: "abc", cena: 100 
//   })
//   expect(listeZakupowStart.length).to.equal(listeZakupowKoniec.length)
// })

// it('chcemy aby stan aplikacji byl jaki z wykorzystaniem fn', () => {
//   let app = shallow(<App />)
//   expect(app.state('listeZakupow')).to.exist
//   expect(app.state('listeZakupow').length).to.equal(0)
  
//   let input = app.find('.lista-zakupow input').first()
//   input.simulate("change", { target: {value: "nowy tekts"}})
//   expect(app.state('wartoscInputa')).to.equal("nowy tekts")

//   let przycisk = app.find('.lista-zakupow button').first()
//   przycisk.simulate('click')
//   expect(app.state('listeZakupow').length).to.equal(1)
// })




// it("Aplikacja ma sie uruchomic bez bledow", () => {
//   shallow(<App />)
// })
// it("kliknij przycisk dodaj", () => {
//     let app = shallow(<App />)
//     let przycisk = app.find('.lista-zakupow button').first()
//     przycisk.simulate('click')
//     expect(app.state('listeZakupow').length).to.equal(0) 
// })


describe('kurs z lista', () => {
    it('funkcja concat', () =>{
      let given = [1,5]
      let when = given.concat(6)
      let then = [1,5,6]
      expect(when).to.members(then)
    })
      // let Lista = [1,3,4]
      // let noweElementy = Lista.concat(2,[7,8,9])
      it('dodawanie listy do listy', () =>{
        let given = [1,3,4]
        let when = given.concat(2,[7,8,9])
        let then = [1,2,3,4,7,8,9]
        expect(when).to.members(then)
      })
      it('lista2', () => {
        let given = [1,2,3,4]
        let when = [1,2,3]
        expect(given).to.includes.members(when) 
      })
    //   let ludzie = [
    //     {name : Wiki},
    //     {name : Zenek}
    //   ]
    //   let ludzie2 = [
    //     {name: Robert},
    //     {name : Anetka}
    //   ]
    //   ludzie.concat(ludzie2).forEach(function (person){
    //   console.log
    // })
    it('funkcja concat z ludzmi',() => {      
      let given = [
        {name : 'Wiki'},
        {name : 'Zenek'}
      ]
      let when = (
        given.concat(
        {name: 'Robert'},
        {name : 'Anetka'})
        )
      let then = [
        {name : 'Wiki'},
        {name : 'Zenek'},
        {name: 'Robert'},
        {name : 'Anetka'}
      ]
      expect(when).to.deep.equal(then)
    })

    // let names = ['Shane', 'Alan', 'Osbourne'];
    // console.log(names[0] + ' ' + names[1] + ' ' + names[2])
    it('imiona z indeksami', () => {
      let given = ['Shane', 'Alan', 'Osbourne']
      let when = [given[0] + ' ' + given[1] + ' ' + given[2]]
      let then = ['Shane Alan Osbourne']
      expect(when).to.members(then)
    })

    // let names = ['Shane', 'Osbourne'];
    // console.log(names.join(' '))
    it('imiona z joinem', () => {
      let given = ['Shane', 'Osbourne'];
      let when = given.join(' ')
      let then = 'Shane Osbourne'
      expect(when).to.equal(then)
    })

    // let help = [
    //   'Usage',
    //   '   foo-app <input>'
    // ];
    // if(ProcessingInstruction.argv[2] === 'help'){
    //   console.log(help.join('/n'));
    // }
    it('funkcja z help', () => {
      let given = [
        'Usage',
        '   foo-app <input>'
      ];
      let when = (
        given.join('/n')
      )
      let then = (
        'Usage' + '/n' +
        '   foo-app <input>'
      )
      expect(when).to.equal(then)
    })

  //   it('mapa pomoc', () => {
  //   let name = ['shane', 'osbourne']
  //   let upper = name
  //     .map ((x) => {
  //       return( 
  //         x.charAt(0).toUpperCase() + x.slice(1)
  //       );
  //     })
  //     .join(' ')
  //   console.log(upper)
  // })
    it('map', () => {
      let given = ['shane', 'osbourne']
      let when = (given
        .map ((x) => {
          return( 
            x.charAt(0).toUpperCase() + x.slice(1)
          );
        })
        .join(' ')
      )
      let then = ('Shane Osbourne')
    expect(when).to.equal(then)
    })
    // let family = ['Shane', 'Sally', 'Isaac', 'Kittie']
    // console.log(family.indexOf('Kittie'))
    it('index Kittie', () =>{
      let given = ['Shane', 'Sally', 'Isaac', 'Kittie']
      let when = (given.indexOf('Kittie'))
      let then = 3
      expect(when).to.equal(then)
    })
    it('index Kittie2', () =>{
      let given = ['Shane', 'Sally', 'Isaac']
      let when = (given.indexOf('Kittie'))
      let then = -1
      expect(when).to.equal(then)
    })
    // let family = ['Shane', 'Sally', 'Isaac', 'Kittie']
    // let KittieExists = (given.indexOf('Kittie')) > -1
    // console.log(KittieExists)
    it('czy Kittie istnieje - TAK', () => {
      let given = ['Shane', 'Sally', 'Isaac', 'Kittie']
      let when = ((given.indexOf('Kittie')) > -1)
      let then = true
      expect(when).to.equal(then)
    })
    it('czy Kittie istnieje - NIE', () => {
      let given = ['Shane', 'Sally', 'Isaac']
      let when = ((given.indexOf('Kittie')) > -1)
      let then = false
      expect(when).to.equal(then)
    })
    // let family = ['Shane', 'Sally', 'Isaac', 'Kittie']
    // let KittieExists = (given.indexOf('Kittie')) > -1
    // if(!KittieExists) {
    //   family.push('Kittie');
    // }
    // console.log(family)
    it('dodaj Kittie jesli nie istnieje', () => {
      let given = ['Shane', 'Sally', 'Isaac', 'Kittie']
      //when
      if((given.indexOf('Kittie')) === -1){
        given.push('Kittie')
      }
      let then = ['Shane', 'Sally', 'Isaac', 'Kittie']
      expect(given).to.members(then)
    
    })
    it('dodaj Kittie jesli nie istnieje2', () => {
      let given = ['Shane', 'Sally', 'Isaac']
      //when
      if((given.indexOf('Kittie')) === -1){
        given.push('Kittie')
      }
      let then = ['Shane', 'Sally', 'Isaac', 'Kittie']
      expect(given).to.members(then)
    })  
      it('czy Kittie istnieje - NOPE', () => {
        let given = ['Shane', 'Kittie', 'Sally', 'Isaac']
        let when = ((given.indexOf('Kittie',2)))
        let then = -1
        expect(when).to.equal(then)
    })
    
    it('czy Kittie istnieje - MHM', () => {
      let given = ['Shane', 'Kittie', 'Sally', 'Isaac']
      let when = ((given.indexOf('Kittie',1)))
      let then = 1
      expect(when).to.equal(then)
  })
  // it('testpomocniczy', () => {
  //   let whitelist = ['.css','.js']
  //   let events = [
  //     {file: 'css/core.css'},
  //     {file: 'js/app.js'},
  //     {file: 'index.html'}
  //   ]
  //   let filtered = events.filter( event => {
  //     let ext = require('path').extname(event.file)
  //     return whitelist.indexOf(ext) > -1;
  //   });
  //   console.log(filtered)
  // })

  it('szukanie rozszerzenia', () => {
    let given = [
      {file: 'css/core.css'},
      {file: 'js/app.js'},
      {file: 'index.html'}
    ]
    let when = (
        given.filter( event => {
        let whitelist = ['.css','.js']
        let ext = require('path').extname(event.file)
        return whitelist.indexOf(ext) > -1;
      })
    )
    let then = [
      { file: 'css/core.css' }, { file: 'js/app.js' }
    ]
    expect(when).to.deep.equal(then)
  })
})

