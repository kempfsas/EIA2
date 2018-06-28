var Aufgabe11;
(function (Aufgabe11) {
    class Starfish extends Aufgabe11.MovingObject {
        //x: number;
        //y: number;
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = (460);
            this.y = (690);
        }
        move() {
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2 - 1;
        }
        //Funktion f�r Seesterne
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.color; //"rgb(255, 51, 255)";
            Aufgabe11.crc2.moveTo(this.x, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x + 20, this.y);
            Aufgabe11.crc2.lineTo(this.x - 5, this.y + 25);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y + 18);
            Aufgabe11.crc2.lineTo(this.x + 50, this.y + 40);
            Aufgabe11.crc2.lineTo(this.x + 50, this.y + 12);
            Aufgabe11.crc2.lineTo(this.x + 80, this.y - 5);
            Aufgabe11.crc2.lineTo(this.x + 50, this.y - 8);
            Aufgabe11.crc2.lineTo(this.x + 50, this.y - 35);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y - 12);
            Aufgabe11.crc2.lineTo(this.x, this.y - 25);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Starfish = Starfish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Starfish.js.map