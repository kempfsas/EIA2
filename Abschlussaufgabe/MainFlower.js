var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class MainFlower {
        constructor() {
            this.x = 300;
            this.y = 300;
        }
        checkPosition() {
        }
        setRandomPosition() {
            this.x = Math.random() * Abschlussaufgabe.crc2.canvas.width;
            this.y = Math.random() * (Abschlussaufgabe.crc2.canvas.height - 200);
        }
        draw() {
            //Bl�tenbl�tter
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x, this.y + 40, this.x + 30, this.y + 40, this.x, this.y);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x, this.y - 40, this.x - 30, this.y - 40, this.x, this.y);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x, this.y - 40, this.x + 30, this.y - 40, this.x, this.y);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x, this.y + 40, this.x - 30, this.y + 40, this.x, this.y);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x + 40, this.y + 40, this.x + 30, this.y, this.x, this.y);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x - 40, this.y - 40, this.x - 30, this.y, this.x, this.y);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x + 40, this.y - 40, this.x + 30, this.y, this.x, this.y);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x - 40, this.y + 40, this.x - 30, this.y, this.x, this.y);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            //Inneres der Blume
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "yellow";
            //crc2.lineWidth = 5;
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.MainFlower = MainFlower;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=MainFlower.js.map