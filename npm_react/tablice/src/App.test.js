import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai';
/**
 * DONE 1. aplikacja musi się uruchomić bez bledow
 * DONE 2. czy w wartosci klucza tablicaRejestracyjna w
 * stanie aplikacji znajduje sie tablica wm bwm i wma
 * DONE 3.czy w wartosci klucza tablicaRejestracyjna w 
 * stanie aplikacji nie znajduje sie wartosc z 4 znakami
 * DONE 4. po wpisaniu w inputa wartosci wm oczekujemy ze w 
 * stanie aplikacji w kluczu lista do wyswietlenia znajdzie
 * sie wm, wma i nie znajdzie sie bwm
 */
it('renders without crashing', () => {
  shallow(<App/>) 
});
it(`sprawdzenie czy wartosci klucza tablicaRejestracyjna
w state zawiera wm, bwm i wma`, () => {
  let app = shallow(<App/>)
  let listaTablic = app.state('listaWszystkichTablic')
  let thenWM = {
    tablicaRejestracyjna : 'WM',
    miasto : 'powiat miński'
  }
  let thenWMA = {
    tablicaRejestracyjna : 'WMA',
    miasto : 'powiat makowski'
  }
  let thenBWM = {
    tablicaRejestracyjna : 'BWM',
    miasto : 'powiat wysokomazowiecki'
  }
  expect(listaTablic).to.deep.include(thenWM)
  expect(listaTablic).to.deep.include(thenWMA)
  expect(listaTablic).to.deep.include(thenBWM)
})
it(`sprawdzenie czy wartosci klucza tablicaRejestracyjna
w state nie znajduje sie wartosc z 4 znakami`, () => {
  let app = shallow(<App/>)
  let listaTablic = app.state('listaWszystkichTablic')
  listaTablic.forEach(x => {
    expect(x.tablicaRejestracyjna.length).to.lessThan(4);
    expect(x.tablicaRejestracyjna.length).to.greaterThan(1)
  })
})
it(`sprawdzenie czy po wpisaniu w inputa wm nie pojawi sie
bwm ale bedzie wm i wma`, () =>{
  let app = shallow(<App/>)
  let input = app.find('input')
  input.simulate('change', {
    target : {
      value : 'WM'
      }
    }
  ) 
  expect(app.state('listaNaEkranie')).to.deep.include({
    miasto : 'powiat miński',
    tablicaRejestracyjna : 'WM'
  })
  expect(app.state('listaNaEkranie')).to.deep.include({
    miasto : 'powiat makowski',
    tablicaRejestracyjna : 'WMA'
  })
  expect(app.state('listaNaEkranie')).to.not.deep.include({
    miasto : 'powiat wysokomazowiecki',
    tablicaRejestracyjna : 'BWM'
  })
})
