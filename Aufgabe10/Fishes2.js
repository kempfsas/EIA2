var Aufgabe10;
(function (Aufgabe10) {
    class FishesChangedDirection {
        moveFish() {
            this.x += 2;
            if (this.x < +100) {
                this.x = Aufgabe10.crc2.canvas.width;
            }
            this.y += 0;
        }
        drawFish2() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20); //vorderer Teil Fisch
            Aufgabe10.crc2.moveTo(this.x, this.y + 20);
            Aufgabe10.crc2.lineTo(this.x - 20, this.y + 10); //Schwanzflosse
            Aufgabe10.crc2.lineTo(this.x - 25, this.y + 15); //Schwanzflosse
            Aufgabe10.crc2.lineTo(this.x - 25, this.y);
            Aufgabe10.crc2.lineTo(this.x - 20, this.y + 5); //hinterer Teil Fisch
            Aufgabe10.crc2.lineTo(this.x, this.y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.FishesChangedDirection = FishesChangedDirection;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Fishes2.js.map