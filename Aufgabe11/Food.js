var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObject {
        /* x: number;
        y: number;
        radius: number;*/
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 12;
        }
        move() {
            this.x += 0;
            /*this.y += 2;
            if (this.y < 0) {
                this.y = 0;

            }*/
            if (this.y < 725) {
                this.y += 2;
            }
            else if (this.y >= 725) {
                this.y += 0;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Food.js.map