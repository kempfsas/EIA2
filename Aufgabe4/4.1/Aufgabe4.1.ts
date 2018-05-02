namespace Aufgabe_3 {

    //Variablen definieren
    //Anzehl Spieler
    let numPlayers: number = 0;
    //Anzahl Kartenpaare
    let numPairs: number = 0;
    //Array welches alle offenen Karten trackt.
    let openCards: HTMLElement[] = [];
    //Variable counter anlegen
    let counter: number = 0;
    //Variable l für die Gratulation erstellen
    let l: number = 0;
    let nehmeKlicksAn: boolean = true;
    //Karten einen Inhalt geben
    let cardsFruits: string[] = ["Ananas", "Mango", "Papaya", "Kiwi", "Pfirsich", "Erdbeere", "Banane", "Apfel", "Birne", "Himbeere"];
    let cardsAnimals: string[] = ["Panda", "Koala", "LÃ¶we", "Delfin", "Hase", "BÃ¤r", "Katze", "Hund", "KÃ¤nguru", "Maus"];
    let cardsVeggies: string[] = ["Tomate", "Karotte", "Kürbis", "Zucchini", "Erbse", "Mais", "Spargel", "Bohne", "Kartoffel", "Pilz", "Paprika"];
    //Leeres Array um die Karten später hinein abspeichern zu können
    let cardArray: string[] = [];
    //Arrays erstellen um  den Score und Anzahl der Spieler später abzuspeichern
    let player: string[] = [];
    let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    
    window.addEventListener( "click", init );
    //Funktion erstellen
    function init( _event: Event ): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;
        //Konsolenausgabe
        console.log( _event );
        //Bedingung umgedrehte Karte und die Klicks müssen angenommen werden
        if ( target.classList.contains( "hidden" ) && nehmeKlicksAn ) {
            //Wenn der Counter kleiner 2, hidden verschwindet und die angeklickte Karte wird in das openCard Array gepusht
            if ( counter < 2 ) {
                target.classList.remove( "hidden" );
                openCards.push( target );
            }
            //Counter wird hochgezählt
            counter++;
            //Counter ist gleich Zwei
            if ( counter == 2 ) {
                //Es werden keine Klicks auf der Karte mehr angenommen
                nehmeKlicksAn = false;
                //Counter wird auf 0 gesetzt
                counter = 0;
                //Inhalt der Karten wird überprüft, sind die Karten gleich oder nicht?
                if ( openCards[0].innerText === openCards[1].innerText ) {
                    //setTimeout Funktion
                    setTimeout(() => {
                        //Die Karten werden genommen
                        openCards[0].classList.add( "taken" );
                        openCards[1].classList.add( "taken" );
                        //Das openCards Array wird geleert
                        openCards = [];
                        //Es werden wieder Klicks angenommen
                        nehmeKlicksAn = true;
                        //Wenn keine Karte mehr mit der Klasse hidden gefunden wurde ist das Spiel vorbei und die Gratulationsbox erscheint
                        if ( document.getElementsByClassName( "hidden" ).length == 0 ) {
                            alert( "Herzlichen Glückwunsch, du hast gewonnen!" )
                        }
                        //Die Karten werden nach 2 sec. von der Spielfläche entfernt
                    }, 2000 );

                }
                else {

                    //setTimeout Funktion
                    setTimeout(() => {
                        //Wenn die Karten nicht gleich sind drehen sie sich wieder um
                        openCards[0].classList.add( "hidden" );
                        openCards[1].classList.add( "hidden" );
                        //Das openCards Array wird wieder geleert
                        openCards = [];
                        //Danach werden wieder Klicks angenommen
                        nehmeKlicksAn = true;
                        //Es dauert 2 sek. bis sich die Karten wieder umgedreht haben
                    }, 2000 );
                }
            }
        }
    }

    //Funktion erstellen, damit alle Karten umgedreht sind beim Spielbeginn
    function randomState(): string {
        //Alle Karten sind umgedreht
        return "hidden";
    }

    //Karten mischen -> Shuffle Funktion (Karten sollen durchgemischt werden, es sollen nicht immer die selben Karten auf dem Spielfeld erscheinen)        
    function shuffleCards(): void {
        //Variable i wird definiert, sie ist so groß wie die Länge des cardArrays
        let i: number = cardArray.length;
        //Variable j wird definiert, sie entspricht der Zahl 0
        let j: number = 0;
        //Variable temp wird definiert als string ohne Textinhalt.
        let temp: string = "";
        //Variable i(Länge des Arrays) wird immer um 1 herunter gezählt und muss immer größer 0 sein
        while ( --i > 0 ) {
            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
            j = Math.floor( Math.random() * ( i + 1 ) );
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }

    
    
     /*Spielfeld und Spielinfo im ts erzeugen lassen*/

    /*Spielfeld dynamisch erstellen */
    function createBoard(): void {
        let node: any = document.getElementById("Spielfeld");
        shuffleCards();
        let childNodeHTML: string = "";
        childNodeHTML += "<h2>Spielfeld</h2>";
        childNodeHTML += "<div >";
        for (let i: number = 0; i < cardArray.length; i++) { //Schleife erstellen, i=0, muss kleiner als die cardArray Länge sein und wird hochgezählt
            childNodeHTML += "<div>";
            childNodeHTML += "<div id = " + i + " attr = " + i + " class = ' ";
            childNodeHTML += cardArray[i] + " " + randomState(); //Aufruf der Funktion für den Status der Karte
            childNodeHTML += " ' >";
            childNodeHTML += cardArray[i]; //cardArray wird ausgegeben
            childNodeHTML += "</div></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML; //Inhalt der Knoten mit childNodeHTML befüllen 

        console.log(childNodeHTML); //Aufruf auf der Konsole
    }   
    

     /*Spielinformation dynamisch erstellen*/
    function gameInfo(): void {
        let node: any = document.getElementById("Spielinfo");
        let childNodeHTML: string = "";
        childNodeHTML += "<div>";
        for (let i: number = 0; i < player.length; i++) {
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
    function gratulation(): void {

        //Es wird geprüft, ob die Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind
        if ( l == numPairs ) {

            //Alertbox erstellen
            alert( "Herzlichen Glückwunsch, du hast gewonnen!" )

        }
    }
 /* Hauptprogramm */
    /*function main(): void {
        console.log("main");*/
        /*Abfrage für die Anzahl der Spieler erstellen (mit numPlayers)*/
        //Funtion für die Spielerabfrage erstellen
        //Variable i definieren,, wenn i wahr ist
        //let i: boolean = true;
       // while (i) {
            //Popup für Spieleranzeige wird erstellt, 10 steht für das Dezimalsystem
            //numPlayers = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 1 und 4 Spielern"), 10);
            //Die Spieleranzahl muss größer gleich 1 und kleiner gleich 4 sein, damit 1-4 Spieler möglich sind
            //if (numPlayers >= 1 && numPlayers <= 4) {
                //Ansonsten ist i falsch und die Schleife wird wiederholt
               /* i = false;
            }
        }*/

        //Schleife für die Abfrage der Spielernamen wird erzeugt, Variable i wird definiert, i=0, i ist kleiner als die Anzahl der Spieler, i wird hochgezählt
       // for (let i: number = 0; i < numPlayers; i++) {
            //Popup für Namen der Spieler wird erzeugt, wenn es mehrere Spielr gibt wird i hochgezählt und der Name des nächsten Spielers wird abgefragt
          //  player[i] = prompt("Bitte Spielernamen " + (i + 1) + " eingeben");
            //Wenn es keinen Spieler gibt, wird ein Spieler erzeugt, welcher Fruitninja heißt
           /* if (player[i] == null) {
                player[i] = "Fruitninja";
            }
        }*/

        /* Abfrage für die Anzahl der Paare erstellen (mit numPairs)*/
        //i = true;
        //while (i) {
            //Popup für Kartenpaarabfrage wird erstellt, 10 steht für das Dezimalsystem
          //  numPairs = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 5 und 15 Kartenpaaren"), 10);
            //Die Anzahl der Kartenpaare muss größer gleich 5 und kleiner gleich 10 sein
           /* if (numPairs >= 5 && numPairs <= 15) {
                i = false;
            }
        }*/

        /* Schleife fÃ¼r die Kartenpaare */
        //Variable i wird definiert, i=0, ist kleiner als die Anzahl der Paare, i wird hochgezählt
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

    export function main(): void {

        //Funtion fÃ¼r die Spielerabfrage erstellen

        let spielerAnzahl: number;
        
        let collection: NodeListOf<Element> = document.getElementById("spieleranzahl").getElementsByTagName("input");

        for (let i = 0; i < collection.length; i++) {
            if ((<HTMLInputElement>collection[i]).checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }

        collection = document.getElementById("name").getElementsByTagName("input");

        for (let i = 0; i < collection.length; i++) {
            if ((<HTMLInputElement>collection[i]).value == "" && i == 0) {
                player.push("Jeff")
            }
            else if ((<HTMLInputElement>collection[i]).value != "") {
                player.push((<HTMLInputElement>collection[i]).value)
            }
        }



        collection = document.getElementById("kartensatz").getElementsByTagName("input");

        for (let i = 0; i < collection.length; i++) {
            if ((<HTMLInputElement>collection[i]).checked) {
                switch (i) {
                    case 0: fuegeKartenHinzu(cardsFruits); break;
                    case 1: fuegeKartenHinzu(cardsAnimals); break;
                    case 2: fuegeKartenHinzu(cardsVeggies); break;
                }
            }
        }
        
       

        /* Befehl zum Spielfeld erzeugen */
        createBoard();
        /* Befehl zum Spielinfo erzeugen */
        gameInfo();
        
        document.getElementById("starteinstellungen").remove()

    }

    
    
        export function onInputEvent(value: number) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        numPairs = value;
    }

    function fuegeKartenHinzu(karten: string[]) {

        for (let i = 0; i < numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }

    }

    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener("DOMContentLoaded", main);
    }