//Dieser Code wurde in Zusammenarbeit mit Arbeitsgruppe gr�n und unter Anleitung von Melvin erstellt.
var Memory;
(function (Memory) {
    // Variablen deklarieren
    let cardContent = ["Panda", "Koala", "Tiger", "Delfin", "Hase", "Reh", "Katze", "Hund", "Giraffe", "Antilope"];
    let cardArray = [];
    // leeres Array, hier werden die ben�tigten Karten f�r das Spiel als divs hineingespeichert
    let numPairs;
    let numPlayers;
    let playerInfo;
    let cardField;
    function createCard(textDerAufDieKarteSoll, _state) {
        let card = document.createElement("div");
        // div wird erzeugt
        card.innerText = textDerAufDieKarteSoll;
        // Text aus dem Array soll auf einer Karte erscheinen
        card.setAttribute("class", "card " + _state);
        // Attribut wird hinzugef�gt: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten
    }
    /******** Dieser Part wurde von Melvin Busch �bernommen, da wir nicht wissen, wie es anders gel�st werden kann *********/
    class Player {
        constructor(_name) {
            this.name = _name;
            this.score = 0;
        }
        scoreUp() {
            this.score += 10;
            return this.score;
        }
        show() {
            this.player = document.createElement("div");
            this.player.innerHTML = `
          <span class="player-name">${this.name}</span>
          <span class="player-score">Punkte: ${this.score}</span>`;
            playerInfo.appendChild(this.player);
        }
    }
    /*************** Part Ende *************/
    // Shuffle Arrays
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe = das Array ist jetzt durchmischt
    }
    // Zufallsgenerator als eigene Funktion = sch�ner & funktioniert besser :D
    function randomState() {
        let randomState = Math.random();
        // zuf�llige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // dies ist die 50%ige Wahrscheinlichkeit, dass die Karte verdeckt ist
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl gr��er als 0,5 und kleiner gleich 0,75 - dann Status: taken
            return "taken";
        }
        else if (randomState > .75) {
            // oder wenn: Wenn Zahl gr��er als 0,75 - dann Status: visible
            return "visible";
        }
    }
    function main() {
        // Spieler soll die Anzahl der Kartenpaare eingeben
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            numPairs = 8;
        }
        // Spieler sollen angeben, wie viele mitspielen wollen
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numPlayers > 4 ? numPlayers = 4 : numPlayers = numPlayers;
        // DOM abh�ngige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        // Spielkarten erzeugen lassen
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // word an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
        }
        // Karten mischen
        randomMix(cardArray);
        // Karten dem Spielbrett hinzuf�gen
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        // Spieler Anzeige generieren
        for (let i = 0; i < numPlayers; i++) {
            let player = new Player("Spieler " + (i + 1));
            player.show();
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory.js.map