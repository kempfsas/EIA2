namespace Abschlussaufgabe {

    export class MainFlower {
        x: number;
        y: number;
        radius: number;
        color: string;

        constructor() {
            this.x = 300;
            this.y = 300;
        }

        draw() {

            //Blütenblätter
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x, this.y + 40, this.x + 30, this.y + 40, this.x, this.y);
            crc2.bezierCurveTo(this.x, this.y - 40, this.x - 30, this.y - 40, this.x, this.y);

            crc2.bezierCurveTo(this.x, this.y - 40, this.x + 30, this.y - 40, this.x, this.y);
            crc2.bezierCurveTo(this.x, this.y + 40, this.x - 30, this.y + 40, this.x, this.y);

            crc2.bezierCurveTo(this.x + 40, this.y + 40, this.x + 30, this.y, this.x, this.y);
            crc2.bezierCurveTo(this.x - 40, this.y - 40, this.x - 30, this.y, this.x, this.y);

            crc2.bezierCurveTo(this.x + 40, this.y - 40, this.x + 30, this.y, this.x, this.y);
            crc2.bezierCurveTo(this.x - 40, this.y + 40, this.x - 30, this.y, this.x, this.y);

            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Inneres der Blume
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            //crc2.lineWidth = 5;
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();


        }

    }


}