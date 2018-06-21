namespace Aufgabe10 {


    export class Starfish {
        x: number;
        y: number;


        move(): void {
            this.x += Math.random() * 4 - 2;;
            this.y += Math.random() * 4 - 2;
        }


        //Funktion für Seesterne
        drawStarfish(): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255, 51, 255)"; 
        crc2.moveTo(this.x, this.y -25);
        crc2.lineTo(this.x + 20, this.y);
        crc2.lineTo(this.x -5, this.y +25);   
        crc2.lineTo(this.x +30, this.y + 18);
        crc2.lineTo(this.x +50, this.y + 40);
        crc2.lineTo(this.x + 50, this.y+12);
        crc2.lineTo(this.x +80, this.y - 5);
        crc2.lineTo(this.x + 50, this.y -8);
        crc2.lineTo(this.x +50, this.y -35);
        crc2.lineTo(this.x + 30, this.y -12);
        crc2.lineTo(this.x, this.y-25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
}
        
       
    }

}