namespace L11_Inheritance {
    export class Triangle extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }
        
        move(): void {
            this.x += - 2;
            if (this.x < -80) {
                this.x = crc2.canvas.width;
            }
            this.y += 0;
        }
        

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            
            
            }
    }
}