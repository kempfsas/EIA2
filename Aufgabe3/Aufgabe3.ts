
namespace Memory {
    /*Variablen für das Spiel deklarieren*/
    let numPairs: number; //Anzahl Kartenpaare
    let numPlayers: number; //Anzahl Spieler

    /*Array*/
    let cardContent: string[] = ["Ananas", "Mango", "Papaya", "Kiwi", "Pfirsich", "Erdbeere", "Banane", "Apfel", "Birne", "Himbeere"];
    let cardArray: string[] = []; //Leeres Array, in das die Kartenpaare später hineingespeichert werden
    let player: string[] = []; //Leeres Array, in das die Spieler später hineingespeichert werden
    let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert --> umändern weil es sonst die Punkte nicht zählt??

    /*Für Aufgabe3*/
    let idCard1: string;
    let idCard2: string;
    let classCard1: string;
    let classCard2: string;

    let counter: number = 0;
    let l: number = 0;

    window.addEventListener("click", init);

    function init(_event: Event): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;
        //console.log(_event);
        if (counter == 0) {
            document.getElementById(target.id).classList.remove("hidden");
            classCard1 = target.className;
            idCard1 = target.id;
            document.getElementById(target.id).classList.add("visible"); //Änderung von hidden auf visible

            counter++;
        } else if (counter == 1) {
            document.getElementById(target.id).classList.remove("hidden");
            classCard2 = target.className;
            idCard2 = target.id;
            document.getElementById(target.id).classList.add("visible");

    //Timer, bevor sich die Karten wieder umdrehen
    setTimeout (function() {
        if (classCard1 == classCard2) {
            document.getElementById(idCard1).classList.remove("visible");
            document.getElementById(idCard2).classList.remove("visible");

            document.getElementById(idCard1).classList.add("taken");
            document.getElementById(idCard2).classList.add("taken");
          
            l++;
            
        } else {
            document.getElementById(idCard1).classList.remove("visible");
            document.getElementById(idCard2).classList.remove("visible");

            document.getElementById(idCard1).classList.add("hidden");
            document.getElementById(idCard2).classList.add("hidden");
        }
    }, 2000);
    
     graduation();       
            
    counter = 0;
    
    }
        
}


    
    
    
    //Karten werden alle als hidden angezeigt
    function mixCards(): string {
        return "hidden";
    }


    
    
    /*Karten mischen*/
    function shuffleCards(): void {
        let i: number = cardArray.length;
        let j: number = 0;
        let temp: string = ""; //string ohne Textinhalt
        while (--i > 0) { //Variable i(Länge des Arrays) wird immer um 1 herunter gezählt und muss immer größer 0 sein
            j = Math.floor(Math.random() * (i + 1)); //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
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
            childNodeHTML += cardArray[i] + " " + mixCards(); //Aufruf der Funktion für den Status der Karte
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

    
    function graduation(): void{
    
    if (l == numPairs){
        alert("Gratualation, du hast gewonnen!")
        
    }
}
    
    
    
    
    /* Hauptprogramm */
    function main(): void {
        console.log("main");
        /*Abfrage für die Anzahl der Spieler erstellen (mit numPlayers)*/
        //Funtion für die Spielerabfrage erstellen
        //Variable i definieren,, wenn i wahr ist
        let i: boolean = true;
        while (i) {
            //Popup für Spieleranzeige wird erstellt, 10 steht für das Dezimalsystem
            numPlayers = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 1 und 4 Spielern"), 10);
            //Die Spieleranzahl muss größer gleich 1 und kleiner gleich 4 sein, damit 1-4 Spieler möglich sind
            if (numPlayers >= 1 && numPlayers <= 4) {
                //Ansonsten ist i falsch und die Schleife wird wiederholt
                i = false;
            }
        }

        //Schleife für die Abfrage der Spielernamen wird erzeugt, Variable i wird definiert, i=0, i ist kleiner als die Anzahl der Spieler, i wird hochgezählt
        for (let i: number = 0; i < numPlayers; i++) {
            //Popup für Namen der Spieler wird erzeugt, wenn es mehrere Spielr gibt wird i hochgezählt und der Name des nächsten Spielers wird abgefragt
            player[i] = prompt("Bitte Spielernamen " + (i + 1) + " eingeben");
            //Wenn es keinen Spieler gibt, wird ein Spieler erzeugt, welcher Fruitninja heißt
            if (player[i] == null) {
                player[i] = "Fruitninja";
            }
        }

        /* Abfrage für die Anzahl der Paare erstellen (mit numPairs)*/
        i = true;
        while (i) {
            //Popup für Kartenpaarabfrage wird erstellt, 10 steht für das Dezimalsystem
            numPairs = parseInt(prompt("Bitte wÃ¤hlen Sie zwischen 5 und 15 Kartenpaaren"), 10);
            //Die Anzahl der Kartenpaare muss größer gleich 5 und kleiner gleich 10 sein
            if (numPairs >= 5 && numPairs <= 15) {
                i = false;
            }
        }

        /* Schleife fÃ¼r die Kartenpaare */
        //Variable i wird definiert, i=0, ist kleiner als die Anzahl der Paare, i wird hochgezählt
        for (let i: number = 0; i < numPairs; i++) {
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


    // Add EventListener - Main() wird ausgeführt, sobald das DOM vollständig geladen ist
    document.addEventListener("DOMContentLoaded", main);
}

