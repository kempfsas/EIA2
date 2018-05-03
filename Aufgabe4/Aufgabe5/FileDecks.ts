namespace Aufgabe5 {
    export interface Deck {

        name: string;
        content: string[];
        color: string;
        font: string;
        size: string;
        textColor: string;
    }

    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {}  //Objekt
    export function populateDecks() {
        decks["animals"] = {
            name: "animals",
            content: ["Panda", "Koala", "Löwe", "Delfin", "Hase", "Bär", "Katze", "Hund", "Wal", "Kaninchen"],
            color: "#99ccff",
            font: "Arial",
            size: "125%",
            textColor: "#001a33"
        };

        decks["fruits"] = {
            name: "fruits",
            content: ["Apfel", "Birne", "Banane", "Ananas", "Mango", "Pfirsich", "Papaya", "Orange", "Traube", "Kiwi", "Melone", "Kirsche"],
            color: "#ff6666",
            font: "Times New Roman",
            size: "115%",
            textColor: "white"
        };

        decks["veggies"] = {
            name: "veggies",
            content: ["Karotte", "Kartoffel", "Tomate", "Erbse", "Zucchini", "Aubergine", "Gurke", "Paprika", "Spargel", "Bohne", "Lauch","Brokkoli", "Zwiebel", "Sellerie"],
            color: "#ffb3b3",
            font: "Calibri",
            size: "130%",
            textColor: "dark-gray"
        };
    }
}







