namespace Aufgabe11 {

    export class Food extends MovingObject {
        /* x: number;
        y: number;
        radius: number;*/

        constructor() {
            super();
            this.setRandomPosition();
            this.setColor();
            //this.x = newX;
            //this.y = newY;
            this.radius = 4;  
        }

        /*setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
            this.radius = Math.random() * 12;
        }*/
        
        setColor(): void {
            this.color = "rgb(204, 102, 0)";
            }

        move(): void {
           this.x += 0;
            /*this.y += 2;
            if (this.y < 0) {
                this.y = 0;

            }*/
            
            if (this.y < 725) {
                this.y += 2;
        }
            else if (this.y >= 725) {
                this.y += 0
            }
            
            }
        
        


        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}