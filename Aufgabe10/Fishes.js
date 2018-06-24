var Aufgabe10;
(function (Aufgabe10) {
    class Fishes {
        move() {
            //this.x -= 2;
            //this.y += 0;
            this.x += -2;
            if (this.x < -80) {
                this.x = Aufgabe10.crc2.canvas.width;
            }
            this.y += 0;
        }
        //Funktion Fische
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.bezierCurveTo(this.x - 35, this.y, this.x - 35, this.y - 25, this.x, this.y - 25);
            Aufgabe10.crc2.moveTo(this.x, this.y - 25);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y - 15);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y - 20);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y - 10);
            Aufgabe10.crc2.lineTo(this.x, this.y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
        }
    }
    Aufgabe10.Fishes = Fishes;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Fishes.js.map