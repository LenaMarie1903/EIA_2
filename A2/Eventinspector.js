"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("#div0")?.addEventListener("click", logInfo);
        document.getElementById("#div0")?.addEventListener("keyup", logInfo);
        document.getElementById("#div1")?.addEventListener("click", logInfo);
        document.getElementById("#div1")?.addEventListener("keyup", logInfo);
    }
    //document.body.addEventListener("mousemove", setInfoBox); übergint das dem _eveent 
    //Frage Woher weiß Zeile 9, dass es ein mousemove Event ist? 
    function setInfoBox(_event) {
        //Er weiß nicht,dass span wirklich existiert. Daher muss ich durch eine if Funktion  überprüfeb, ob das HTML Element span in HTML wirklich vorhanden ist.
        let span = document.getElementById("#span0");
        let xvalue = _event.clientX;
        let yvalue = _event.clientY;
        if (span != null) {
            span.innerText = "Mouseposition: X: " + xvalue + ", Y: " + yvalue + _event.target;
            span.setAttribute('style', 'right: xvalue + 10px');
            span.setAttribute('style', 'top: yvalue + 10px');
        }
        //span.setAttribute('style','right: xvalue + 10px');
        // span.setAttribute('style', 'top: yvalue + 10px');
    }
    function logInfo(_event) {
        console.log(_event.target, _event.currentTarget, _event.type, _event);
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Eventinspector.js.map