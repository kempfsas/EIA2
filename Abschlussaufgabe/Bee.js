var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Bee {
        constructor() {
            this.x = 100;
            this.y = 100;
        }
        move() { }
        draw() {
            //Kopf
            /*crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y-10, 10, 0,2*Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();*/
            //K�rper
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "yellow";
            //crc2.lineWidth = 5;
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            //Streifen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(90, 88); //erster Streifen
            Abschlussaufgabe.crc2.lineTo(90, 112);
            Abschlussaufgabe.crc2.moveTo(100, 85); //zweiter Streifen
            Abschlussaufgabe.crc2.lineTo(100, 115);
            Abschlussaufgabe.crc2.moveTo(110, 88); //dritter Streifen
            Abschlussaufgabe.crc2.lineTo(110, 112);
            Abschlussaufgabe.crc2.lineWidth = 4; //Dicke der Streifen
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            //Fl�gel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "lightblue";
            Abschlussaufgabe.crc2.moveTo(100, 85);
            Abschlussaufgabe.crc2.quadraticCurveTo(110, 60, 130, 65);
            Abschlussaufgabe.crc2.quadraticCurveTo(130, 100, 100, 85);
            Abschlussaufgabe.crc2.quadraticCurveTo(90, 60, 70, 65);
            Abschlussaufgabe.crc2.quadraticCurveTo(70, 100, 100, 85);
            /*crc2.quadraticCurveTo(110, 120, 130, 125);
            crc2.quadraticCurveTo(130, 105, 100, 85);
            crc2.quadraticCurveTo(90, 120, 70, 125);
            crc2.quadraticCurveTo(70, 105, 100, 85);*/
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Bee = Bee;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Bee.js.map