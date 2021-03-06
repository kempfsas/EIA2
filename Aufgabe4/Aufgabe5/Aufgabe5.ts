
namespace Aufgabe5 {

    //Variablen definieren
    //Anzehl Spieler
    let numPlayers: number = 0;

    //Anzahl Kartenpaare
    export let numPairs: number = 5;

    //Array welches alle offenen Karten trackt.
    let openCards: HTMLElement[] = [];

    //Variable des momentanen Kartendecks
    let currentCardDeck: Deck = undefined;


    //Variable counter anlegen
    let counter: number = 0;


    //Variable l f�r die Gratulation erstellen
    let l: number = 0;

    let nehmeKlicksAn: boolean = true;


    //Leeres Array um die Karten sp�ter hinein abspeichern zu k�nnen
    let cardArray: string[] = [];

    //Arrays erstellen um  den Score und Anzahl der Spieler sp�ter abzuspeichern
    let playerNames: string[] = [];
    let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    window.addEventListener( "click", verarbeiteKlick );

    populateDecks();


    //Funktion erstellen
    function verarbeiteKlick( _event: Event ): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;

        //Konsolenausgabe
        console.log( _event );

        //Bedingung umgedrehte Karte und die Klicks m�ssen angenommen werden
        if ( target.classList.contains( "hidden" ) && nehmeKlicksAn ) {

            //Wenn der Counter kleiner 2, hidden verschwindet und die angeklickte Karte wird in das openCard Array gepusht
            if ( counter < 2 ) {
                target.classList.remove( "hidden" );
                openCards.push( target );
            }

            //Counter wird hochgez�hlt
            counter++;

            //Counter ist gleich Zwei
            if ( counter == 2 ) {

                //Es werden keine Klicks auf der Karte mehr angenommen
                //d.h. man kann die Karte nur einmal anklicken
                nehmeKlicksAn = false;

                //Counter wird auf 0 gesetzt
                counter = 0;

                //Inhalt der Karten wird �berpr�ft, sind die Karten gleich oder nicht?
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

                        //Wenn keine Karte mehr mit der Klasse hidden gefunden wurde ist das Spiel vorbei 
                        //und das Pop-up f�r die Gratulation zum Gewinn plopt auf
                        if ( document.getElementsByClassName( "hidden" ).length == 0 ) {
                            alert( "Herzlichen Gl�ckwunsch, du hast das Spiel gewonnen!" )
                        }

                        //Das gefundene Kartenpaar wird nach 2 sec. von der Spielfl�che entfernt
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
    export function randomState(): string {

        //Alle Karten sind zu Beginn des Spiels umgedreht
        return "hidden";
    }

    //Karten mischen -> Shuffle Funktion (Karten sollen durchgemischt werden, 
    //damit nicht immer die selben Karten auf dem Spielfeld sind
    function shuffleCards(): void {




        //Variable i wird definiert, sie ist so gro� wie die L�nge des cardArrays
        let i: number = cardArray.length;

        //Variable j wird definiert, sie entspricht der Zahl 0
        let j: number = 0;

        //Variable temp wird definiert als string ohne Textinhalt.
        let temp: string = "";

        //Variable i(L�nge des Arrays) wird immer um 1 herunter gez�hlt und muss immer gr��er 0 sein
        while ( --i > 0 ) {

            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
            j = Math.floor( Math.random() * ( i + 1 ) );
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }

    //Spielfeld wird erzeugt
    //Funktion wird erstellt, um das Hauptspielfeld zu erzeugen
    function createGame(): void {

        //Aufruf der id im Html Dokument
        let node: any = document.getElementById( "Spielfeld" );

        //Funktion shuffleCards wird aufgerufen, damit die Karten bei jedem Spiel gemischelt werden
        shuffleCards();
        
        //�berschrift wird erstellt
        let header = document.createElement("h2");
        header.innerText = "Spielfeld";
        node.appendChild(header);

        //Spielfeld innerhalb eines Divs
        let spielFeld = document.createElement("div");

        for ( let i: number = 0; i < cardArray.length; i++ ) {

            let card = document.createElement("div");
            card.id = i.toString();
            card.setAttribute("attr", i.toString());

            card.classList.add(cardArray[i]);
            card.classList.add(randomState());

            card.textContent = cardArray[i];
            
            //CSS wird mit card.style definiert
            card.style.backgroundColor = currentCardDeck.color;
            card.style.fontFamily = currentCardDeck.font;
            card.style.fontSize = currentCardDeck.size + "px";
            card.style.color = currentCardDeck.textColor;

            spielFeld.appendChild(card);
        }

        node.appendChild(spielFeld);

        //Ausgabe auf die Konsole

    }

    //Spieleranzeige erstellen
    //Funktion playerInfo erstellen
    function playerInfo(): void {

        //Aufruf der id im Html Dokument
        let node: any = document.getElementById( "Spielinfo" );

        //HTML string
        let childNodeHTML: string = "";

        //Div erzeugen
        childNodeHTML += "<div>";

        //Schleife erstellen, i=0, i ist gr��er als die L�nge des Spieler Arrays, i wird hochgez�hlt
        for ( let i: number = 0; i < playerNames.length; i++ ) {

            //Id "Spieler" wird erzeugt (untergeordnete id)
            childNodeHTML += "<div id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";

            //Paragraph f�r Spielrnamen wird erzeugt
            childNodeHTML += "<p>Spielername: ";
            childNodeHTML += playerNames[i];
            childNodeHTML += "</p>";

            //Paragraph f�r Punktestand wird erzeugt
            childNodeHTML += "<p>Punktestand: ";

            //Zugriff auf den Punktestandarray
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
        }

        //Div wird geschlossen
        childNodeHTML += "</div>";

        //Inhalt der Knoten mit childNodeHTML bef�llen
        node.innerHTML += childNodeHTML;

        //Ausgabe auf die Konsole
        console.log( childNodeHTML );
    }

    //Funktion graduation erstellen
    function gratulation(): void {

        //Es wird gepr�ft, ob die Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind
        if ( l == numPairs ) {

            //Alertbox erstellen
            alert( "Herzlichen Gl�ckwunsch, du hast das Spiel gewonnen!" )

        }
    }

    //Hauptfunktion wird erzeugt
    //Funtkion main aufstellen
    export function main(): void {

        //Funtion f�r die Spielerabfrage erstellen
        
        //Variable f�r Spielernzahl definieren
        let spielerAnzahl: number;
    
        //Variable collection als NodeListOfElement
    
        //NodeList Objekte sind Sammlungen von Knoten
        
        let collection: NodeListOf<Element> = document.getElementById("spieleranzahl").getElementsByTagName("input");

        // i=0, gr��er als die L�nge von collection und wird hochgez�hlt
    
        for (let i = 0; i < collection.length; i++) {

            //Spieleranzahl wird hochgez�hlt 
            
            if ((<HTMLInputElement>collection[i]).checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }
        
        //Eingabe Spielernamen
        collection = document.getElementById("name").getElementsByTagName("input");

        //Wenn kein Spielername eingegeben wurde, hei�t der Spieler Jeff
        
        for (let i = 0; i < collection.length; i++) {
            if ((<HTMLInputElement>collection[i]).value == "" && i == 0) {
                playerNames.push("Jeff")
            }
            
            //Ansonsten wird der Spielername ins Spiel gepusht
            
            else if ((<HTMLInputElement>collection[i]).value != "") {
                playerNames.push((<HTMLInputElement>collection[i]).value)
            }
        }
        
        //Auswahl des Kartensatzes
        collection = document.getElementById("kartensatz").getElementsByTagName("input");

        
        //Wenn beim Kartendeck nichts ausgew�hlt wird, erscheint automatisch das Kartendeck "animals"
        if (currentCardDeck == undefined) //wenn kein Kartendeck definiert ist
            currentCardDeck = decks["animals"];
        
        //Karten werden erzeugt
        populateCardArray(currentCardDeck.content);

        //Spielfeld wird erzeugt
        createGame();

        //Spielinfo wird erzeugt
        playerInfo();
        
        //Starteinstellung wird nach der Einstellung gel�scht
        document.getElementById("starteinstellungen").remove()

    }
    
    //F�r den Kartenpaare Slider
    

    export function onInputEvent(value: number) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        numPairs = value;
    }

    //Karten werden durch die Funktion erstellt
    
    function populateCardArray(karten: string[]) {
        
        //Kartenpaare werden erzeugt
        for (let i = 0; i < numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }

    }

    //F�r Auswahl des Kartensatzes, damit sich die L�nge anpasst
    
    export function bearbeiteKartenSatzKlick(element: HTMLInputElement) {
        currentCardDeck = decks[element.value];
        repopulateCardForm();
    }
    
    //Fehlererkennung (Slider ansich �ndert sich)
    function repopulateCardForm() {
        let kartenPaareElement = <HTMLInputElement>document.getElementById("kartenpaare");
        kartenPaareElement.max = currentCardDeck.content.length.toString();

        let maxWert = currentCardDeck.content.length;
        let momentanerWert = parseInt(kartenPaareElement.value);

        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString()
        }

        //Update des HTML (Zahl neben dem Slider �ndert sich --> Slider wird nach oben gez�hlt)
        
        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value;
    }
    
    //Spieleranzahl und Spielername werden erstellt
    export function bearbeiteSpielerZahlKlick(element: HTMLInputElement) {
        
        //parseInt = String wird zu einer ganzen Zahl umgewandelt
        
        let spielerZahl = parseInt(element.value);

        for (let i = 1; i <= 4; i++) {
            
            //`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung  
            
            let inputElement = <HTMLInputElement>document.getElementById(`player${i}`);
            let labelElement = document.getElementById(`player${i}-label`);
            if (i <= spielerZahl) {
                inputElement.disabled = false;
                labelElement.style.opacity = "1";

            }
            else {
                inputElement.disabled = true;
                labelElement.style.opacity = "0.33";
                inputElement.value = "";
            }
        }
    }
}