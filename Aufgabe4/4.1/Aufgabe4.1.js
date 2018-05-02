var Aufgabe_3;
(function (Aufgabe_3) {
    //Variablen definieren
    //Anzehl Spieler
    let numPlayers = 0;
    //Anzahl Kartenpaare
    let numPairs = 0;
    //Array welches alle offenen Karten trackt.
    let openCards = [];
    //Variable counter anlegen
    let counter = 0;
    //Variable l f�r die Gratulation erstellen
    let l = 0;
    let nehmeKlicksAn = true;
    //Karten einen Inhalt geben
    let cardsFruits = ["Ananas", "Mango", "Papaya", "Kiwi", "Pfirsich", "Erdbeere", "Banane", "Apfel", "Birne", "Himbeere"];
    let cardsAnimals = ["Panda", "Koala", "Löwe", "Delfin", "Hase", "Bär", "Katze", "Hund", "Känguru", "Maus"];
    let cardsVeggies = ["Tomate", "Karotte", "K�rbis", "Zucchini", "Erbse", "Mais", "Spargel", "Bohne", "Kartoffel", "Pilz", "Paprika"];
    //Leeres Array um die Karten sp�ter hinein abspeichern zu k�nnen
    let cardArray = [];
    //Arrays erstellen um  den Score und Anzahl der Spieler sp�ter abzuspeichern
    let player = [];
    let score = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    window.addEventListener("click", init);
    //Funktion erstellen
    function init(_event) {
        let target = _event.target;
        //Konsolenausgabe
        console.log(_event);
        //Bedingung umgedrehte Karte und die Klicks m�ssen angenommen werden
        if (target.classList.contains("hidden") && nehmeKlicksAn) {
            //Wenn der Counter kleiner 2, hidden verschwindet und die angeklickte Karte wird in das openCard Array gepusht
            if (counter < 2) {
                target.classList.remove("hidden");
                openCards.push(target);
            }
            //Counter wird hochgez�hlt
            counter++;
            //Counter ist gleich Zwei
            if (counter == 2) {
                //Es werden keine Klicks auf der Karte mehr angenommen
                nehmeKlicksAn = false;
                //Counter wird auf 0 gesetzt
                counter = 0;
                //Inhalt der Karten wird �berpr�ft, sind die Karten gleich oder nicht?
                if (openCards[0].innerText === openCards[1].innerText) {
                    //setTimeout Funktion
                    setTimeout(() => {
                        //Die Karten werden genommen
                        openCards[0].classList.add("taken");
                        openCards[1].classList.add("taken");
                        //Das openCards Array wird geleert
                        openCards = [];
                        //Es werden wieder Klicks angenommen
                        nehmeKlicksAn = true;
                        //Wenn keine Karte mehr mit der Klasse hidden gefunden wurde ist das Spiel vorbei und die Gratulationsbox erscheint
                        if (document.getElementsByClassName("hidden").length == 0) {
                            alert("Herzlichen Gl�ckwunsch, du hast gewonnen!");
                        }
                        //Die Karten werden nach 2 sec. von der Spielfl�che entfernt
                    }, 2000);
                }
                else {
                    //setTimeout Funktion
                    setTimeout(() => {
                        //Wenn die Karten nicht gleich sind drehen sie sich wieder um
                        openCards[0].classList.add("hidden");
                        openCards[1].classList.add("hidden");
                        //Das openCards Array wird wieder geleert
                        openCards = [];
                        //Danach werden wieder Klicks angenommen
                        nehmeKlicksAn = true;
                        //Es dauert 2 sek. bis sich die Karten wieder umgedreht haben
                    }, 2000);
                }
            }
        }
    }
    //Funktion erstellen, damit alle Karten umgedreht sind beim Spielbeginn
    function randomState() {
        //Alle Karten sind umgedreht
        return "hidden";
    }
    //Karten mischen -> Shuffle Funktion (Karten sollen durchgemischt werden, es sollen nicht immer die selben Karten auf dem Spielfeld erscheinen)        
    function shuffleCards() {
        //Variable i wird definiert, sie ist so gro� wie die L�nge des cardArrays
        let i = cardArray.length;
        //Variable j wird definiert, sie entspricht der Zahl 0
        let j = 0;
        //Variable temp wird definiert als string ohne Textinhalt.
        let temp = "";
        //Variable i(L�nge des Arrays) wird immer um 1 herunter gez�hlt und muss immer gr��er 0 sein
        while (--i > 0) {
            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
            j = Math.floor(Math.random() * (i + 1));
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
        childNodeHTML += "<div >";
        for (let i = 0; i < cardArray.length; i++) {
            childNodeHTML += "<div>";
            childNodeHTML += "<div id = " + i + " attr = " + i + " class = ' ";
            childNodeHTML += cardArray[i] + " " + randomState(); //Aufruf der Funktion f�r den Status der Karte
            childNodeHTML += " ' >";
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
    //Funktion gratulation erstellen
    function gratulation() {
        //Es wird gepr�ft, ob die Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind
        if (l == numPairs) {
            //Alertbox erstellen
            alert("Herzlichen Gl�ckwunsch, du hast gewonnen!");
        }
    }
    /* Hauptprogramm */
    /*function main(): void {
        console.log("main");*/
    /*Abfrage f�r die Anzahl der Spieler erstellen (mit numPlayers)*/
    //Funtion f�r die Spielerabfrage erstellen
    //Variable i definieren,, wenn i wahr ist
    //let i: boolean = true;
    // while (i) {
    //Popup f�r Spieleranzeige wird erstellt, 10 steht f�r das Dezimalsystem
    //numPlayers = parseInt(prompt("Bitte wählen Sie zwischen 1 und 4 Spielern"), 10);
    //Die Spieleranzahl muss gr��er gleich 1 und kleiner gleich 4 sein, damit 1-4 Spieler m�glich sind
    //if (numPlayers >= 1 && numPlayers <= 4) {
    //Ansonsten ist i falsch und die Schleife wird wiederholt
    /* i = false;
 }
}*/
    //Schleife f�r die Abfrage der Spielernamen wird erzeugt, Variable i wird definiert, i=0, i ist kleiner als die Anzahl der Spieler, i wird hochgez�hlt
    // for (let i: number = 0; i < numPlayers; i++) {
    //Popup f�r Namen der Spieler wird erzeugt, wenn es mehrere Spielr gibt wird i hochgez�hlt und der Name des n�chsten Spielers wird abgefragt
    //  player[i] = prompt("Bitte Spielernamen " + (i + 1) + " eingeben");
    //Wenn es keinen Spieler gibt, wird ein Spieler erzeugt, welcher Fruitninja hei�t
    /* if (player[i] == null) {
         player[i] = "Fruitninja";
     }
 }*/
    /* Abfrage f�r die Anzahl der Paare erstellen (mit numPairs)*/
    //i = true;
    //while (i) {
    //Popup f�r Kartenpaarabfrage wird erstellt, 10 steht f�r das Dezimalsystem
    //  numPairs = parseInt(prompt("Bitte wählen Sie zwischen 5 und 15 Kartenpaaren"), 10);
    //Die Anzahl der Kartenpaare muss gr��er gleich 5 und kleiner gleich 10 sein
    /* if (numPairs >= 5 && numPairs <= 15) {
         i = false;
     }
 }*/
    /* Schleife für die Kartenpaare */
    //Variable i wird definiert, i=0, ist kleiner als die Anzahl der Paare, i wird hochgez�hlt
    //for (let i: number = 0; i < numPairs; i++) {
    //Karteninhalt wird verdoppelt, Karten werden verdoppelt/angeheftet
    /*cardArray.push(cardContent[i]);
    cardArray.push(cardContent[i]);
}*/
    /*function gratulation() : void {
            if (mixCards() == "taken") {
                alert("Gratulation");
            }
        } gratulation();*/
    //Hauptfunktion wird erzeugt
    //Funtkion main aufstellen
    function main() {
        //Funtion für die Spielerabfrage erstellen
        let spielerAnzahl;
        let collection = document.getElementById("spieleranzahl").getElementsByTagName("input");
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }
        collection = document.getElementById("name").getElementsByTagName("input");
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].value == "" && i == 0) {
                player.push("Jeff");
            }
            else if (collection[i].value != "") {
                player.push(collection[i].value);
            }
        }
        collection = document.getElementById("kartensatz").getElementsByTagName("input");
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].checked) {
                switch (i) {
                    case 0:
                        fuegeKartenHinzu(cardsFruits);
                        break;
                    case 1:
                        fuegeKartenHinzu(cardsAnimals);
                        break;
                    case 2:
                        fuegeKartenHinzu(cardsVeggies);
                        break;
                }
            }
        }
        /* Befehl zum Spielfeld erzeugen */
        createBoard();
        /* Befehl zum Spielinfo erzeugen */
        gameInfo();
        document.getElementById("starteinstellungen").remove();
    }
    Aufgabe_3.main = main;
    function onInputEvent(value) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        numPairs = value;
    }
    Aufgabe_3.onInputEvent = onInputEvent;
    function fuegeKartenHinzu(karten) {
        for (let i = 0; i < numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }
    }
    // Add EventListener - Main() wird ausgef�hrt, sobald das DOM vollst�ndig geladen ist
    document.addEventListener("DOMContentLoaded", main);
})(Aufgabe_3 || (Aufgabe_3 = {}));
//# sourceMappingURL=Aufgabe4.1.js.map