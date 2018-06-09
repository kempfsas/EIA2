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
    Aufgabe8.init = init;
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let course = document.getElementById("options");
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
        let stringifyJSON = JSON.stringify(studi);
        console.log(stringifyJSON);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + stringifyJSON, true);
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
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let studis = JSON.parse(xhr.responseText);
                console.log(studis);
                let answer = "";
                for (let i = 0; i < studis.length; i++) {
                    answer += "Name: " + studis[i].name + ", " + studis[i].firstname + ", Matrikel: " + studis[i].matrikel + ", "
                        + studis[i].course + ", Mann: " + studis[i].gender + ", Alter: " + studis[i].age + "\n";
                }
                document.getElementsByTagName("textarea")[0].value = answer;
            }
        };
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
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let studi = JSON.parse(xhr.responseText);
                console.log(studi);
                let answer = "Name: " + studi.name + ", " + studi.firstname + ", Matrikel: " + studi.matrikel + ", "
                    + studi.course + ", Mann: " + studi.gender + ", Alter: " + studi.age + "\n";
                document.getElementsByTagName("textarea")[1].value = answer;
            }
        };
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