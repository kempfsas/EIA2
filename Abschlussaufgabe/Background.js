var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    function hintergrund() {
        background();
    }
    Abschlussaufgabe.hintergrund = hintergrund;
    function background() {
        let gradient = Abschlussaufgabe.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#97b065");
        gradient.addColorStop(1, "#6b8e23");
        Abschlussaufgabe.crc2.fillStyle = gradient;
        Abschlussaufgabe.crc2.fillRect(0, 0, 1000, 700);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Background.js.map