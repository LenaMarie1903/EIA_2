namespace Poem {
   
   let Subjekt: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]
   let verb: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]
   let Objekt: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]

   //console.log(Subjekt.length);
   //console.log(verb.length);
   //brewconsole.log(Objekt.length);

   for (let i = 6; i >= 1; i--) {
      //console.log(i)
      let sentence: string = getVerse(Subjekt, verb, Objekt);
      console.log(sentence)
      //let erstes=[];
      //let zweites=[];
      //let drittens=[];

   }

   function getVerse(_Subj: string[], _ver: string[], _Obj: string[]): string {

      let vers : string = "";

      let zufallzahl_S : number = Math.floor(Math.random()*_Subj.length);
      let zufallzahl_v : number = Math.floor(Math.random()*_ver.length);
      let zufallzahl_O : number = Math.floor(Math.random()*_Obj.length);

      //console.log(zufallzahl_S);
      //Der random Wert wird aus Array rausgeschnitten und in Variable vers reingeschrieben als string. Die 1 ist die Anzahl die gesplicet wird. Da ich einem string kein Array anhängen kann, muss ich die Stelle angeben hier O (erste Stelle)
      vers = _Subj.splice(zufallzahl_S, 1)[0] + " "  + _ver.splice(zufallzahl_v, 1)[0] + " " + _Obj.splice(zufallzahl_O, 1)[0];
     
      


      //let result: string = _Subjekt[0];
      return vers;
      
     
   }







}