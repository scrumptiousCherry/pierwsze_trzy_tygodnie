"use strict";
var aplication = document.querySelectorAll('#app');
if (aplication !== null) {
    console.log(aplication.length);
}
var imie = "wiki";
imie = "Aneta";
console.log(imie);
var Zenek = "kot";
var Wiki = {
    imie: "Wiktoria",
    nazwisko: "Abramczyk",
    wiek: 17
};
console.log(Wiki.imie);
var Postac = /** @class */ (function () {
    function Postac(imie, nazwisko, wiek) {
        this.imie = "Wiki";
        this.nazwisko = "Abramczyk";
        this.wiek = 17;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Postac.prototype.render = function () {
        console.log(this.imie, this.nazwisko, this.wiek);
    };
    return Postac;
}());
var wiki2 = new Postac("wiktoria", "Abramczyk", 17);
wiki2.render();
