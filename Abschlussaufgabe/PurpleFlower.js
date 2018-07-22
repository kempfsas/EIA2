var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class PurpleFlower extends Abschlussaufgabe.MainFlower {
        constructor() {
            super();
            this.setColor();
            // this.draw();
        }
        setColor() {
            this.color = "purple";
        }
    }
    Abschlussaufgabe.PurpleFlower = PurpleFlower;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=PurpleFlower.js.map