import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';
import { shallow } from 'enzyme'
import { copyFile } from 'fs';

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
        let czyUsunacZListy = whitelist.indexOf(ext) > -1;
        return czyUsunacZListy
      })
    )
    let then = [
      { file: 'css/core.css' }, { file: 'js/app.js' }
    ]
    expect(when).to.deep.equal(then)
  })

  // it('testPomocniczy', () => {
  //   let Items = [1,2,3,4,5]
  //   let copy = Items.slice()
  //   console.log(copy)
  // })
  it('test z slice', () => {
    let given = [1,2,3,4,5]
    let when = given.slice()
    let then = [1,2,3,4,5]
    expect(when).to.members(then)
  })
  //  it('testPomocniczy', () => {
  //   let Items = [1,2,3,4,5]
  //   let copy = Items.slice()
  //   copy.push(6)
  //   console.log(Items)
  //   console.log(copy)
  // })
  it('test z slice2', () => {
    let given = [1,2,3,4,5]
    let when = given.slice()
    when.push(6)
    let then = [1,2,3,4,5,6]
    expect(then).to.includes.members(when)
  })
  // it('testPomocniczy', () => {
    //   let Items = [1,2,3,4,5]
    //   let copy = Items.slice()
    //   copy.push(6)
    // copy[0] = 100
    //   console.log(Items)
    //   console.log(copy)
    // })
  it('test z slice3', () => {
    let given = [1,2,3,4,5]
    let when = given.slice()
    when.push(6)
    when[0] = 100
    let then = [100,2,3,4,5,6]
    expect(then).to.includes.members(when)
  })
  it('test z slice i person', () => {
    let person = {name : 'Shane'}
    let given = [1, person]
    let when = given.slice()
    let then = [1, {name : 'Shane'}]
    expect(when).to.deep.equal(then)
  })
  it('test z slice, person i zmianą imienia', () => {
    let person = {name : 'Shane'}
    let given = [1, person]
    let when = given.slice()
    when[1].name = 'Sally'
    let then = [1, {name : 'Sally'}]
    expect(when).to.deep.equal(then)
  })
  it('test z slice wyznaczajac poczatek i koniec', () => {
    let given = [1,2,3,4,5]
    let when = given.slice(0,1)
    let then = [1]
    expect(when).to.members(then)
  })
  it('test z slice wyznaczajac poczatek i koniec2', () => {
    let given = [1,2,3,4,5]
    let when = given.slice(0,2)
    let then = [1,2]
    expect(when).to.members(then)
  })
  it('test z slice wyznaczajac sam poczatek', () => {
    let given = [1,2,3,4,5]
    let when = given.slice(0)
    let then = [1,2,3,4,5]
    expect(when).to.members(then)
  })
  it('test z slice wyznaczajac sam ujemny poczatek', () => {
    let given = [1,2,3,4,5,6,7,8]
    let when = given.slice(-1)
    let then = [8]
    expect(when).to.members(then)
  })
  it('test z slice wyznaczajac poczatek i ujemny koniec', () => {
    let given = [1,2,3,4,5,6,7,8]
    let when = given.slice(1, -1)
    let then = [2,3,4,5,6,7]
    expect(when).to.members(then)
  })
  // it('test pomocniczy', () => {
  //   let person = {name : 'shane-osbourne'}
  //   let filters = {
  //     'deslugify' : x => x.replace('-',' '),
  //     'uppercase' : x => x.toUpperCase()
  //   }
  //   let input = 'name | deslugify | uppercase'
  //   let sections = input.split('|').map( x => x.trim())
  //   console.log(sections)
  // })
  it('test sections', () => {
    let given = 'name | deslugify | uppercase'
    let when = given.split('|').map( x => x.trim())
    let then = [ 'name', 'deslugify', 'uppercase' ]
    expect(when).to.members(then)
  })
  // it('test pomocniczy', () => {
  //     let person = {name : 'shane-osbourne'}
  //     let filters = {
  //       'deslugify' : x => x.replace('-',' '),
  //       'uppercase' : x => x.toUpperCase()
  //     }
  //     let input = 'name | deslugify | uppercase'
  //     let sections = input.split('|').map( x => x.trim())
  //     let ref = person[sections[0]]
  //     console.log(ref)
  //   })
    it('test shane-osbourne', () => {
      let given = {name : 'shane-osbourne'}
      let filters = {
        'deslugify' : x => x.replace('-',' '),
        'uppercase' : x => x.toUpperCase()
      }
      let input = 'name | deslugify | uppercase'
      let sections = input.split('|').map( x => x.trim())
      let when = given[sections[0]]
      let then = 'shane-osbourne'
      expect(when).to.equal(then)
    })

    it('test pomocniczy z slice i reduce', () => {
          let person = {name : 'shane-osbourne'}
          let filters = {
            'deslugify' : x => x.replace('-',' '),
            'uppercase' : x => x.toUpperCase()
          }
          let input = 'name | deslugify | uppercase'
          let sections = input.split('|').map( x => x.trim())
          let ref = person[sections[0]]
          let output = sections
          .slice(1)
          .reduce((prev, next) => {
            if(filters[next]){
              return filters[next].call(null, prev); 
            }
            return prev;
          }, ref)
          // console.log(output)
        })
        // it('test pomocniczy', () =>{
        //   let items = ['Shane','Sally','Isaac']
        //   items.sort()
        //   console.log(items)
        // })
        it('sortowanie alfabetyczne', () =>{
          let given = ['Shane','Sally','Isaac']
          let when = given.sort()
          let then = [ 'Isaac', 'Sally', 'Shane' ]
          expect(when).to.members(then)
        })
        it('sortowanie numery sprowadzone do stringa', () =>{
          let given = [10,20,2,30]
          let when = given.sort()
          let then = [10, 20, 2, 30]
          expect(when).to.members(then)
        })
        // it('test pomocniczy', () =>{
        //   let items = [10,20,2,30]
        //   items.sort((a,b) => a - b)
        //   console.log(items)
        // })
        it('sortowanie numerow od najmniejszego do najwiekszego', () =>{
          let given = [10,20,2,30]
          let when =  given.sort((a,b) => a - b)
          let then = [2, 10, 20, 30]
          expect(when).to.members(then)
        })// it('test pomocniczy', () =>{
          //   let items = [10,20,2,30]
          //   items.sort((a,b) => b - a)
          //   console.log(items)
          // })
    it('sortowanie numerow od najwiekszego do najmniejszego', () =>{
      let given = [10,20,2,30]
      let when =  given.sort((a,b) => b - a)
      let then = [30, 20, 10 ,2]
      expect(when).to.members(then)
    })
    // it('test pomocniczy', () =>{
    //   let items = ['Shane', 'Sally','Kittie', 'Isaac']
    //   items.sort((a,b) => b.length - a.length)
    //   console.log(items)
    // })
    it('sortowanie imion od najwiekszej do najmniejszej liczby liter', () =>{
      let given = ['Shane', 'Sally','Kittie', 'Isaac']
      let when =  given.sort((a,b) => b.length - a.length)
      let then = [ 'Kittie', 'Shane', 'Sally', 'Isaac' ]
      expect(when).to.members(then)
    })
    // it('test pomocniczy', () => {
    //   let lessons = [
    //   {
    //     title : 'Javascript concat',
    //     views: 1000
    //   },
    //   {
    //     title : 'Javascript slice',
    //     views : 1050
    //   },
    //   {
    //     title : 'Javascript join',
    //     views : 1025
    //   }
    // ]
    // let list = lessons
    // .sort((a,b) => b.views - a.views)
    // .map(x => `    <li>${x.title} (${x.views})</li>`)
    // .join('/n')
    // let output = `<ul>/n${list}/n</ul>`
    // console.log(output)
    // })
    it('filtrowanie wyswietlen z wartosc zawartej w arrayu', () => {
      let given = [
      {
        title : 'Javascript concat',
        views: 1000
      },
      {
        title : 'Javascript slice',
        views : 1050
      },
      {
        title : 'Javascript join',
        views : 1025
      }
    ]
    let list = given
    .sort((a,b) => b.views - a.views)
    .map(x => `    <li>${x.title} (${x.views})</li>`)
    .join('/n')
    let when = `<ul>/n${list}/n</ul>`
    let then = '<ul>/n    <li>Javascript slice (1050)</li>/n    <li>Javascript join (1025)</li>/n    <li>Javascript concat (1000)</li>/n</ul>'
    expect(when).to.equal(then)  
  })
  // it('test pomocniczy', () => {
  //   let items = [1,2,3,4,5]
  //   let filtered = items.filter(x => x > 3)
  //   console.log(filtered)
  // })
  it('przefiltorwanie liczb wiekszych od 3', () => {
    let given = [1,2,3,4,5]
    let when = given.filter(x => x > 3)
    let then = [4,5]
    expect(when).to.members(then)
  })
    // it('test pomocniczy', () => {
    //   let items = [1,2,3,4,5]
    //   let filtered = items.filter(x => x > 3)
    // console.log(items)  
    // console.log(filtered)
    // })
    it('przefiltorwanie liczb wiekszych od 3 i wyswietlenie items', () => {
      let given = [1,2,3,4,5]
      let when = given.filter(x => x > 3)
      let then = [1,2,3,4,5]
      expect(then).to.include.members(when)
    })
    // it('test pomocniczy', () => {
    //   let people = [
    //     {
    //       name: 'Shane',
    //       pets : ['cat', 'dog']
    //     },
    //     {
    //       name: 'Simon',
    //       pets: ['horse']
    //     },
    //     {
    //       name: 'Ben',
    //       pets: []
    //     }
    //   ]
    //   let filtered = people.filter(x => x.pets.length)
    //   console.log(filtered)
    // })
    it('przefiltrowanie zwierząt z użyciem length', () => {
      let given = [
        {
          name: 'Shane',
          pets : ['cat', 'dog']
        },
        {
          name: 'Simon',
          pets: ['horse']
        },
        {
          name: 'Ben',
          pets: []
        }
      ]
      let when = given.filter(x => x.pets.length)
      let then = [ { name: 'Shane', pets: [ 'cat', 'dog' ] },
      { name: 'Simon', pets: [ 'horse'] } ]
      expect(when).to.deep.equal(then)
    })
    it('przefiltrowanie zwierząt', () => {
      let given = [
        {
          name: 'Shane',
          pets : ['cat', 'dog']
        },
        {
          name: 'Simon',
          pets: ['horse']
        },
        {
          name: 'Ben'
        }
      ]
      let when = given.filter(x => x.pets)
      let then = [ { name: 'Shane', pets: [ 'cat', 'dog' ] },
      { name: 'Simon', pets: [ 'horse'] } ]
      expect(when).to.deep.equal(then)
    })
    // it('test pomocniczy', () =>{
    //   let lessons = [
    //     {
    //       title : 'Javascript - join',
    //     views: 960,
    //     tags: ['array', 'join']
    //   },
    //   {
    //     title : 'Javascript - concat',
    //     views: 1050,
    //     tags: ['array', 'concat']
    //   },
    //   {
    //     title : 'Javascript - slice', 
    //     views: 2503,
    //     tags: ['array', 'slice']
    //   },
    //   {
    //     title : 'Javascript - bind', 
    //     views: 2500,
    //     tags: ['functions', 'bind']
    //   }
    //   ]
    //   let minViews = 1000
    //   let searchTerm = 'array'
      
    //   let filtered = lessons 
    //   .filter(x => x.tags.indexOf(searchTerm) > -1)
    //   .filter(x => x.views > minViews)
    //   .sort((a,b) => b.views - a.views)
    //   .map(x => `  <li>${x.title}</li>`)
    //   .join('\n')
    //   console.log(`<ul>
    //   ${filtered}
    //   </ul>`)
    // })
    it('przefiltrowanie filow pod wzgledem tagow i liczby wyswietlen', () =>{
      let given = [
        {
          title : 'Javascript - join',
        views: 960,
        tags: ['array', 'join']
      },
      {
        title : 'Javascript - concat',
        views: 1050,
        tags: ['array', 'concat']
      },
      {
        title : 'Javascript - slice', 
        views: 2503,
        tags: ['array', 'slice']
      },
      {
        title : 'Javascript - bind', 
        views: 2500,
        tags: ['functions', 'bind']
      }
      ]
      let minViews = 1000
      let searchTerm = 'array'
      
      let wnetrzeUl = given 
      .filter(x => x.tags.indexOf(searchTerm) > -1)
      .filter(x => x.views > minViews)
      .sort((a,b) => b.views - a.views)
      .map(x => `  <li>${x.title}</li>`)
      .join('\n')
      let when = `<ul>${wnetrzeUl}</ul>`
      let then = `<ul>  <li>Javascript - slice</li>\n  <li>Javascript - concat</li></ul>`
      expect(when).to.equal(then)
    })

    // it('test pomocniczy', () => {
    //   let items = [1,2,3,4,5]
    //   let hasThree = items.some(x => (x === 3))
    //   console.log(hasThree)
    // })
    it('ma trzy', () => {
      let given = [1,2,3,4,5]
      let when = given.some(x => (x === 3))
      let then = true
      expect(when).to.equal(then)
    })   
    // it('test pomocniczy', () => {
      //   let items = [1,2,3,4,5]
      //   let hasThree = items.some(x => (x === 3))
      //   console.log(hasThree)
      // })       
    it('czy ma szesc', () => {
      let given = [1,2,3,4,5]
      let when = given.some(x => (x === 6))
      let then = false
      expect(when).to.equal(then)
    }) 
    // it('test pomocniczy', () =>{
    //   let tasks = [
    //     {
    //       title: 'Do laundry',
    //       completed: true
    //   },
    //   {
    //     title: 'Feed the cat',
    //     completed: false
    //   },
    //   {
    //     title: 'Watch the course',
    //     completed: true
    //   }
    //   ]
    //   let list = document.querySelector('.task-list')
    //   list.classList.add(
    //     tasks.some(tasks => task.completed === false)
    //     ? 'task-list-uncompleted'
    //     : 'task-list-completed'
    //   )
    //   list.innerHTML = tasks
    //   .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
    //   .map(x => `<li>${x}</li>`)
    //   .join(' ')
    //   console.log(tasks)
    //   console.log(list)
    // })
    // it('test pomocniczy2', () =>{
    //     let tasks = [
    //       {
    //         title: 'Do laundry',
    //         completed: true
    //     },
    //     {
    //       title: 'Feed the cat',
    //       completed: false
    //     },
    //     {
    //       title: 'Watch the course',
    //       completed: true
    //     }
    //   ]
    //   function addTasks(title) {
    //     tasks.push({title: title, completed: false})
    //   }
    //   addTasks('Feed the dog')
    //   console.log(tasks)
    //   }) 
    it('dodawanie zadan', () =>{
        let given = [
          {
            title: 'Do laundry',
            completed: true
        },
        {
          title: 'Feed the cat',
          completed: false
        },
        {
          title: 'Watch the course',
          completed: true
        }
      ]
      function addTasks(title) {
        given.push({title: title, completed: false})
      }
      addTasks('Feed the dog')
      let when = addTasks
      let then = [ 
        { 
          title: 'Do laundry',
          completed: true 
        },
        { 
          title: 'Feed the cat', 
          completed: false 
        },
        { 
          title: 'Watch the course', 
          completed: true 
        },
        { title: 'Feed the dog',
          completed: false 
        } 
      ]
    expect(then).to.deep.equal(given)  
    })

      it('dodawanie zadan', () =>{
        let given = [
          {
            title: 'Do laundry',
            completed: true
        },
        {
          title: 'Feed the cat',
          completed: false
        },
        {
          title: 'Watch the course',
          completed: true
        }
      ]
      // tu jest when
      function addTasks(title) {
        if(given.some(x => x.title === title)){
          return
        }
        given.push({title: title, completed: false})
      }
      addTasks('Feed the cat')
      let then = [ 
        { 
          title: 'Do laundry',
          completed: true 
        },
        { 
          title: 'Feed the cat', 
          completed: false 
        },
        { 
          title: 'Watch the course', 
          completed: true 
        } 
      ]
    expect(then).to.deep.equal(given)  
    })
  // it('test pomocniczy', () => {
  //   let pets = ['cat', 'kitty']
  //   pets.push('dog')
  //   console.log(pets)
  // })
  it('dodawanie elementow za pomoca push', () => {
    let given = ['cat', 'kitty']
    given.push('dog')
    let then = [ 'cat', 'kitty', 'dog' ]
    expect(given).to.members(then)
  })
  // it('test pomocniczy', () =>{
  //   let items = [1,2,3,4,5]
  //   let mapped = items.map(function(item) {
  //     return item *2;
  //   })
  //   console.log(mapped)
  // })
  it('zmienianie zawartosci za pomoca map (*2)', () =>{
    let given = [1,2,3,4,5]
    let when = given.map(function(item) {
      return item *2;
    })
    let then = [2,4,6,8,10]
    expect(when).to.members(then)
  })
  it('zmienianie zawartosci za pomoca map - UNDEFINED', () =>{
    let given = [1,2,3,4,5]
    let when = given.map(function(item) {
    })
    let then = [undefined, undefined, undefined, undefined, undefined]
    expect(when).to.members(then)
  })
  it('zmienianie stringow na liczby za pomoca map', () =>{
    let given = ['1','2','3','4','5']
    let when = given.map(function(item) {
      return Number(item)
    })
    let then = [1,2,3,4,5]
    expect(when).to.members(then)
  })
  // it('test pomocniczy', () => {
  //   let items = ['  Shane', ' Sally ']
  //   let mapped = items.map(x => x.trim())
  //   console.log(mapped)
  // })
  it('mapped - usuwanie bialych znakow', () => {
    let given = ['  Shane', ' Sally ']
    let when = given.map(x => x.trim())
    let then = ['Shane', 'Sally']
    expect(when).to.members(then)
  })
  // it('test pomocniczy', () => {
  //   let names = ['Shane', 'Sally']
  //   let mapped = names.map(function (name) {
  //     return{
  //       firstname: name
  //     }
  //   })
  //   console.log(mapped)
  // })
  it('zrobienie obiektow z kluczem firstname', () => {
    let given = ['Shane', 'Sally']
    let when = given.map(function (name) {
      return{
        firstname: name
      }
    })
    let then = [
      {
        firstname: 'Shane'
      },
      {
        firstname: 'Sally'
      }
    ]
    expect(when).to.deep.equal(then)
  })
  // it('test pomocniczy', () => {
  //     let names = ['Shane', 'Sally']
  //     let mapped = names.map(function (name) {
  //       return{
  //         firstname: name
  //       }
  //     })
  //     mapped.forEach(function (person){
  //       console.log(person.firstname)
  //     })
  // })
  // it('test pomocniczy', () => {
  //   let items = [
  //     {
  //       firstname: 'Shane',
  //       lastname: 'Osbourne'
  //     },
  //     {
  //       firstname: 'Sally',
  //       lastname: 'Osbourne'
  //     }
  //   ]
  //   let mapped = items.map(x => {
  //     return{
  //       firstname: x.firstname,
  //       lastname: x.lastname,
  //       fullname: x.firstname + ' ' + x.lastname
  //     };
  //   })
  //   mapped.forEach(function (person){
  //     console.log(person.fullname)
  //   })
  // })
  it('laczenie dwoch wartosci w jedna', () => {
    let given = [
      {
        firstname: 'Shane',
        lastname: 'Osbourne'
      },
      {
        firstname: 'Sally',
        lastname: 'Osbourne'
      }
    ]
    let when = given.map(x => {
      return{
        fullname: x.firstname + ' ' + x.lastname
      };
    })
    let then = 
    [
      {
        fullname: 'Shane Osbourne'
      },
      {
        fullname: 'Sally Osbourne'
      }
    ]
    expect(when).to.deep.equal(then)
  })
  // it('test pomocniczy', () => {
  //   let items = [
  //     {
  //       firstname: 'Shane',
  //       lastname: 'Osbourne'
  //     },
  //     {
  //       firstname: 'Sally',
  //       lastname: 'Osbourne'
  //     }
  //   ]
  //   function createHtmlList(items) {
  //     let listElements = items.map(x => `<li>${x.firstname}</li>`)
  //     return `<ul>${listElemensts}</ul>`;
  //   }
  //   })
  it('zrobienie listy ul', () => {
    let given = [
      {
        firstname: 'Shane',
        lastname: 'Osbourne'
      },
      {
        firstname: 'Sally',
        lastname: 'Osbourne'
      }
    ]
    function createList(listaObiektow) {
      let listElements = listaObiektow.map(x => `<li>${x.firstname}</li>`)
      return `<ul>${listElements}</ul>`;
    }
    let when = createList(given)
    let then = '<ul><li>Shane</li>,<li>Sally</li></ul>'
    expect(when).to.equal(then)
  })
  // it('test pomocniczy - wymapowanie firstname', () => {
  //     let items = [
  //       {
  //         active: true,
  //         firstname: 'Shane',
  //         lastname: 'Osbourne'
  //       },
  //       {
  //         active: true,
  //         firstname: 'Sally',
  //         lastname: 'Osbourne'
  //       },
  //       {
  //         active: false,
  //         firstname: 'Ben',
  //         lastname: 'Barker'
  //       }
  //     ]
  //     let mapped = items
  //     .filter(x => x.active)
  //     .map(x => x.firstname)
  //     console.log(createHtmlList(mapped))

  //     function createHtmlList(items) {
  //       let listElements = items.map(x => `<li>${x}</li>`).join('\n')
  //       return `<ul>\n${listElements}\n</ul>`;
  //     }
  // })
  it('wymapowanie firstname', () => {
    let given = [
      {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
      },
      {
        active: true,
        firstname: 'Sally',
        lastname: 'Osbourne'
      },
      {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
      }
    ]
    let when = given
    .filter(x => x.active)
    .map(x => x.firstname)
    createHtmlList(when)

    function createHtmlList(obiekt) {
      let listElements = obiekt.map(x => `<li>${x}</li>`).join('\n')
      return `<ul>\n${listElements}\n</ul>`;
    }
    let then = [ 'Shane', 'Sally']
    expect(when).to.members(then)
  })

  // it('test pomocniczy', () =>{
  //   let items = [1,2,3,4,5]
  //   let result = items.every(x => x < 10)
  //   console.log(result)
  // })
  it('sprawdzanie czy mniejsze niz 10 (EVERY)', () =>{
    let given = [1,2,3,4,5]
    let when = given.every(x => x < 10)
    let then = true
    expect(when).to.equal(then)
  })
  it('sprawdzanie czy mniejsze niz 5 (EVERY)', () =>{
    let given = [1,2,3,4,5]
    let when = given.every(x => x < 5)
    let then = false
    expect(when).to.equal(then)
  })
  it('sprawdzanie czy to string (EVERY)', () =>{
    let given = ['1','2',3,'4','5']
    let when = given.every(x => typeof x === 'string')
    let then = false
    expect(when).to.equal(then)
  })
  it('sprawdzanie czy to string (EVERY)', () =>{
    let given = ['1','2','3','4','5']
    let when = given.every(x => typeof x === 'string')
    let then = true
    expect(when).to.equal(then)
  })
  // it('test pomocniczy', () => {
  //   let fields = [
  //     {
  //       field: 'email',
  //       value: 'shane@example.com',
  //       errors: []
  //     },
  //     {
  //       field: 'name',
  //       value: '',
  //       errors: ['No name provided']
  //     }
  //   ]
  //   let isValid = fields.every(x => x.errors.length === 0)
  //   console.log(isValid)
  // })
  it('szukanie bledow z every', () => {
    let given = [
      {
        field: 'email',
        value: 'shane@example.com',
        errors: []
      },
      {
        field: 'name',
        value: '',
        errors: ['No name provided']
      }
    ]
    let when = given.every(x => x.errors.length === 0)
    let then = false
    expect(when).to.equal(then)
  })
  // it('test pomocniczy', () => {
  // let videos = [
  //   {
  //     title: 'film: concat',
  //     length: 310,
  //     viewed: 310
  //   },
  //   {
  //     title: 'film: join',
  //     length: 420,
  //     viewed: 360
  //   }
  // ]
  // let isComplete = videos.every(x => x.viewed === x.length)
  // console.log(isComplete)
  // })
  it('sprawdzenie czy skonczony - FALSE', () => {
    let given = [
      {
        title: 'film: concat',
        length: 310,
        viewed: 310
      },
      {
        title: 'film: join',
        length: 420,
        viewed: 360
      }
    ]
    let when = given.every(x => x.viewed === x.length)
    let then = false
    expect(when).to.equal(then)
  })
  it('sprawdzenie czy skonczony - TRUE', () => {
    let given = [
      {
        title: 'film: concat',
        length: 310,
        viewed: 310
      },
      {
        title: 'film: join',
        length: 420,
        viewed: 420
      }
    ]
    let when = given.every(x => x.viewed === x.length)
    let then = true
    expect(when).to.equal(then)
  })
  it('sprawdzenie czy skonczony - TRUE', () => {
    let given = [
      {
        title: 'film: concat',
        length: 310,
        viewed: 310
      },
      {
        title: 'film: join',
        length: 420,
        viewed: 420
      }
    ]
    let when = given.every(x => x.viewed === x.length)
    let then = true
    expect(when).to.equal(then)
  })
  // it('test pomocniczy', () => {
  //   let videos = [
  //     {
  //       title: 'film: concat',
  //       length: 310,
  //       viewed: 310
  //     },
  //     {
  //       title: 'film: join',
  //       length: 420,
  //       viewed: 360
  //     }
  //   ]
  //   let complete = (x) => x.viewed === x.length
  //   let isComplete = videos.every(complete)
  //   let completed = videos.filter(complete)
  //   console.log(isComplete)
  //   console.log(completed)
  // })
  it('sprawdzanie z every i filter', () => {
    let given = [
      {
        title: 'film: concat',
        length: 310,
        viewed: 310
      },
      {
        title: 'film: join',
        length: 420,
        viewed: 360
      }
    ]
    let complete = (x) => x.viewed === x.length
    let isComplete = given.every(complete)
    let completed = given.filter(complete)
    let result1 = false
    let result2 = [
      {
        title: 'film: concat',
        length: 310,
        viewed: 310
      }
    ]
    expect(isComplete).to.equal(result1)
    expect(completed).to.deep.equal(result2)
  })
  // it('test pomocniczy', () =>{
  //   let items = [1,2,3,4,5]
  //   let sum = items.reduce((prev, item) => prev + item)
  //   console.log(sum)
  // })
  it('zliczanie sumy z reduce', () =>{
    let given = [1,2,3,4,5]
    let when = given.reduce((prev, item) => prev + item)
    let then = 15
    expect(when).to.equal(then)
  })

  // it('test pomocniczy', () =>{
  //   let albums = [
  //     {
  //       title: 'Holiday in Spain',
  //       images: ['1', '2']
  //     },
  //     {
  //       title: 'House renovation',
  //       images: ['1', '2', '3']
  //     }
  //   ]
  //   let numImages = albums.reduce((prev, album) =>{
  //     return prev + album.images.length;
  //   }, 0);
  //   console.log(numImages)
  // })
  it('zliczanie wartosci z dwoch obiektow - REDUCE', () =>{
    let given = [
      {
        title: 'Holiday in Spain',
        images: ['1', '2']
      },
      {
        title: 'House renovation',
        images: ['1', '2', '3']
      }
    ]
    let when = given.reduce((prev, album) =>{
      return prev + album.images.length;
    }, 0);
    let then = 5
    expect(when).to.equal(then)
  })
  // it('test pomocniczy', () =>{
  //     let albums = [
  //       {
  //         title: 'Holiday in Spain',
  //         images: ['1', '2']
  //       },
  //       {
  //         title: 'House renovation',
  //         images: ['3', '4', '5']
  //       }
  //     ]
  //     let numImages = albums.reduce((prev, album) =>{
  //       return prev.concat(album.images);
  //     }, []);
  //     console.log(numImages)
  //   })
  it('laczenie w nowa liste wybierajac z wartosci (REDUCE)', () =>{
    let given = [
      {
        title: 'Holiday in Spain',
        images: ['1', '2']
      },
      {
        title: 'House renovation',
        images: ['3', '4', '5']
      }
    ]
    let when = given.reduce((prev, album) =>{
      return prev.concat(album.images);
    }, []);
    let then = ['1', '2', '3', '4', '5']
    expect(when).to.members(then)
  })
  // it('test pomocniczy', () => {
  //   let users = [
  //     {
  //       id: '01',
  //       name: 'Shane'
  //     },
  //     {
  //       id: '02',
  //       name: 'Sally'
  //     }
  //   ]
  //   let newUsers = users.reduce((obj, user) =>{
  //     obj[user.id] = user;
  //     return obj;
  //   }, {});
  //   console.log(newUsers['02'].name)
  // })
  it('dziwne rzeczy z reduce', () => {
    let given = [
      {
        id: '01',
        name: 'Shane'
      },
      {
        id: '02',
        name: 'Sally'
      }
    ]
    let when = given.reduce((obj, user) =>{
      obj[user.id] = user;
      return obj;
    }, {});
    let then =  {
      '01': {
        id: '01', 
        name: 'Shane'
      }, 
      '02': {
        id: '02',
        name: 'Sally'
      }
    }
    expect(when).to.deep.equal(then)
  })
})

