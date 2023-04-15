/*Aufgabe: <L03_Aufgabenliste_Formular>
Name: <Lena Fleig>
Matrikel: <272304>
Datum: <06.04.2023>
In Zusammenarbeit mit Medin Flaig */


namespace ToDo {



    interface ToDos {
        done: boolean;
        task: string;
        comment: string;
        person: string;
        date: string;
        inprogress: boolean;

    }

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
    ];

    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {
        document.querySelector("#finish")!.addEventListener('click', createTodo);
        document.querySelector("#edit")!.addEventListener('click', enableEditing);
        document.querySelector("#trashbin")!.addEventListener('click', deleteTodo);
        callInterface();

    }

    function callInterface(): void {

        for (let i: number = 0; i < todoliste.length; i++) {
            console.log(todoliste[i]);

            let newDiv = document.createElement("div");
            newDiv.className= "newDivCSS"
            let wrapper: HTMLElement = <HTMLElement>document.querySelector(".boss");

            let newDone = document.createElement("i");  //Checkbox vorne
            let newTask = document.createElement("input");
            newTask.readOnly = true;
            let newComment = document.createElement("input");
            newComment.readOnly = true;
            let newPerson = document.createElement("input");
            newPerson.readOnly = true;
            let newDate = document.createElement("input");
            newDate.type = "datetime-local";
            let newLabel = document.createElement("label");
            let newCheck = document.createElement("i"); // in Bearbeitung Checkbox
            let newButton = document.createElement("button");
            let newTrash = document.createElement("i");
            newTrash.className = "fa fa-trash-alt";
            newTrash.id = "trashCSS"

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
        }




    }

    function createTodo() {
        console.log("Ich bin fertig!");
    }

    function enableEditing() {
        console.log("Ich bearbeite es!");

    }
    function finishEditing(_event: KeyboardEvent) {
        if (_event.key === 'Enter') {

        }
        console.log("Ich bin fertig!");
    }
    function deleteTodo() {
        console.log("Ich schmeisse es weg!");

    }
































}