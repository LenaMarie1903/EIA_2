namespace Aufgabe2 {

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

        document.getElementById("div0")!.addEventListener("click", logInfo);
        document.getElementById("div0")!.addEventListener("keyup", logInfo);

        document.getElementById("div1")!.addEventListener("click", logInfo);
        document.getElementById("div1")!.addEventListener("keyup", logInfo);

    }
    //document.body.addEventListener("mousemove", setInfoBox); übergibt das dem _event 
    //Frage Woher weiß Zeile 9, dass es ein mousemove Event ist? 
    function setInfoBox(_event: MouseEvent) {

        //Er weiß nicht,dass span wirklich existiert. Daher muss ich durch eine if Funktion  überprüfeb, ob das HTML Element span in HTML wirklich vorhanden ist.
        let span: HTMLElement | null = document.getElementById("span0");
        let xvalue: number = _event.clientX;
        let yvalue: number = _event.clientY;

        let offsetX: number = _event.clientX + 10;
        let offsetY: number = _event.clientY + 10;

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

    function logInfo(_event: Event) {

        console.log(_event.target, _event.currentTarget, _event.type, _event);

    }

    let HTMLbutton: HTMLButtonElement = document.createElement("button");
    HTMLbutton.innerHTML = "Button";
    HTMLbutton.className = "button";
    document.querySelector("#div0")!.appendChild(HTMLbutton);

    HTMLbutton.addEventListener('click', button_click)
    let customevent = new CustomEvent("MeinEvent", { bubbles: true, detail: { name: "Minka" } });
   




    function button_click() {

        //let customevent = new CustomEvent("MeinEvent", { bubbles: true, detail: { name: "Minka"} });
        document.addEventListener("MeinEvent", customEvent);
        document.dispatchEvent(customevent);

    }

    function customEvent() {
        console.log(customevent.bubbles)
        console.log(customevent.detail);

    }


     /* function customEvent(_event: MouseEvent) {
         
         button_click()
 
     }*/









}