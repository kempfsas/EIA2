var Aufgabe11;
(function (Aufgabe11) {
    class Bubble extends Aufgabe11.MovingObject {
        /*x: number;
        y: number;
        radius: number;*/
        constructor() {
            super();
            this.setRandomPosition();
            this.setColor();
        }
        setRandomPosition() {
            this.x = (740);
            this.y = Math.random() * 625;
            this.radius = Math.random() * 10;
        }
        setColor() {
            this.color = "rgb(230, 255, 247)";
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 625;
            }
        }
        //Funktion f�r Luftblasen
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.color; //"rgb(230, 255, 247)";
            Aufgabe11.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Bubble = Bubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Bubbles.js.map