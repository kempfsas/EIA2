namespace Aufgabe10 {

    export class Fishes {
        x: number;
        y: number;
        r: number;
        b: number;
        g: number;

        move(): void {

            //this.x -= 2;
            //this.y += 0;

            this.x += - 2;
            if (this.x < -80) {
                this.x = crc2.canvas.width;
            }
            this.y += 0;
        }

        //Funktion Fische
        draw(): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x - 35, this.y, this.x - 35, this.y - 25, this.x, this.y - 25);
            crc2.moveTo(this.x, this.y - 25);
            crc2.lineTo(this.x + 25, this.y - 15);
            crc2.lineTo(this.x + 30, this.y - 20);
            crc2.lineTo(this.x + 30, this.y);
            crc2.lineTo(this.x + 25, this.y - 10);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            ctx.stroke();
            ctx.fill();
            crc2.closePath();
        }

    }


}

