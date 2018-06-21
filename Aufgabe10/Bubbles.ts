namespace Aufgabe10 {


    export class Bubbles {
        x: number;
        y: number;
        radius: number;


        move(): void {
            this.x += 0;
            this.y -= 2;
        }


        //Funktion für Luftblasen
        drawBubble(): void {
            ctx.beginPath();
            crc2.fillStyle = "rgb(230, 255, 247)";
            ctx.arc( this.x, this.y, this.radius, 0,2*Math.PI);
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }

    }

}