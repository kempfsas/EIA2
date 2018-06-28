namespace Aufgabe11 {
    
    export class Fish extends MovingObject {
        
     constructor(_color: string) {
            super(_color);
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
            this.r = Math.random() * 600;
            this.g = Math.random() * 100;
            this.b = Math.random() * 200;
        }
        
        move(): void {
            this.x += - 2;
            if (this.x < -80) {
                this.x = crc2.canvas.width;
            }
            this.y += 0;
        }
        
     //Funktion Fische
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x - 35, this.y, this.x - 35, this.y - 25, this.x, this.y - 25);
            crc2.moveTo(this.x, this.y - 25);
            crc2.lineTo(this.x + 25, this.y - 15);
            crc2.lineTo(this.x + 30, this.y - 20);
            crc2.lineTo(this.x + 30, this.y);
            crc2.lineTo(this.x + 25, this.y - 10);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
        }
    }