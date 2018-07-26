var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class RedFlower extends Abschlussaufgabe.MainFlower {
        constructor() {
            super();
            this.setColor();
            this.checkPosition();
            this.setRandomPosition();
            this.blossoms = 2;
            // this.draw();
        }
        setColor() {
            this.color = "red";
        }
    }
    Abschlussaufgabe.RedFlower = RedFlower;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=RedFlower.js.map