"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    /*
Aufgabe: <L02_EventInspetor>
Name: <Lena Fleig>
Matrikel: <272304>
Datum: <01.04.2023>
In Zusammenarbeit mit Medin Flaig und mit Hilfe von Laura Kupferschmid und Lara Halmosi
Quellen: <https://stackoverflow.com/questions/43001679/how-do-you-create-custom-event-in-typescript >
*/
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("keyup", logInfo);
    }
    //document.body.addEventListener("mousemove", setInfoBox); übergibt das dem _event 
    //Frage Woher weiß Zeile 9, dass es ein mousemove Event ist? 
    function setInfoBox(_event) {
        //Er weiß nicht,dass span wirklich existiert. Daher muss ich durch eine if Funktion  überprüfeb, ob das HTML Element span in HTML wirklich vorhanden ist.
        let span = document.getElementById("span0");
        let xvalue = _event.clientX;
        let yvalue = _event.clientY;
        let offsetX = _event.clientX + 10;
        let offsetY = _event.clientY + 10;
        if (span != null) {
            span.innerText = "Mouseposition: X: " + xvalue + ", Y: " + yvalue + _event.target;
            span.style.left = offsetX + "px";
            span.style.top = offsetY + "px";
            //span.setAttribute('style','right: xvalue + 10px');
            //span.style.top=offset+ yvalue + '10px'
            //span.setAttribute('style', 'top: yvalue + 10px');
        }
        //span.setAttribute('style','right: xvalue + 10px');
        // span.setAttribute('style', 'top: yvalue + 10px');
    }
    function logInfo(_event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }
    let HTMLbutton = document.createElement("button");
    HTMLbutton.innerHTML = "Button";
    HTMLbutton.className = "button";
    document.querySelector("#div0").appendChild(HTMLbutton);
    HTMLbutton.addEventListener('click', button_click);
    /* function customEvent(_event: MouseEvent) {
         
         button_click()
 
     }*/
    function button_click() {
        let customevent = new CustomEvent("MeinEvent", { bubbles: true, detail: { name: "Minka" } });
        document.addEventListener("MeinEvent", (e) => console.log(e.bubbles, e.detail.name));
        document.dispatchEvent(customevent);
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Eventinspector.js.map