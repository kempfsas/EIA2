var Memory;
(function (Memory) {
    /*Variablen f�r das Spiel deklarieren*/
    let numPairs;
    let numPlayers;
    /*Array*/
    let cardContent = ["Ananas", "Mango", "Papaya", "Kiwi", "Pfirsich", "Erdbeere", "Banane", "Apfel", "Birne", "Himbeere"];
    let cardArray = [];
    let player = [];
    let score = [0, 0, 0, 0];
    /*Kartenansicht zuf�llig generieren lassen (Zufallsgenerator)*/
    /*mit welcher Wahrscheinlichkeit die Karte verdeckt, offen oder als bereits weggenommen angezeigt wird*/
    function mixCards() {
        let randomState = Math.random();
        if (randomState <= 0.5) {
            return "hidden";
        }
        else if (randomState > 0.5 && randomState <= 0.75) {
            return "taken";
        }
        else if (randomState > 0.75) {
            return "visible";
        }
    }
    /*Karten mischen*/
    function shuffleCards() {
        let i = cardArray.length;
        let j = 0;
        let temporarilyShown = "";
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temporarilyShown = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[j] = temporarilyShown;
        }
    }
    /*Spielfeld und Spielinfo im ts erzeugen lassen*/
    /*Spielfeld erstellen */
    function createBoard() {
        let node = document.getElementById("Spielfeld");
        shuffleCards();
        let childNodeHTML = "";
        childNodeHTML += "<h2>Spielfeld</h2>";
        childNodeHTML += "<div class='card'>";
        for (let i = 0; i < cardArray.length; i++) {
            childNodeHTML += "<div>";
            childNodeHTML += "<div class=\"";
            childNodeHTML += mixCards();
            childNodeHTML += "\">";
            childNodeHTML += cardArray[i];
            childNodeHTML += "</div></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
        console.log(childNodeHTML);
    }
    /*Spielinformation erstellen*/
    function gameInfo() {
        let node = document.getElementById("Spielinfo");
        let childNodeHTML = "";
        childNodeHTML += "<div>";
        for (let i = 0; i < player.length; i++) {
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            childNodeHTML += "<p>Spielername: ";
            childNodeHTML += player[i];
            childNodeHTML += "</p>";
            childNodeHTML += "<p>Punktestand: ";
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
        console.log(childNodeHTML);
    }
    /* Hauptprogramm */
    function main() {
        console.log("main");
        /*Abfrage f�r die Anzahl der Spieler erstellen (mit numPlayers)*/
        let i = true;
        while (i) {
            numPlayers = parseInt(prompt("Bitte wählen Sie zwischen 1 und 4 Spielern"), 10);
            if (numPlayers >= 1 && numPlayers <= 4) {
                i = false;
            }
        }
        for (let i = 0; i < numPlayers; i++) {
            player[i] = prompt("Bitte Spielernamen " + (i + 1) + " eingeben");
            if (player[i] == null) {
                player[i] = "Mickey";
            }
        }
        /* Abfrage f�r die Anzahl der Paare erstellen (mit numPairs)*/
        i = true;
        while (i) {
            numPairs = parseInt(prompt("Bitte wählen Sie zwischen 5 und 15 Kartenpaaren"), 10);
            if (numPairs >= 5 && numPairs <= 15) {
                i = false;
            }
        }
        /* Schleife für die Kartenpaare */
        for (let i = 0; i < numPairs; i++) {
            /* cardContent 2x an cardArray [] anf�gen */
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
        }
        /* Befehl zum Spielfeld erzeugen */
        createBoard();
        /* Befehl zum Spielinfo erzeugen */
        gameInfo();
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=Memoryneu.js.map