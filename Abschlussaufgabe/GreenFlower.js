var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class GreenFlower extends Abschlussaufgabe.MainFlower {
        constructor() {
            super();
            this.setColor();
            this.checkPosition();
            this.setRandomPosition();
            this.blossoms = -3;
            // this.draw();
        }
        setColor() {
            this.color = "green";
        }
    }
    Abschlussaufgabe.GreenFlower = GreenFlower;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=GreenFlower.js.map