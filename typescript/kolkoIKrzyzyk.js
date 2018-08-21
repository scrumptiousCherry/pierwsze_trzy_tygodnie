"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KolkoKrzyzyk;
(function (KolkoKrzyzyk) {
    KolkoKrzyzyk["kolko"] = "o";
    KolkoKrzyzyk["krzyzyk"] = "x";
})(KolkoKrzyzyk = exports.KolkoKrzyzyk || (exports.KolkoKrzyzyk = {}));
var Game = /** @class */ (function () {
    function Game() {
        this.pola = new Array(9);
        this.moznaGrac = false;
        this.koniecGry = false;
        this.czyjaKolej = KolkoKrzyzyk.kolko;
    }
    Game.prototype.czyWygranaLubRemis = function () {
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
        var wygranePola = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        var czyWygranaFlaga = 'nie';
        for (var i = 0; i < wygranePola.length; i++) {
            // trzeba przjesc przez kazdy z elementow miniArrayow z wygranych pol i porownac czy maja takie same wartosci (o,x)
            // w arrrayu glownym i nie sa nullami
            var x = wygranePola[i];
            var a = x[0];
            var b = x[1];
            var c = x[2];
            var poleA = this.pola[a];
            var poleB = this.pola[b];
            var poleC = this.pola[c];
            if (poleA !== null && poleB !== null && poleC !== null) {
                if (poleA == KolkoKrzyzyk.kolko && poleB == KolkoKrzyzyk.kolko && poleC == KolkoKrzyzyk.kolko) {
                    czyWygranaFlaga = 'tak';
                    break;
                }
                if (poleA == KolkoKrzyzyk.krzyzyk && poleB == KolkoKrzyzyk.krzyzyk && poleC == KolkoKrzyzyk.krzyzyk) {
                    czyWygranaFlaga = 'tak';
                    break;
                }
            }
        }
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', czyWygranaFlaga);
        if (czyWygranaFlaga == 'tak') {
            this.przerwanieGry();
        }
        else {
            var wszystkoZajete = this.pola.every(function (x) {
                if (x == KolkoKrzyzyk.kolko || x == KolkoKrzyzyk.krzyzyk) {
                    return false;
                }
                else {
                    return true;
                }
            });
            console.log('?????', wszystkoZajete);
            console.log('POLA:', this.pola);
            if (wszystkoZajete == true) {
                this.przerwanieGry();
            }
            else {
                this.zmienTure();
            }
        }
    };
    Game.prototype.zmienTure = function () {
        //1.if(jezeli czyjaKolej jest kolko)
        //then => zmien na krzyzyk
        //else => zmien na kolko
        if (this.czyjaKolej !== KolkoKrzyzyk.kolko) {
            this.czyjaKolej = KolkoKrzyzyk.kolko;
        }
        else {
            this.czyjaKolej = KolkoKrzyzyk.krzyzyk;
        }
        console.log('czyja kolej:', this.czyjaKolej);
    };
    Game.prototype.przerwanieGry = function () {
        //pojawi modal, ktory zasloni gre zebby nie mozna bylo 
        // klikac i bedzie mial jeden przycisk
        //bedzie mozna uruchomic metode rozpocznijGreLubRemis
        //0. zmiana flagi moznaGrac na false
        //1. Wyswietlenie modala ktory zasloni ekran gry i bedzie mial jeden przycisk
        // do ponownego rozpoczecia gry (czyli uruchomi metode rozpocznijGre)
        this.moznaGrac = false;
        this.koniecGry = true;
        //@todo: dopisanie kto wygral
    };
    Game.prototype.wykonajRuch = function (index) {
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
        if (this.moznaGrac == false) {
            return false;
        }
        else {
            var czyJestWolne = this.pola[index] !== KolkoKrzyzyk.kolko && this.pola[index] !== KolkoKrzyzyk.krzyzyk;
            if (czyJestWolne == true) {
                this.pola[index] = this.czyjaKolej;
                this.czyWygranaLubRemis();
            }
        }
    };
    Game.prototype.rozpocznijGre = function () {
        //@todo: bedzie wyzerowywac ustawienia, ustawienie flagi moznaGrac na true
        //1. ustawienie nowego arraya
        //2.ustawienie falgi moznaGrac na true
        //3. ustawienie czyjaKolej na innego gracza
        this.pola = new Array(9);
        this.moznaGrac = true;
        this.koniecGry = false;
        this.czyjaKolej = KolkoKrzyzyk.krzyzyk;
    };
    return Game;
}());
exports.Game = Game;
var game = new Game();
game.rozpocznijGre();
// game.wykonajRuch(3)
// game.wykonajRuch(4)
game.wykonajRuch(0);
// game.wykonajRuch(1)
// game.wykonajRuch(7)
// game.wykonajRuch(8)
