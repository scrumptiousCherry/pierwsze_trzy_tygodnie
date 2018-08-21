let aplication = document.querySelectorAll('#app')
if(aplication !== null){
    console.log(aplication.length)
}

let imie:string = "wiki"
imie = "Aneta"
console.log(imie)
const Zenek = "kot"

type Osoba={
    imie:string,
    nazwisko:string,
    wiek:number
}
let Wiki:Osoba={
    imie:"Wiktoria",
    nazwisko:"Abramczyk",
    wiek : 17
    
}

console.log(Wiki.imie)
interface iPostac{
    imie:string,
    nazwisko:string,
    wiek:number,
    render:Function
}

class Postac implements iPostac{
    constructor(imie:string,nazwisko:string,wiek:number){
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek
    }
    imie="Wiki"
    nazwisko="Abramczyk"
    wiek=17
    render(){
        console.log(this.imie, this.nazwisko, this.wiek)
    }
}

let wiki2 = new Postac("wiktoria","Abramczyk",17)
wiki2.render()