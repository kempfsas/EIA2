var Aufgabe10;
(function (Aufgabe10) {
    class Starfish {
        move() {
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2 - 1;
        }
        //Funktion f�r Seesterne
        drawStarfish() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(255, 51, 255)";
            Aufgabe10.crc2.moveTo(this.x, this.y - 25);
            Aufgabe10.crc2.lineTo(this.x + 20, this.y);
            Aufgabe10.crc2.lineTo(this.x - 5, this.y + 25);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y + 18);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y + 40);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y + 12);
            Aufgabe10.crc2.lineTo(this.x + 80, this.y - 5);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y - 8);
            Aufgabe10.crc2.lineTo(this.x + 50, this.y - 35);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y - 12);
            Aufgabe10.crc2.lineTo(this.x, this.y - 25);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Starfish = Starfish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Starfish.js.map