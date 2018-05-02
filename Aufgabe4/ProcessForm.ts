namespace Aufgabe4 {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }


    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let courseSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("options");
        let studi: Studi;
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
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);
        console.log(studiSimpleArray);
    }

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
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

        function search(_event: Event): void {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
            output.value = "";
            let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
            let matrikel: string = inputs[2].value;
            console.log(matrikel);
            let studi: Studi = studiHomoAssoc[matrikel];
            console.log(studi);
            if (typeof studi === "undefined") {
                output.value = "No student data found.";
            } else {
                let line: string = matrikel + ": ";
                line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.course;
                line += studi.gender ? ", (M)" : ", (F)";
                output.value += line + "\n";
            }
        }
        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(studiSimpleArray);
        console.groupEnd();

        console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();
}
