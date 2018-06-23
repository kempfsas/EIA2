var Aufgabe10;
(function (Aufgabe10) {
    class Bubbles {
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 625;
            }
        }
        //Funktion f�r Luftblasen
        drawBubble() {
            Aufgabe10.ctx.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(230, 255, 247)";
            Aufgabe10.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            Aufgabe10.crc2.closePath();
            Aufgabe10.ctx.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Bubbles = Bubbles;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Bubbles.js.map