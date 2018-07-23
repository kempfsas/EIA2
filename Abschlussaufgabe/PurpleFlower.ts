namespace Abschlussaufgabe {

    export class PurpleFlower extends MainFlower {

        constructor() {
            super();
            this.setColor();
            this.setRandomPosition();
            this.points = 4;
           // this.draw();
        }
        
        setColor(): void {
            this.color = "purple";
        }
        
        //draw(): void {
         /*   
            //Innere der Blume
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            //crc2.lineWidth = 5;
            crc2.moveTo(this.x, this.y);
            crc2.arc( this.x, this.y, 5, 0,2*Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            
            //Blütenblätter
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            
            */
            
       // }
    }
}