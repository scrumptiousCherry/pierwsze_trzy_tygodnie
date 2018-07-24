import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { expect } from 'chai';
import { shallow } from 'enzyme'
import { copyFile } from 'fs';

describe('kurs es6', () => {
  it('napisanie funkcji uzywajac wyrazu function', () => {
    let createGreeting = function(message, name){
      return message + name
    }
    createGreeting()
  })
  it('napisanie funkcji z uzyciem strzalek', () =>{
    let arrowGreeting = (message, name) => message + name;
    arrowGreeting()
  })
  it('napisanie funkcji z uzyciem strzalek i jednego parametru', () =>{
    let arrowGreeting = message => 'hello';
    arrowGreeting()
  })
  it('x do kwadratu', () => {
    let squared = x => x*x;
    squared()
  })
  
  // it('test pomocniczy', () =>{
  //   let deliveryBoy = {
  //     name: 'John',
  //     handleMessage: function (message, handler){
  //       handler(message);
  //     },
  //     receive: function () {
  //       this.handleMessage('Hello, ', message => console.log(message + this.name))
  //     }
  //   }
  //   deliveryBoy.receive()
  // })
  
  // it('funkcja pomocnicza', () => {
  //   let fs = [];
  //   for(let i = 0; i < 10; i++){
  //     fs.push(function () {
  //       console.log(i);
  //     })
  //   }
  //   fs.forEach(function (f) {
  //     f();
  //   })
  // })
  // it('przekazanie propsow', () =>{
  //   function greet(greeting, name = 'John'){
  //     console.log(greeting + ", " + name);
  //   }
  //   greet('Hello', 'Bill');
  // })
  // it('pisanie funkcji w jednej linii', () =>{
  //   let receive = (complete = () => console.log('complete')) => complete()
  //   receive();
  // })
})
