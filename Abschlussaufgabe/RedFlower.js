var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class RedFlower extends Abschlussaufgabe.MainFlower {
        constructor() {
            super();
            this.setColor();
            // this.draw();
        }
        setColor() {
            this.color = "red";
        }
    }
    Abschlussaufgabe.RedFlower = RedFlower;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=RedFlower.js.map