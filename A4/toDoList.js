"use strict";
/*Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Lena Fleig>
Matrikel: <272304>
Datum: <06.04.2023>
In Zusammenarbeit mit Medin Flaig */
var ToDo;
(function (ToDo) {
    let todoliste = [{
            done: false,
            task: "Spülmaschine ausräumen",
            comment: "Bitte bis morgen erledigen.",
            person: "Luisa",
            date: "2023-04-29T14:00",
            inprogress: true,
        },
        {
            done: false,
            task: "Fenster putzen",
            comment: "Bitte Glasreiniger benutzen",
            person: "Jannik",
            date: "2023-05-01T16:00",
            inprogress: true,
        }
    ];
    window.addEventListener("load", handleload);
    let taskinput = document.querySelector("#TASK");
    let commentinput = document.querySelector("#COMMENT");
    let personinput = document.querySelector("#PERSON");
    let dateinput = document.querySelector("#DATE");
    let wrapper = document.querySelector(".boss");
    let secondcheckbox = document.querySelector("#checkB");
    function handleload(_event) {
        taskinput.value = ""; //Damit die Inputfelder beim Neuladen leer sind 
        commentinput.value = "";
        personinput.value = "";
        dateinput.value = "";
        secondcheckbox.checked = false; //Checkbox soll grundsetzlich nicht angekreuzt sein 
        callInterface();
        document.querySelector("#finish").addEventListener('click', arrayPush);
        //document.querySelector("#edit")!.addEventListener('click', enableEditing);
        //document.querySelector("#trashbin")!.addEventListener('click', deleteTodo);
    }
    function arrayPush() {
    }
    function callInterface() {
        for (let i = 0; i < todoliste.length; i++) {
            console.log(todoliste[i]);
            let newDiv = document.createElement("div");
            newDiv.className = "newDivCSS";
            newDiv.id = "" + i; // Damit wir später die verscheiden newDiv aus den verscheiden Aufgaben aufgaben unterscheiden können. 
            //let wrapper: HTMLElement = <HTMLElement>document.querySelector(".boss");
            let newDone = document.createElement("i"); //Checkbox vorne
            let newTask = document.createElement("input");
            newTask.readOnly = true;
            let newComment = document.createElement("input");
            newComment.readOnly = true;
            let newPerson = document.createElement("input");
            newPerson.readOnly = true;
            let newDate = document.createElement("input");
            newDate.type = "datetime-local";
            newDate.readOnly = true;
            let newLabel = document.createElement("label");
            let newCheck = document.createElement("i"); // in Bearbeitung Checkbox
            let newButton = document.createElement("button");
            let newTrash = document.createElement("i");
            newTrash.className = "fa fa-trash-alt";
            newTrash.id = "trashCSS";
            if (todoliste[i].done == true) {
                newDone.className = "far fa-check-circle";
            }
            else {
                newDone.className = "far fa-circle";
            }
            newTask.value = todoliste[i].task;
            newComment.value = todoliste[i].comment;
            newPerson.value = todoliste[i].person;
            newDate.value = todoliste[i].date;
            newLabel.innerHTML = "in Bearbeitung";
            newButton.innerHTML = "Bearbeiten";
            if (todoliste[i].inprogress == true) {
                newCheck.className = "far fa-check-circle";
            }
            else {
                newCheck.className = "far fa-circle";
            }
            newDiv.appendChild(newDone);
            newDiv.appendChild(newTask);
            newDiv.appendChild(newComment);
            newDiv.appendChild(newPerson);
            newDiv.append(newDate);
            newDiv.appendChild(newButton);
            newCheck.appendChild(newLabel);
            newDiv.appendChild(newCheck);
            newDiv.appendChild(newTrash);
            wrapper.appendChild(newDiv);
            newButton.addEventListener('click', enableEditing);
            newDone.addEventListener('click', checkboxfrontChange);
            newCheck.addEventListener('click', checkboxbehindChange2);
            newTrash.addEventListener('click', deleteTodo);
        }
    }
    function checkboxfrontChange(_event) {
        let target = _event.target; //_event ist das MouseEvent
        let parent = target.parentElement; // boss ist der parent von target(Ceckboxfront)
        let id = Number(parent.id); // wir machen aus den einzelnen Divs ids strings numbers
        todoliste[id].done = !todoliste[id].done; // Das Gegentei soll ausgeführt werden. Dies folgt in der if else verzweigung 
        if (todoliste[id].done == true) {
            target.className = "far fa-check-circle";
        }
        else {
            target.className = "far fa-circle";
        }
    }
    function checkboxbehindChange2(_event) {
        let target = _event.target;
        let parent = target.parentElement;
        let id = Number(parent.id);
        todoliste[id].inprogress = !todoliste[id].inprogress;
        if (todoliste[id].inprogress == true) {
            target.className = "far fa-check-circle";
        }
        else {
            target.className = "far fa-circle";
        }
    }
    function createTodo() {
        console.log("Ich bin fertig!");
    }
    function enableEditing() {
        console.log("Ich bearbeite es!");
    }
    function finishEditing(_event) {
        if (_event.key === 'Enter') {
        }
        console.log("Ich bin fertig!");
    }
    function deleteTodo() {
        console.log("Ich schmeisse es weg!");
    }
})(ToDo || (ToDo = {}));
//# sourceMappingURL=toDoList.js.map