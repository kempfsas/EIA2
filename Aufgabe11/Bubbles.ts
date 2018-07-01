namespace Aufgabe11 {


    export class Bubble extends MovingObject {
        /*x: number;
        y: number;
        radius: number;*/

        constructor() {
            super();
            this.setRandomPosition();
            this.setColor();
        }

        setRandomPosition(): void {
            this.x = (740);
            this.y = Math.random() * 625;
            this.radius = Math.random() * 10;
            }
        
        setColor(): void {
            this.color = "rgb(230, 255, 247)";
            }
        
        move(): void {
            this.x += 0;
            this.y -= 2;
            
            if (this.y < 0) {
                this.y = 625;
}
        }


        //Funktion für Luftblasen
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;//"rgb(230, 255, 247)";
            crc2.arc( this.x, this.y, this.radius, 0,2*Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }

}