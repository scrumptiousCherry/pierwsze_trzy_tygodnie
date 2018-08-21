import { Game, KolkoKrzyzyk } from './kolkoIKrzyzyk';


it('czy enum ma dwa klucze - o i x', () => {
    expect(KolkoKrzyzyk).toHaveProperty('kolko', 'o')
    expect(KolkoKrzyzyk).toHaveProperty('krzyzyk', 'x')
})

it('czy po stworzeniu gry mamy pola i wartosc klucza mozna grac', () => {
    let given = new Game()
    expect(given).toHaveProperty('pola', new Array(9))
    expect(given).toHaveProperty('moznaGrac', false)
    expect(given).toHaveProperty('koniecGry', false)
    expect(given).toHaveProperty('czyjaKolej', KolkoKrzyzyk.kolko)
})

it('uruchomienie metody rozpocznijGre', () =>{
    let given = new Game()
    given.rozpocznijGre()
    expect(given).toHaveProperty('moznaGrac', true)
    expect(given).toHaveProperty('czyjaKolej', KolkoKrzyzyk.krzyzyk)
})

it('dodanie znaku na polu i sprawdzenie dzialania metody zmienTure', () => {
    let given = new Game()
    let spyWykonajRuch = jest.spyOn(given, 'wykonajRuch')
    let spyZmienTure = jest.spyOn(given, 'zmienTure')
    let spyWygranaLubRemis = jest.spyOn(given, 'czyWygranaLubRemis')
    let spyPrzerwanieGry = jest.spyOn(given, 'przerwanieGry')
    given.rozpocznijGre()
    given.wykonajRuch(0)
    expect(spyWygranaLubRemis).toBeCalled()
    expect(spyWykonajRuch).toBeCalled()
    expect(spyPrzerwanieGry).not.toBeCalled()
    expect(spyZmienTure).toBeCalled()
    expect(given).toHaveProperty('czyjaKolej', KolkoKrzyzyk.kolko)
    given.wykonajRuch(1)
    expect(spyZmienTure).toBeCalled()
    expect(given).toHaveProperty('czyjaKolej', KolkoKrzyzyk.krzyzyk)
    expect(given.pola[0]).toEqual(KolkoKrzyzyk.krzyzyk)
    expect(given.pola[1]).toEqual(KolkoKrzyzyk.kolko)
    expect(given.pola[2]).toEqual(undefined)
})


it('zakonczenie gry', () => {

})