var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    function hintergrund() {
        background();
        gameName();
    }
    Abschlussaufgabe.hintergrund = hintergrund;
    function background() {
        let gradient = Abschlussaufgabe.crc2.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, "#a9c9e9");
        //gradient.addColorStop(1, "#97b065");
        gradient.addColorStop(1, "#6b8e23");
        Abschlussaufgabe.crc2.fillStyle = gradient;
        Abschlussaufgabe.crc2.fillRect(0, 0, 1000, 700);
    }
    function gameName() {
        Abschlussaufgabe.crc2.font = "150px Indie Flower";
        Abschlussaufgabe.crc2.fillStyle = "#6b8e23"; //"#97b065";
        Abschlussaufgabe.crc2.fillText("Busy Bee", 120, 300);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Background.js.map