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


it('zakonczenie gry kiedy jest wygrana', () => {
let given = new Game()
let spyOnKoniecGry = jest.spyOn( given,'przerwanieGry')
let spyOnRemis = jest.spyOn(given, 'rozpocznijRemis')
given.rozpocznijGre()
given.wykonajRuch(0)
// expect(spyOnRemis).toBeCalled()
// expect(spyOnKoniecGry).not.toBeCalled()
given.wykonajRuch(4)
// expect(spyOnKoniecGry).not.toBeCalled()
given.wykonajRuch(1)
// expect(spyOnKoniecGry).not.toBeCalled()
given.wykonajRuch(5)
// expect(spyOnKoniecGry).not.toBeCalled()
given.wykonajRuch(2)
// expect(spyOnKoniecGry).toBeCalled()
expect(given).toHaveProperty('koniecGry', true)
expect(given.pola[0]).toEqual(KolkoKrzyzyk.krzyzyk)
expect(given.pola[1]).toEqual(KolkoKrzyzyk.krzyzyk)
expect(given.pola[2]).toEqual(KolkoKrzyzyk.krzyzyk)
expect(spyOnKoniecGry).toBeCalled()
})


it('zakonczenie gry kiedy jest remis', () => {
    let given = new Game()
    let SpyOnRemis = jest.spyOn(given, 'czyWygranaLubRemis')
    let spyOnKoniecGry = jest.spyOn(given, 'przerwanieGry')
    let spyOnRozpocznijRemis = jest.spyOn(given, 'rozpocznijRemis')
    let spyOnZmienTure = jest.spyOn(given, 'zmienTure')
    given.rozpocznijGre() //x
    given.wykonajRuch(0) //x
    given.wykonajRuch(1) //o
    given.wykonajRuch(2) //x
    given.wykonajRuch(3)//o
    given.wykonajRuch(4)//x
    given.wykonajRuch(8)//o
    given.wykonajRuch(7)//x
    given.wykonajRuch(6)//o
    given.wykonajRuch(5)//x
    expect(given.pola[8]).toEqual(KolkoKrzyzyk.kolko)
    expect(spyOnZmienTure).toBeCalled()
    expect(given).toHaveProperty('remis', true)

    expect(SpyOnRemis).toBeCalled()
    // expect(spyOnKoniecGry).toBeCalled()
    expect(spyOnRozpocznijRemis).toBeCalled()
    
})
