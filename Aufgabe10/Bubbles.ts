namespace Aufgabe10 {


    export class Bubbles {
        x: number;
        y: number;
        radius: number;


        move(): void {
            this.x += 0;
            this.y -= 2;
            
            if (this.y < 0) {
                this.y = 625;
}
        }


        //Funktion für Luftblasen
        drawBubble(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(230, 255, 247)";
            crc2.arc( this.x, this.y, this.radius, 0,2*Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }

}