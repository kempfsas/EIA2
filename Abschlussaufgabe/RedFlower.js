var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class RedFlower extends Abschlussaufgabe.MainFlower {
        constructor() {
            super();
            this.setColor();
            this.setRandomPosition();
            this.points = 2;
            // this.draw();
        }
        setColor() {
            this.color = "red";
        }
    }
    Abschlussaufgabe.RedFlower = RedFlower;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=RedFlower.js.map