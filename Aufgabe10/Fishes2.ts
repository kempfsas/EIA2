namespace Aufgabe10 {

    export class Fishes2 {
        x: number;
        y: number;
        r: number;
        b: number;
        g: number;

        move(): void {
            this.x += 2;
            this.y += 0;
        }

        drawFish2(): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20); //vorderer Teil Fisch
            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x - 20, this.y + 10); //Schwanzflosse
            crc2.lineTo(this.x - 25, this.y + 15); //Schwanzflosse
            crc2.lineTo(this.x - 25, this.y);
            crc2.lineTo(this.x - 20, this.y + 5); //hinterer Teil Fisch
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            ctx.fill();

        }
    }
}