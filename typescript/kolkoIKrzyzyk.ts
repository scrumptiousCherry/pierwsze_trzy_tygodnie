export enum KolkoKrzyzyk{kolko='o', krzyzyk='x'}
export class Game{
    pola:Array<string>= new Array(9)
    moznaGrac:boolean= false
    koniecGry:boolean = false
    remis:boolean = false

    czyjaKolej:KolkoKrzyzyk = KolkoKrzyzyk.kolko
    czyWygranaLubRemis(){
        // @todo: do wykonania
        //sprawdzenie pol wygrywajacych
        //sprawdzenie czy jest remis
        //uruchomienie metody przerwanieGry


        //0.let konfiguracjaWygrywajacychPol = array, w ktorym beda 3 elementowe arraye
        //1. if(sprawdzenie czy pola zajete przez jednego gracza sa w konfiguracjiZajetychPol)
        // then=> uruchomienie metody przerwanieGry
        // else => if(sprawdzenie czy sa jakiekolwiek wolne pola)
        // then => uruchomienie metody zmienTure
            // else =>  uruchomienie metody przerwanieGry


        let wygranePola = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let czyWygranaFlaga:string = 'nie'
        for(let i = 0; i < wygranePola.length; i++){
            // trzeba przjesc przez kazdy z elementow miniArrayow z wygranych pol i porownac czy maja takie same wartosci (o,x)
            // w arrrayu glownym i nie sa nullami
            let x = wygranePola[i]
            let a = x[0]
            let b = x[1]
            let c = x[2]
            let poleA = this.pola[a]
            let poleB = this.pola[b]
            let poleC = this.pola[c]
            if(poleA !== null && poleB !== null && poleC !== null){
                if(poleA == KolkoKrzyzyk.kolko && poleB == KolkoKrzyzyk.kolko && poleC == KolkoKrzyzyk.kolko){
                    czyWygranaFlaga = 'tak'
                    break;
                }
                if(poleA == KolkoKrzyzyk.krzyzyk && poleB == KolkoKrzyzyk.krzyzyk && poleC == KolkoKrzyzyk.krzyzyk){
                    czyWygranaFlaga = 'tak'
                    break;
                }

            }

        }

        if(czyWygranaFlaga == 'tak'){
            this.przerwanieGry()
        }else{
            let czySaSameUnd = this.pola.every((x) => {
                if(x == undefined){
                    return true
                }else{
                    return false
                }
            })

            
            
            
            if(czySaSameUnd == true){
                this.zmienTure()
            }else{
                let czyIstniejePoleDoZagrania = false
                for(let i = 0; i< this.pola.length; i++){
                    let x = this.pola[i]
                    if(x == KolkoKrzyzyk.kolko){
                        continue;
                    }
                    if(x == KolkoKrzyzyk.krzyzyk){
                        continue;
                    }
                    czyIstniejePoleDoZagrania = true
                }


                if(czyIstniejePoleDoZagrania == true){
                    this.zmienTure()
                }else{
                    this.rozpocznijRemis()
                }
                
                

            }

        }
        
    }
    zmienTure(){
        //1.if(jezeli czyjaKolej jest kolko)
        //then => zmien na krzyzyk
        //else => zmien na kolko

        if(this.czyjaKolej !== KolkoKrzyzyk.kolko){
            this.czyjaKolej = KolkoKrzyzyk.kolko
        }else{
            this.czyjaKolej = KolkoKrzyzyk.krzyzyk
        }
    }
    przerwanieGry(){
        //pojawi modal, ktory zasloni gre zebby nie mozna bylo 
        // klikac i bedzie mial jeden przycisk
        //bedzie mozna uruchomic metode rozpocznijGreLubRemis

        //0. zmiana flagi moznaGrac na false
        //1. Wyswietlenie modala ktory zasloni ekran gry i bedzie mial jeden przycisk
        // do ponownego rozpoczecia gry (czyli uruchomi metode rozpocznijGre)

        this.moznaGrac = false
        this.koniecGry = true


        //@todo: dopisanie kto wygral
    }
    wykonajRuch(index:number){
        //@todo
        //sprawdzenie czy moznaGrac jest na true
        // nie mozna zmienic znaku na polu, gdy jest uzyte
        // kolko lub krzyzyk - zajete przez innego gracza
        //postawienie takiego znaku jaka jest
        //tura na wolnym polu
        //uruchomic metode czyWygranaLubRemis
        //jesli nie bedzie wygranej zmiana tury gracza


        //1.sprawdzenie flagi moznaGrac - jezeli true jest uruchamiana nastepny podpunkt
        //jezeli nie to nie - zrobic return false
        //2. dodanie znaku(zgodnego z obecna tura),
        //ale tylko na polu nie zajetym przez innego gracza
        //2A: potrzebny if ktory sprawdzi wartosc czyjaKolej i doda znak na 
        //wolne pole nie zajete przez innego gracza
            //- if (sprawdzenie czy wartosc
            // tego indexu jest wolna czy zajeta, 
            // then =>jak zajete to nie robic nic)
            //else => jak wolne, dodac znak zgodny z czyjaKolej na ten wybrany index
        //3. uruchomienie metody czyWygranaLubRemis

        if(this.moznaGrac == false){
            return false
        }else{
            let czyJestWolne = this.pola[index] !== KolkoKrzyzyk.kolko && this.pola[index] !== KolkoKrzyzyk.krzyzyk
            if(czyJestWolne == true){
                    this.pola[index] = this.czyjaKolej
                    this.czyWygranaLubRemis();
            }
        }
    }
    rozpocznijRemis(){
        this.remis=true
        this.przerwanieGry()
    }
    rozpocznijGre(){
        //@todo: bedzie wyzerowywac ustawienia, ustawienie flagi moznaGrac na true
        //1. ustawienie nowego arraya
        //2.ustawienie falgi moznaGrac na true
        //3. ustawienie czyjaKolej na innego gracza

        this.pola = new Array(9)
        this.moznaGrac = true
        this.koniecGry = false
        this.czyjaKolej = KolkoKrzyzyk.krzyzyk
    }

} 

// let game = new Game()
// game.rozpocznijGre()
// game.wykonajRuch(3)
// game.wykonajRuch(4)
// game.wykonajRuch(0)
// game.wykonajRuch(1)
// game.wykonajRuch(7)
// game.wykonajRuch(8)


// let given = new Game()
// given.rozpocznijGre() //x
//     given.wykonajRuch(0) //x
//     given.wykonajRuch(1) //o
//     given.wykonajRuch(2) //x
//     given.wykonajRuch(3)//o
//     given.wykonajRuch(4)//x
//     given.wykonajRuch(8)//o
//     given.wykonajRuch(7)//x
//     given.wykonajRuch(6)//o
//     given.wykonajRuch(5)//x

//     console.log(given)