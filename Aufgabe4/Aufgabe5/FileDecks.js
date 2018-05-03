var Aufgabe5;
(function (Aufgabe5) {
    Aufgabe5.decks = {}; //Objekt
    function populateDecks() {
        Aufgabe5.decks["animals"] = {
            name: "animals",
            content: ["Panda", "Koala", "L�we", "Delfin", "Hase", "B�r", "Katze", "Hund", "Wal", "Kaninchen"],
            color: "#99ccff",
            font: "Arial",
            size: "125%",
            textColor: "#001a33"
        };
        Aufgabe5.decks["fruits"] = {
            name: "fruits",
            content: ["Apfel", "Birne", "Banane", "Ananas", "Mango", "Pfirsich", "Papaya", "Orange", "Traube", "Kiwi", "Melone", "Kirsche"],
            color: "#ff6666",
            font: "Times New Roman",
            size: "115%",
            textColor: "white"
        };
        Aufgabe5.decks["veggies"] = {
            name: "veggies",
            content: ["Karotte", "Kartoffel", "Tomate", "Erbse", "Zucchini", "Aubergine", "Gurke", "Paprika", "Spargel", "Bohne", "Lauch", "Brokkoli", "Zwiebel", "Sellerie"],
            color: "#ffb3b3",
            font: "Calibri",
            size: "130%",
            textColor: "dark-gray"
        };
    }
    Aufgabe5.populateDecks = populateDecks;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=FileDecks.js.map