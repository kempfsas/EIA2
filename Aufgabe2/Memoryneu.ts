
namespace Memory {
    /*Variablen für das Spiel deklarieren*/
    let numPairs: number;
    let numPlayers: number;

    /*Array*/
    let cardContent: string[] = ["Ananas", "Mango", "Papaya", "Kiwi", "Pfirsich", "Erdbeere", "Banane", "Apfel", "Birne", "Himbeere"];
    let cardArray: string[] = [];
    let player: string[] = [];
    let score: number[] = [0, 0, 0, 0];

    /*Kartenansicht zufällig generieren lassen (Zufallsgenerator)*/
    /*mit welcher Wahrscheinlichkeit die Karte verdeckt, offen oder als bereits weggenommen angezeigt wird*/
    function mixCards(): string {
        let randomState: number = Math.random();
        if (randomState <= 0.5) { /*50%ige Wahrscheinlichkeit, dass die Karte verdeckt angezeigt wird*/
            return "hidden";
        } else if (randomState > 0.5 && randomState <= 0.75) {
            return "taken";
        } else if (randomState > 0.75) {
            return "visible";
        }
    }


    /*Karten mischen*/
    function shuffleCards(): void {
        let i: number = cardArray.length;
        let j: number = 0;
        let temporarilyShown: string = "";
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temporarilyShown = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[j] = temporarilyShown;
        }
    }


    /*Spielfeld und Spielinfo im ts erzeugen lassen*/

    /*Spielfeld erstellen */
    function createBoard(): void {
        let node: any = document.getElementById("Spielfeld");
        shuffleCards();
        let childNodeHTML: string = "";
        childNodeHTML += "<h2>Spielfeld</h2>";
        childNodeHTML += "<div class='card'>";
        for (let i: number = 0; i < cardArray.length; i++) {
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
    function gameInfo(): void {
        let node: any = document.getElementById("Spielinfo");
        let childNodeHTML: string = "";
        childNodeHTML += "<div>";
        for (let i: number = 0; i < player.length; i++) {
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
    function main(): void {
        console.log("main");
        /*Abfrage für die Anzahl der Spieler erstellen (mit numPlayers)*/
        let i: boolean = true;
        while (i) {
            numPlayers = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 1 und 4 Spielern"), 10);
            if (numPlayers >= 1 && numPlayers <= 4) {
                i = false;
            }
        }

        for (let i: number = 0; i < numPlayers; i++) {
            player[i] = prompt("Bitte Spielernamen " + ( i +1) + " eingeben");
            if (player[i] == null) {
                player[i] = "Mickey";
            }
        }

        /* Abfrage für die Anzahl der Paare erstellen (mit numPairs)*/
        i = true;
        while (i) {
            numPairs = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 5 und 15 Kartenpaaren"), 10);
            if (numPairs >= 5 && numPairs <= 15) {
                i = false;
            }
        }

        /* Schleife fÃ¼r die Kartenpaare */
        for (let i: number = 0; i < numPairs; i++) {
            /* cardContent 2x an cardArray [] anfï¿½gen */
            cardArray.push(cardContent[i]);
            cardArray.push(cardContent[i]);
        }

        /* Befehl zum Spielfeld erzeugen */
        createBoard();     
        /* Befehl zum Spielinfo erzeugen */
        gameInfo();
        
        }
 
 
    
    document.addEventListener("DOMContentLoaded", main);
}

