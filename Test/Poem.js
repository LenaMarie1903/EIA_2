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
        //console.log(i)
        let sentcence = getVerse(Subjekt, verb, Objekt);
        console.log(sentcence);
        //let erstes=[];
        //let zweites=[];
        //let drittens=[];
    }
    function getVerse(_Subj, _ver, _Obj) {
        let vers = "";
        let zufallzahl_S = Math.floor(Math.random() * _Subj.length);
        let zufallzahl_v = Math.floor(Math.random() * _ver.length);
        let zufallzahl_O = Math.floor(Math.random() * _Obj.length);
        //console.log(zufallzahl_S);
        //Der random Wert wird aus Array rausgeschnitten und in Variable vers reingeschrieben als string. Die 1 ist die Anzahl die gesplicet wird. Da ich einem string kein Array anhängen kann, muss ich die Stelle angeben hier O (erste Stelle)
        vers = _Subj.splice(zufallzahl_S, 1)[0] + " " + _ver.splice(zufallzahl_v, 1)[0] + " " + _Obj.splice(zufallzahl_O, 1)[0];
        //let result: string = _Subjekt[0];
        return vers;
    }
})(Poem || (Poem = {}));
//# sourceMappingURL=Poem.js.map