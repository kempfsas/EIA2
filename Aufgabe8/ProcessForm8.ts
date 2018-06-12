namespace Aufgabe8 {
    
    window.addEventListener("load", init);

    let address: string = "https://eia2node257180.herokuapp.com/";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");

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
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let course: HTMLSelectElement = <HTMLSelectElement>document.getElementById("options");
        let studi: Studi;
        let tempCourse: HTMLInputElement = <HTMLInputElement>document.getElementById("options");
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            course: tempCourse.value,
            //course: "",
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };

        //console.log(document.getElementById("options").value);
        //console.log(parseInt(inputs[3].value));
        
        //console.log(studi);
        //console.log(studi.age);
        //console.log(studi["age"]);
        //console.log(studi.course);

        let stringifyJSON: string = JSON.stringify(studi);
        console.log(stringifyJSON);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + stringifyJSON, true);
        xhr.addEventListener("readystatechange", handleChangeInsert);
        xhr.send();


        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        //studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        //studiSimpleArray.push(studi);
        //console.log(studiSimpleArray);
    }

    function handleChangeInsert(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);

        }
    }


    function refresh(_event: Event): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=findAll", true);

        xhr.addEventListener("readystatechange", handleChangeRefresh);
        
        xhr.send();
    }

    function handleChangeRefresh(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;

        }
    }

     function search( _event: Event ): void {
        let matrikel: string = inputs[6].value;

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open( "GET", address + "?command=find&data=" + matrikel, true );

         xhr.addEventListener("readystatechange", handleChangeSearch);
         
        xhr.send();
}

    function handleChangeSearch( _event: ProgressEvent ): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName( "textarea" )[1];
        output.value = "";
        var xhr: XMLHttpRequest = ( <XMLHttpRequest>_event.target );
        if ( xhr.readyState == XMLHttpRequest.DONE ) {
            output.value += xhr.response;

        }
}
}