var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObject {
        /*x: number;
        y: number;
        r: number;
        b: number;
        g: number;
        radius: number;
        color: string;*/
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11.crc2.canvas.height;
            this.r = Math.random() * 600;
            this.g = Math.random() * 100;
            this.b = Math.random() * 200;
        }
        move() {
            this.x += -2;
            if (this.x < -80) {
                this.x = Aufgabe11.crc2.canvas.width;
            }
            this.y += 0;
        }
        //Funktion Fische
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.bezierCurveTo(this.x - 35, this.y, this.x - 35, this.y - 25, this.x, this.y - 25);
            Aufgabe11.crc2.moveTo(this.x, this.y - 25);
            Aufgabe11.crc2.lineTo(this.x + 25, this.y - 15);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y);
            Aufgabe11.crc2.lineTo(this.x + 25, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Fishes.js.map