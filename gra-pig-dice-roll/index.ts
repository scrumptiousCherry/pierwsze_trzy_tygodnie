let onDocumentReady = () => {
    let czyjaTura:number = 1; 
    let gracz1MalePunkty:number = 0;
    let gracz1DuzePunkty:number = 0;
    let gracz2MalePunkty:number = 0;
    let gracz2DuzePunkty:number = 0;
    let wartoscKostki:number = 0;
    

    
    // let gracz2DuzePunkty: number = 5;

    // let zmianaPunktow = document.querySelector('#duze-punkty-gracz-2')
    // if(zmianaPunktow !== null){
    //     let nowyTekst = `${gracz2DuzePunkty} pkt`
    //     zmianaPunktow.innerHTML = nowyTekst
    // }

    // let znalezionyPrzycisk = document.querySelector('#losuj-przycisk')
    // let KonsolLog = () => {
    //     console.log('klik!')
    // }
    // if(znalezionyPrzycisk !== null){
    //     znalezionyPrzycisk.addEventListener('click', KonsolLog)
    // }

    // let znalezionaKostka = document.querySelector('#kostka')
    // if(znalezionaKostka !== null){
    //     znalezionaKostka.classList.remove('liczba-pol-2')
    //     znalezionaKostka.classList.add('liczba-pol-1')
    // }
    let zmianaTury = () => {
        //jesli czyja tura 0 ustaw na 1
        //male punkty dodac do duzych punktow
        //wyresetowanie kostki
        //wywolanie funkcji aktualizuj...
        if(czyjaTura == 1 ){
            gracz1DuzePunkty = gracz1DuzePunkty + gracz1MalePunkty
            // console.log('duzepkt1', gracz1DuzePunkty)
            gracz1MalePunkty = 0
            wartoscKostki = 0
            czyjaTura = 2
            // console.log('tura gracza: ', czyjaTura)
            // console.log('wartoscKostki:' , wartoscKostki)
            aktualizujInterfaceUzytkownikaNaPodstawieDanych()
        }else{
            gracz2DuzePunkty = gracz2DuzePunkty + gracz2MalePunkty
            // console.log('duzepkt2', gracz2DuzePunkty)
            gracz2MalePunkty = 0
            wartoscKostki = 0
            czyjaTura = 1
            // console.log('tura gracza: ', czyjaTura)
            // console.log('wartoscKostki:' , wartoscKostki)
            aktualizujInterfaceUzytkownikaNaPodstawieDanych()
        }

    }
    let przyciskCzekaj = document.querySelector('#czekaj-przycisk')
    if(przyciskCzekaj !== null){
        przyciskCzekaj.addEventListener('click', zmianaTury)
    }
    
    let losuj = () => {
        //losuje nowa liczbe, ktora zmienia wyglad kostki i dodaje ja do malych punktow
        //jesli jest wylosowana 6 wyresetowac male punkty i zmienic ture
        //wywolanie funkcji aktualizuj...
        if(czyjaTura == 1){
            let losowanie1 = Math.ceil(6*(Math.random()))
            gracz1MalePunkty = losowanie1 + gracz1MalePunkty
            wartoscKostki = losowanie1
            if(losowanie1 == 6){
                gracz1MalePunkty = 0
                zmianaTury()

            }
            console.log('wylosowane g1', losowanie1)
            // console.log('suma g1', gracz1MalePunkty)
            // console.log('wartosc kostki', wartoscKostki)
            aktualizujInterfaceUzytkownikaNaPodstawieDanych()
        }else{
            let losowanie2 = Math.ceil(6*(Math.random()))
            gracz2MalePunkty = losowanie2 + gracz2MalePunkty
            wartoscKostki = losowanie2
            if(losowanie2 == 6){
                gracz2MalePunkty = 0
                zmianaTury()
            }
            console.log('wylosowane g2', losowanie2)
            // console.log('suma g2', gracz1MalePunkty)
            aktualizujInterfaceUzytkownikaNaPodstawieDanych()
        }

    }

    let przyciskLosowanie = document.querySelector('#losuj-przycisk')
    if(przyciskLosowanie !== null){
        przyciskLosowanie.addEventListener('click', losuj)
    }

    let reset = () => {
        //resetuje duze i male punkty u obu graczy + kostke
        //wywolanie funkcji aktualizuj...
        czyjaTura = 1; 
        gracz1MalePunkty = 0;
        gracz1DuzePunkty = 0;
        gracz2MalePunkty = 0;
        gracz2DuzePunkty= 0;
        wartoscKostki= 0;
        aktualizujInterfaceUzytkownikaNaPodstawieDanych()
    }
    let resetowanie = document.querySelector('#reset-przycisk')
    if(resetowanie !== null){
        resetowanie.addEventListener('click', reset)
    }

    let aktualizujInterfaceUzytkownikaNaPodstawieDanych = () => {
        //JESLI ZMIENIAM HTML TO TYLKO TU!
        //zmiana klasy kostki
        //zaktualizowanie malych i duzych punktow
        //pogrubienie aktywnego gracza
        let aktywnyGracz1 = document.querySelector('#gracz1')
        let aktywnyGracz2 = document.querySelector('#gracz2')
        if(aktywnyGracz1 !==null && aktywnyGracz2 !== null){
            if(czyjaTura == 1){
                aktywnyGracz1.classList.add('bold')
                aktywnyGracz2.classList.remove('bold')
            }
            if(czyjaTura == 2){
                aktywnyGracz1.classList.remove('bold')
                aktywnyGracz2.classList.add('bold')
            }
        }
        let kostka = document.querySelector('#kostka')
        if(kostka !== null){
            if(wartoscKostki == 0){
                kostka.classList.remove('liczba-pol-1')
                kostka.classList.remove('liczba-pol-2')
                kostka.classList.remove('liczba-pol-3')
                kostka.classList.remove('liczba-pol-4')
                kostka.classList.remove('liczba-pol-5')
                kostka.classList.remove('liczba-pol-6')
            }
            if(wartoscKostki == 1){
                kostka.classList.add('liczba-pol-1')
                kostka.classList.remove('liczba-pol-2')
                kostka.classList.remove('liczba-pol-3')
                kostka.classList.remove('liczba-pol-4')
                kostka.classList.remove('liczba-pol-5')
                kostka.classList.remove('liczba-pol-6')
            }
            if(wartoscKostki == 2){
                kostka.classList.remove('liczba-pol-1')
                kostka.classList.add('liczba-pol-2')
                kostka.classList.remove('liczba-pol-3')
                kostka.classList.remove('liczba-pol-4')
                kostka.classList.remove('liczba-pol-5')
                kostka.classList.remove('liczba-pol-6')
            }
            if(wartoscKostki == 3){
                kostka.classList.remove('liczba-pol-1')
                kostka.classList.remove('liczba-pol-2')
                kostka.classList.add('liczba-pol-3')
                kostka.classList.remove('liczba-pol-4')
                kostka.classList.remove('liczba-pol-5')
                kostka.classList.remove('liczba-pol-6')
            }
            if(wartoscKostki == 4){
                kostka.classList.remove('liczba-pol-1')
                kostka.classList.remove('liczba-pol-2')
                kostka.classList.remove('liczba-pol-3')
                kostka.classList.add('liczba-pol-4')
                kostka.classList.remove('liczba-pol-5')
                kostka.classList.remove('liczba-pol-6')
            }
            if(wartoscKostki == 5){
                kostka.classList.remove('liczba-pol-1')
                kostka.classList.remove('liczba-pol-2')
                kostka.classList.remove('liczba-pol-3')
                kostka.classList.remove('liczba-pol-4')
                kostka.classList.add('liczba-pol-5')
                kostka.classList.remove('liczba-pol-6')
            }
            if(wartoscKostki == 6){
                kostka.classList.remove('liczba-pol-1')
                kostka.classList.remove('liczba-pol-2')
                kostka.classList.remove('liczba-pol-3')
                kostka.classList.remove('liczba-pol-4')
                kostka.classList.remove('liczba-pol-5')
                kostka.classList.add('liczba-pol-6')
            }
        let gracz1DodawanieMalychPunktow = document.querySelector('#gracz1-male-punkty')  
        if(gracz1DodawanieMalychPunktow !== null){
            let renderPkt = `${gracz1MalePunkty} pkt`
            gracz1DodawanieMalychPunktow.innerHTML = renderPkt
        }
        let gracz2DodawanieMalychPunktow = document.querySelector('#gracz2-male-punkty')  
        if(gracz2DodawanieMalychPunktow !== null){
            let renderPkt = `${gracz2MalePunkty} pkt`
            gracz2DodawanieMalychPunktow.innerHTML = renderPkt
        }
           
        let gracz1DodawanieDuzychPunktow = document.querySelector('#gracz1-duze-punkty')
        if(gracz1DodawanieDuzychPunktow !== null){
            let renderDuzePkt = `${gracz1DuzePunkty} pkt`
            gracz1DodawanieDuzychPunktow.innerHTML = renderDuzePkt
        }

        let gracz2DodawanieDuzychPunktow = document.querySelector('#gracz2-duze-punkty')
        if(gracz2DodawanieDuzychPunktow !== null){
            let renderDuzePkt = `${gracz2DuzePunkty} pkt`
            gracz2DodawanieDuzychPunktow.innerHTML = renderDuzePkt
        }



        }
    }

}

document.addEventListener('DOMContentLoaded', onDocumentReady)



// PLAN DZIALANIA:
//0.HTML
//1.opisanie zmiennych
//2.zrobienie f losuj i podpiecie jej pod przycisk
//3.zmien ture i podpiecie jej pod przycisk
//4.reset i podpiecie jej pod przycisk


