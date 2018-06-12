var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    let address = "https://eia2node257180.herokuapp.com/";
    let inputs = document.getElementsByTagName("input");
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
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let course = document.getElementById("options");
        let studi;
        let tempCourse = document.getElementById("options");
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
        let stringifyJSON = JSON.stringify(studi);
        console.log(stringifyJSON);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + stringifyJSON, true);
        xhr.addEventListener("readystatechange", handleChangeInsert);
        xhr.send();
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        //studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        //studiSimpleArray.push(studi);
        //console.log(studiSimpleArray);
    }
    function handleChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=findAll", true);
        xhr.addEventListener("readystatechange", handleChangeRefresh);
        xhr.send();
    }
    function handleChangeRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function search(_event) {
        let matrikel = inputs[6].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=find&data=" + matrikel, true);
        xhr.addEventListener("readystatechange", handleChangeSearch);
        xhr.send();
    }
    function handleChangeSearch(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=ProcessForm8.js.map