var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class BlueFlower extends Abschlussaufgabe.MainFlower {
        constructor() {
            super();
            this.setColor();
            this.checkPosition();
            this.setRandomPosition();
            this.blossoms = 1;
            // this.draw();
        }
        setColor() {
            this.color = "blue";
        }
    }
    Abschlussaufgabe.BlueFlower = BlueFlower;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=BlueFlower.js.map