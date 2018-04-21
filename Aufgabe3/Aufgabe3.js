var Memory;
(function (Memory) {
    /*Variablen f�r das Spiel deklarieren*/
    let numPairs; //Anzahl Kartenpaare
    let numPlayers; //Anzahl Spieler
    /*Array*/
    let cardContent = ["Ananas", "Mango", "Papaya", "Kiwi", "Pfirsich", "Erdbeere", "Banane", "Apfel", "Birne", "Himbeere"];
    let cardArray = []; //Leeres Array, in das die Kartenpaare sp�ter hineingespeichert werden
    let player = []; //Leeres Array, in das die Spieler sp�ter hineingespeichert werden
    let score = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert --> um�ndern weil es sonst die Punkte nicht z�hlt??
    /*F�r Aufgabe3*/
    let idCard1;
    let idCard2;
    let classCard1;
    let classCard2;
    let counter = 0;
    window.addEventListener("click", init);
    function init(_event) {
        let target = _event.target;
        //console.log(_event);
        if (counter == 0) {
            document.getElementById(target.id).classList.remove("hidden");
            classCard1 = target.className;
            idCard1 = target.id;
            document.getElementById(target.id).classList.add("visible"); //�nderung von hidden auf visible
            counter++;
        }
        else if (counter == 1) {
            document.getElementById(target.id).classList.remove("hidden");
            classCard2 = target.className;
            idCard2 = target.id;
            document.getElementById(target.id).classList.add("visible");
            //Timer, bevor sich die Karten wieder umdrehen
            setTimeout(function () {
                if (classCard1 == classCard2) {
                    document.getElementById(idCard1).classList.remove("visible");
                    document.getElementById(idCard2).classList.remove("visible");
                    document.getElementById(idCard1).classList.add("taken");
                    document.getElementById(idCard2).classList.add("taken");
                }
                else {
                    document.getElementById(idCard1).classList.remove("visible");
                    document.getElementById(idCard2).classList.remove("visible");
                    document.getElementById(idCard1).classList.add("hidden");
                    document.getElementById(idCard2).classList.add("hidden");
                }
            }, 2000);
            counter = 0;
        }
    }
    //Karten werden alle als hidden angezeigt
    function mixCards() {
        return "hidden";
    }
    /*Karten mischen*/
    function shuffleCards() {
        let i = cardArray.length;
        let j = 0;
        let temp = ""; //string ohne Textinhalt
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1)); //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }
    /*Spielfeld und Spielinfo im ts erzeugen lassen*/
    /*Spielfeld dynamisch erstellen */
    function createBoard() {
        let node = document.getElementById("Spielfeld");
        shuffleCards();
        let childNodeHTML = "";
        childNodeHTML += "<h2>Spielfeld</h2>";
        childNodeHTML += "<div>";
        for (let i = 0; i < cardArray.length; i++) {
            childNodeHTML += "<div>";
            childNodeHTML += "<div id=" + i + " attr=" + i + " class='";
            childNodeHTML += cardArray[i] + " " + mixCards(); //Aufruf der Funktion f�r den Status der Karte
            childNodeHTML += "'>";
            childNodeHTML += cardArray[i]; //cardArray wird ausgegeben
            childNodeHTML += "</div></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML bef�llen 
        console.log(childNodeHTML); //Aufruf auf der Konsole
    }
    /*Spielinformation dynamisch erstellen*/
    function gameInfo() {
        let node = document.getElementById("Spielinfo");
        let childNodeHTML = "";
        childNodeHTML += "<div>";
        for (let i = 0; i < player.length; i++) {
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: "; //Spielername wird erzeugt
            childNodeHTML += player[i];
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punktestand: "; //Punktestand wird erzeugt
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
        console.log(childNodeHTML); //Aufruf auf der Konsole
    }
    /* Hauptprogramm */
    function main() {
        console.log("main");
        /*Abfrage f�r die Anzahl der Spieler erstellen (mit numPlayers)*/
        //Funtion f�r die Spielerabfrage erstellen
        //Variable i definieren,, wenn i wahr ist
        let i = true;
        while (i) {
            //Popup f�r Spieleranzeige wird erstellt, 10 steht f�r das Dezimalsystem
            numPlayers = parseInt(prompt("Bitte wählen Sie zwischen 1 und 4 Spielern"), 10);
            //Die Spieleranzahl muss gr��er gleich 1 und kleiner gleich 4 sein, damit 1-4 Spieler m�glich sind
            if (numPlayers >= 1 && numPlayers <= 4) {
                //Ansonsten ist i falsch und die Schleife wird wiederholt
                i = false;
            }
        }
        //Schleife f�r die Abfrage der Spielernamen wird erzeugt, Variable i wird definiert, i=0, i ist kleiner als die Anzahl der Spieler, i wird hochgez�hlt
        for (let i = 0; i < numPlayers; i++) {
            //Popup f�r Namen der Spieler wird erzeugt, wenn es mehrere Spielr gibt wird i hochgez�hlt und der Name des n�chsten Spielers wird abgefragt
            player[i] = prompt("Bitte Spielernamen " + (i + 1) + " eingeben");
            //Wenn es keinen Spieler gibt, wird ein Spieler erzeugt, welcher Fruitninja hei�t
            if (player[i] == null) {
                player[i] = "Fruitninja";
            }
        }
        /* Abfrage f�r die Anzahl der Paare erstellen (mit numPairs)*/
        i = true;
        while (i) {
            //Popup f�r Kartenpaarabfrage wird erstellt, 10 steht f�r das Dezimalsystem
            numPairs = parseInt(prompt("Bitte wählen Sie zwischen 5 und 15 Kartenpaaren"), 10);
            //Die Anzahl der Kartenpaare muss gr��er gleich 5 und kleiner gleich 10 sein
            if (numPairs >= 5 && numPairs <= 15) {
                i = false;
            }
        }
        /* Schleife für die Kartenpaare */
        //Variable i wird definiert, i=0, ist kleiner als die Anzahl der Paare, i wird hochgez�hlt
        for (let i = 0; i < numPairs; i++) {
            //Karteninhalt wird verdoppelt, Karten werden verdoppelt/angeheftet
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
        }
        /*function gratulation() : void {
                if (mixCards() == "taken") {
                    alert("Gratulation");
                }
            } gratulation();*/
        /* Befehl zum Spielfeld erzeugen */
        createBoard();
        /* Befehl zum Spielinfo erzeugen */
        gameInfo();
    }
    // Add EventListener - Main() wird ausgef�hrt, sobald das DOM vollst�ndig geladen ist
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe3.js.map