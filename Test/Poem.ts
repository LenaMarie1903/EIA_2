namespace Poem {
   debugger;
   let Subjekt: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]
   let verb: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]
   let Objekt: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]

   //console.log(Subjekt.length);
   //console.log(verb.length);
   //brewconsole.log(Objekt.length);

   for (let i = 6; i >= 1; i--) {
      //console.log(i)
      let sentcence: string = getVerse(Subjekt, verb, Objekt);
      //console.log(sentcence)
      //let erstes=[];
      //let zweites=[];
      //let drittens=[];

   }

   function getVerse(_Subjekt: string[], _verb: string[], _Objekt: string[]): string {

      let vers : string = "";

      let zufallzahl_S : number = Math.floor(Math.random()*_Subjekt.length);
      let zufallzahl_v : number = Math.floor(Math.random()*_verb.length);
      let zufallzahl_O : number = Math.floor(Math.random()*_Objekt.length);

      console.log(zufallzahl_S);
     
      


      //let result: string = _Subjekt[0];
      //return result;
      
     
   }







}