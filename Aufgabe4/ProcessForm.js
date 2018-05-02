var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let courseSelect = document.getElementById("options");
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            course: inputs[3].value,
            age: parseInt(inputs[4].value),
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        console.log(studi.course);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        Aufgabe4.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        Aufgabe4.studiSimpleArray.push(studi);
        console.log(Aufgabe4.studiSimpleArray);
    }
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in Aufgabe4.studiHomoAssoc) {
            let studi = Aufgabe4.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
    }
    /*function search(_event: Event): void {
    let n: number = 0;
    let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
    let mtrNumb: HTMLInputElement = <HTMLInputElement>document.getElementById("search");
    output.value = "";

    for (let matrikel in studiHomoAssoc) {
        let studi: Studi = studiHomoAssoc[matrikel];
        let line: string = matrikel + ": ";
        let lengthstudiHomoAssoc: number = studiSimpleArray.length;
        console.log("Zahl " + studiSimpleArray.length)


        if (mtrNumb.value == studi.matrikel.toString()) {

            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";



        } else if ((lengthstudiHomoAssoc - 1) == n) {
            let info: string = "kein Student vorhanden";
            output.value += info + "\n";
            n = 0;

        }

        else {
            n++;
        }
        console.log("Zählvariable: " + n)
        console.log("Abbruch:" + lengthstudiHomoAssoc)
    }
}
*/
    function search(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let inputs = document.getElementsByTagName("input");
        let matrikel = inputs[2].value;
        console.log(matrikel);
        let studi = Aufgabe4.studiHomoAssoc[matrikel];
        console.log(studi);
        if (typeof studi === "undefined") {
            output.value = "No student data found.";
        }
        else {
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.course;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
    }
    // zusätzliche Konsolenausgaben zur Demonstration
    console.group("Simple Array");
    console.log(Aufgabe4.studiSimpleArray);
    console.groupEnd();
    console.group("Associatives Array (Object)");
    console.log(Aufgabe4.studiHomoAssoc);
    console.groupEnd();
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=ProcessForm.js.map