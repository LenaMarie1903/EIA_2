"use strict";
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