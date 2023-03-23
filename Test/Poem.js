"use strict";
var Poem;
(function (Poem) {
    let Subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verb = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let Objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(Subjekt.length);
    //console.log(verb.length);
    //brewconsole.log(Objekt.length);
    for (let i = 6; i >= 1; i--) {
        console.log(i);
        let sentcence = getVerse(Subjekt, verb, Objekt);
        console.log(sentcence);
        //let erstes=[];
        //let zweites=[];
        //let drittens=[];
    }
    function getVerse(_Subjekt, _verb, _Objekt) {
        let vers = "";
        let zufallzahl_S = Math.floor(Math.random) * Subjekt.length;
        //let result: string = "Alohomora";
        //return result;
    }
})(Poem || (Poem = {}));
//# sourceMappingURL=Poem.js.map