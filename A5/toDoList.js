"use strict";
/*Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Lena Fleig>
Matrikel: <272304>
Datum: <06.04.2023>
In Zusammenarbeit mit Medin Flaig */
var ToDo;
(function (ToDo) {
    let todoliste;
    /*
        let todoliste: ToDos[] = [{
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
        ];*/
    window.addEventListener("load", handleload);
    let taskinput = document.querySelector("#TASK");
    let commentinput = document.querySelector("#COMMENT");
    let personinput = document.querySelector("#PERSON");
    let dateinput = document.querySelector("#DATE");
    let wrapper = document.querySelector(".boss");
    let secondcheckbox = document.querySelector("#checkB");
    async function requestData(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let seperateData = await response.text();
        todoliste = JSON.parse(seperateData);
        console.log(todoliste);
        callInterface();
    }
    async function sendData() {
        console.log("send Data");
        let url = "https://lenamarie1903.github.io/EIA_2/A5/Daten.json";
        let query = new URLSearchParams(+taskinput.value + commentinput.value + personinput.value + dateinput.value);
        await fetch(url + "?" + query.toString()); // Wir "kleben" an die URL die Inputwerte dran.
        alert("send Data");
    }
    async function editData(_parentIDedit) {
        console.log("edit Data");
        let url = "https://lenamarie1903.github.io/EIA_2/A5/Daten.json";
        let query = new URLSearchParams(+taskinput.value + commentinput.value + personinput.value + dateinput.value + _parentIDedit);
        await fetch(url + "?" + query.toString()); // Wir "kleben" an die URL die Inputwerte dran.
        alert("edit Data");
    }
    async function deleteData(_parentID) {
        console.log("delete Data");
        let url = "https://lenamarie1903.github.io/EIA_2/A5/Daten.json";
        let query = new URLSearchParams(+_parentID);
        await fetch(url + "?" + query.toString()); // Wir "kleben" an die URL die Inputwerte dran.
        alert("delete Data");
    }
    function handleload(_event) {
        taskinput.value = ""; //Damit die Inputfelder beim Neuladen leer sind 
        commentinput.value = "";
        personinput.value = "";
        dateinput.value = "";
        secondcheckbox.checked = false; //Checkbox soll grundsetzlich nicht angekreuzt sein 
        requestData("https://lenamarie1903.github.io/EIA_2/A5/Daten.json");
        // callInterface();
        document.querySelector("#finish").addEventListener('click', arrayPush);
        //document.querySelector("#edit")!.addEventListener('click', enableEditing);
        //document.querySelector("#trashbin")!.addEventListener('click', deleteTodo);
    }
    function arrayPush() {
        todoliste.push({ done: false, task: taskinput.value, comment: commentinput.value, person: personinput.value, date: dateinput.value, inprogress: secondcheckbox.checked });
        //console.log(todoliste);
        wrapper.innerHTML = ""; // Beim Erstellen von einem neuen Listenpunkte werden die HTML Elemente gelöscht und wieder hergestellt, zusammen mit dem neuen Listenpunkt. Unsere Beispiele werden nur aus dem sichtbaren ereich entfernt und wieder hinzugefügt.
        callInterface();
        taskinput.value = ""; // Nach dem drücken des Fertig-Buttons sind die Inputfelder wieder leer
        commentinput.value = "";
        personinput.value = "";
        dateinput.value = "";
        secondcheckbox.checked = false;
        sendData();
    }
    function callInterface() {
        for (let i = 0; i < todoliste.length; i++) {
            console.log(todoliste[i]);
            let newDiv = document.createElement("div");
            newDiv.className = "newDivCSS";
            newDiv.id = "" + i; // Damit wir später die verscheiden newDiv aus den verscheiden Aufgaben aufgaben unterscheiden können.  Durch """ wird i von Number zu einem strind (denn string + number = string)
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
    function enableEditing(_event) {
        console.log("Ich bearbeite es!");
        let target = _event.target; // Target ist der Bearbeitungsbutton
        let parent = target.parentElement; // Parent ist der div boss
        console.log(parent.id);
        let inputElements = parent.querySelectorAll("input"); // von dem Parent (in unserem Fall div boss) werden alle inputelemente ausgewäht/selektiert und in einer Liste von Inputelementen gespeichert.
        let id = Number(parent.id); //ids von den Divs
        for (let i = 0; i < inputElements.length; i++) {
            if (inputElements[i].readOnly == true) {
                inputElements[i].readOnly = false;
                console.log(inputElements[i]);
            }
            else {
                inputElements[i].readOnly = true;
                if (i == 0) {
                    todoliste[id].task = inputElements[i].value; // todoliste [id] sucht uns den richtigen boss div raus und dann die Stelle mit .task (denn wir wollen den Task ändern und nicht den z.B. den Comment). In dem Div und Inputfeld Task soll nun der Wert/value in dem Inputfeld (hier task) übernommen werden.
                }
                if (i == 1) {
                    todoliste[id].comment = inputElements[i].value;
                }
                if (i == 2) {
                    todoliste[id].person = inputElements[i].value;
                }
                if (i == 3) {
                    todoliste[id].date = inputElements[i].value;
                }
            }
        }
        editData(parent.id);
    }
    function deleteTodo(_event) {
        //console.log("Ich schmeisse es weg!");
        let target = _event.target;
        let parent = target.parentElement;
        console.log(parent.id);
        wrapper.removeChild(parent);
        deleteData(parent.id);
    }
})(ToDo || (ToDo = {}));
//# sourceMappingURL=toDoList.js.map