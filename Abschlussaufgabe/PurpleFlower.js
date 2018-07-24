var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class PurpleFlower extends Abschlussaufgabe.MainFlower {
        constructor() {
            super();
            this.setColor();
            this.setRandomPosition();
            this.score = 4;
            // this.draw(); 
        }
        setColor() {
            this.color = "purple";
        }
    }
    Abschlussaufgabe.PurpleFlower = PurpleFlower;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=PurpleFlower.js.map