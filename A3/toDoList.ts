namespace ToDo {
    window.addEventListener("load", handleload);

    function handleload(_event: Event): void {

    }


    document.querySelector("#finish")!.addEventListener('click', function () {

        console.log("Ich bin fertig");

    })

    document.querySelector("#edit")!.addEventListener('click', function () {

        console.log("Ich bin bearbeitet");

    })
    document.querySelector("#trashbin")!.addEventListener('click', function () {

        console.log("Ich bin gelöscht");

    })































    
}