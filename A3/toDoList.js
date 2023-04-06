"use strict";
/*Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Lena Fleig>
Matrikel: <272304>
Datum: <06.04.2023>
In Zusammenarbeit mit Medin Flaig */
var ToDo;
(function (ToDo) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
    }
    document.querySelector("#finish").addEventListener('click', function () {
        console.log("Ich bin fertig");
    });
    document.querySelector("#edit").addEventListener('click', function () {
        console.log("Ich bin bearbeitet");
    });
    document.querySelector("#trashbin").addEventListener('click', function () {
        console.log("Ich bin gelöscht");
    });
})(ToDo || (ToDo = {}));
//# sourceMappingURL=toDoList.js.map