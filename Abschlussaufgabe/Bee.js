var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Bee {
        constructor() {
            this.beeAreaOne = 30;
            this.beeAreaTwo = 30;
            this.x = 100;
            this.y = 100;
        }
        move() { }
        moveLeft() {
            if (this.x > 0) {
                this.x -= 10;
            }
        }
        moveRight() {
            if (this.x < Abschlussaufgabe.crc2.canvas.width) {
                this.x += 10;
            }
        }
        moveUp() {
            if (this.y > 0) {
                this.y -= 10;
            }
        }
        moveDown() {
            if (this.y < Abschlussaufgabe.crc2.canvas.height) {
                this.y += 10;
            }
        }
        draw() {
            //K�rper
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "yellow";
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            //Streifen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 10, this.y - 12); //erster Streifen
            Abschlussaufgabe.crc2.lineTo(this.x - 10, this.y + 12);
            Abschlussaufgabe.crc2.moveTo(this.x, this.y - 15); //zweiter Streifen
            Abschlussaufgabe.crc2.lineTo(this.x, this.y + 15);
            Abschlussaufgabe.crc2.moveTo(this.x + 10, this.y - 12); //dritter Streifen
            Abschlussaufgabe.crc2.lineTo(this.x + 10, this.y + 12);
            Abschlussaufgabe.crc2.lineWidth = 4; //Dicke der Streifen
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            //Fl�gel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "lightblue";
            Abschlussaufgabe.crc2.moveTo(this.x, this.y - 15);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 10, this.y - 40, this.x + 30, this.y - 35);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 30, this.y, this.x, this.y - 15);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x - 10, this.y - 40, this.x - 30, this.y - 35);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x - 30, this.y, this.x, this.y - 15);
            /*crc2.quadraticCurveTo(110, 120, 130, 125);
            crc2.quadraticCurveTo(130, 105, 100, 85);
            crc2.quadraticCurveTo(90, 120, 70, 125);
            crc2.quadraticCurveTo(70, 105, 100, 85);*/
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        }
        collectedFlowers(_x, _y) {
            if (_x > this.x && _x < (this.x + this.beeAreaOne) && _y > this.y && _y < this.y + this.beeAreaTwo) {
                return true;
            }
            return false;
        }
    }
    Abschlussaufgabe.Bee = Bee;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Bee.js.map